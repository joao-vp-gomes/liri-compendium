// ability.js
import { Entry } from "./entry.js";

export class Ability extends Entry {

    constructor() {
        super('ability');
    }

    static deserialize(data) {
        const ability = new Ability();

        Entry.deserialize(data, ability);
        ability.type = 'ability';

        return ability;
    }

}
