// character.js
import { Entry } from "./entry.js";
import Archive from "./archive.js";
import {Codex} from "./codex.js";

export class Character extends Entry {

    #bag = [];
    #equipment = Object.values(Codex.CHARACTER_EQUIPMENT).reduce((acc, category) => {
        Object.keys(category).forEach(key => {
            acc[key] = {
                slot: null,
                validTypes: category[key]
            };
        });
        return acc;
    }, {});
    #status = Codex.STATUS_LIST.reduce((acc, s) => {
        acc['current-'+s.name] = 0;
        return acc;
    }, {});

    constructor() {
        super('character');
        this._initializeCurrentStatuses();
    }

    _initializeCurrentStatuses() {
        Codex.STATUS_LIST.forEach(s => {
            const currentName = `current-${s.name}`;
            if (!(currentName in this.#status)) {
                this.#status[currentName] = 0;
            }
        });
    }

    getCurrentStatus(statusName) {
        const currentName = `current-${statusName}`;
        return this.#status[currentName] ?? 0;
    }
    setCurrentStatus(statusName, value) {
        const currentName = `current-${statusName}`;
        if (!(currentName in this.#status)) return;

        const max = this.getMaxStatus(statusName);
        this.#status[currentName] = Math.max(0, Math.min(value, max));

        return this.#status[currentName];
    }
    modifyCurrentStatus(statusName, delta) {
        const currentName = `current-${statusName}`;
        const newValue = (this.#status[currentName] || 0) + delta;
        return this.setCurrentStatus(statusName, newValue);
    }

    get bag() {
        return this.#bag;
    }
    holds(key) {
        for (const item of this.#bag) { if (item.reference.key === key) return true; }
        return false;
    }
    findItemsByKey(key) {
        return this.#bag.filter(item => item.reference.key === key);
    }
    pick(item) {
        if (!item || !item.reference || !item.reference.key) return;

        const isStackable = Codex.STACKABLE_ITEMS.includes(item.reference.type);

        if (isStackable) {
            let existing = this.#bag.find(i => i.reference.key === item.reference.key);
            if (existing) {
                existing.amount = (existing.amount || 0) + (item.amount ?? 1);
            } else {
                this.#bag.push({
                    reference: { ...item.reference },
                    amount: item.amount ?? 1
                });
            }
        }
        else {
            const newItem = { reference: { ...item.reference } };
            if (item.reference['max-durability'] !== undefined) {
                newItem.durability = item.durability !== undefined ?
                    Math.min(item.reference['max-durability'], item.durability) :
                    item.reference['max-durability'];
            }
            this.#bag.push(newItem);
        }
    }
    drop(item, amount = 1) {
        const index = this.#bag.indexOf(item);
        if (index === -1) return null;

        let dropped;
        if (item.amount !== undefined) {
            if (amount === -1 || amount >= item.amount) {
                this.#bag.splice(index, 1);
                dropped = item;
            }
            else {
                item.amount -= amount;
                dropped = { ...item, amount: amount };
            }
        }
        else {
            this.#bag.splice(index, 1);
            dropped = item;
        }

        return dropped;
    }
    async transferItem(sender, receiver, item, amount = 1) {
        if (!sender || !receiver || !item) return false;

        const dropped = sender.drop(item, amount);
        if (dropped) receiver.pick(dropped);
    }
    repairItem(item, value = 1) {
        if (!item || item.durability === undefined) return;

        if (!item.reference || item.reference['max-durability'] === undefined) return;

        if (value === -1) item.durability = item.reference['max-durability'];
        else item.durability = Math.min(item.durability + value, item.reference['max-durability']);
    }
    outwearItem(item, value = 1) {
        if (!item || item.durability === undefined) return;

        if (value === -1) item.durability = 0;
        else item.durability = Math.max(item.durability - value, 0);
    }

    setEquipmentSlot(slotName, item) {
        const equip = this.#equipment[slotName];
        if (!equip) return;
        const index = this.#bag.indexOf(item);
        if (index === -1) return;
        if (!item.reference || !equip.validTypes.includes(item.reference.type)) return;

        if (equip.slot) this.pick(equip.slot);
        const dropped = this.drop(item, -1);
        if (dropped) equip.slot = dropped;
    }
    getEquipmentSlot(slotName) {
        return this.#equipment[slotName]?.slot || null;
    }
    clearEquipmentSlot(slotName) {
        const equip = this.#equipment[slotName];
        if (equip && equip.slot) {
            this.pick(equip.slot);
            equip.slot = null;
        }
    }

    async validateInventory() {
        for (const item of [...this.#bag]) {
            const archiveEntry = await Archive.contains(item.reference.key);
            if (!archiveEntry) this.drop(item, -1);
            else item.reference = archiveEntry.serialize();
        }
        for (const key in this.#equipment) {
            // Ajustado para acessar o item corretamente conforme a estrutura de classes
            const item = this.#equipment[key].slot;
            if (!item) continue;
            const archiveEntry = await Archive.contains(item.reference.key);
            if (!archiveEntry) {
                this.#equipment[key].slot = null;
            } else {
                item.reference = archiveEntry.serialize();
            }
        }
    }

    getMaxStatus(statusName) {
        const statusSchema = Codex.STATUS_LIST.find(s => s.name === statusName);
        if (!statusSchema) return 0;

        const { attributes, a, b } = statusSchema;

        let x = 0;
        for (const attribute of attributes) {
            const baseValue = this[attribute] || 0;
            const modifier = this.gatherModifier(attribute);
            x += (baseValue + modifier);
        }
        let y = Math.floor(a * x) + b;
        y += this.gatherModifier(statusName);

        return y;
    }

    gatherModifier(effectIdentifier) {
        let accumulation = 0;

        this.modifiers.forEach(modifier => {
            modifier.effects.forEach(effect => {
                if (effect.identifier === effectIdentifier) accumulation += effect.value;
            });
        });

        for (const slotName in this.#equipment) {
            const item = this.#equipment[slotName].slot;
            if (!item || !item.reference || !item.reference.modifiers) continue;
            item.reference.modifiers.forEach(modifier => {
                modifier.effects.forEach(effect => {
                    if (effect.identifier === effectIdentifier) accumulation += effect.value;
                });
            });
        }
        return accumulation;

    }

    serialize() {
        const baseData = super.serialize();
        return JSON.parse(JSON.stringify({
            ...baseData,
            bag: this.#bag,
            status: this.#status,
            equipment: Object.keys(this.#equipment).reduce((acc, slot) => {
                acc[slot] = this.#equipment[slot].slot;
                return acc;
            }, {})
        }));
    }
    static deserialize(data) {
        const character = new Character();

        Entry.deserialize(data, character);
        character.type = 'character'

        if (data.bag) character.#bag = data.bag;
        if (data.status) {
            for (const key in data.status) {
                character.#status[key] = data.status[key];
            }
        }
        if (data.equipment) {
            for (const slot in data.equipment) {
                if (character.#equipment[slot]) {
                    character.#equipment[slot].slot = data.equipment[slot];
                }
            }
        }
        return character;
    }
}
