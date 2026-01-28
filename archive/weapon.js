// weapon.js
import { Entry } from "./entry.js";

export class Weapon extends Entry {

    constructor() {
        super('weapon');
    }

    static deserialize(data) {
        const weapon = new Weapon();

        Entry.deserialize(data, weapon);
        weapon.type = 'weapon';

        return weapon;
    }

}