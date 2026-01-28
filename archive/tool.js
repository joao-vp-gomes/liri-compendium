// tool.js
import { Entry } from "./entry.js";

export class Tool extends Entry {

    constructor() {
        super('tool');
    }

    static deserialize(data) {
        const tool = new Tool();

        Entry.deserialize(data, tool);
        tool.type = 'tool';

        return tool;
    }

}