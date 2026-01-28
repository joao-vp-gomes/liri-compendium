// material.js
import { Entry } from "./entry.js";

export class Material extends Entry {

    constructor() {
        super('material');
    }

    static deserialize(data) {
        const material = new Material();

        Entry.deserialize(data, material);
        material.type = 'material';

        return material;
    }

}