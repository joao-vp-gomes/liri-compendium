// apparel.js
import { Entry } from "./entry.js";

export class Apparel extends Entry {

    constructor() {
        super('apparel');
    }

    static deserialize(data) {
        const apparel = new Apparel();

        Entry.deserialize(data, apparel);
        apparel.type = 'apparel';

        return apparel;
    }

}