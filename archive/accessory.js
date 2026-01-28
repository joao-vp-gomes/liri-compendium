// accessory.js
import { Entry } from "./entry.js";

export class Accessory extends Entry {

    constructor() {
        super('accessory');
    }

    static deserialize(data) {
        const accessory = new Accessory();

        Entry.deserialize(data, accessory);
        accessory.type = 'accessory';

        return accessory;
    }

}