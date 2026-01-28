// entryFactory.js
import { Weapon } from "./weapon.js";
import { Tool } from "./tool.js";
import { Apparel } from "./apparel.js";
import { Accessory } from "./accessory.js";
import { Ability } from "./ability.js";
import { Character } from "./character.js";
import {Material} from "./material.js";

export class EntryFactory {

    static #map = {
        'weapon': Weapon,
        'tool': Tool,
        'apparel': Apparel,
        'accessory': Accessory,
        'ability': Ability,
        'material': Material,
        'character': Character
    };

    static deserialize(data) {

        if (!this.#map[data.type]) data.type = 'weapon';

        const ClassReference = this.#map[data.type];
        if (!ClassReference) return null;
        return ClassReference.deserialize(data);
    }
}