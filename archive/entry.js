// entry.js
import {Codex} from "./codex.js";

export class Entry {

    static KEY_LENGTH = 12;
    static KEY_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    #key = Entry._generateKey();
    #type = '-';
    #name = '-';
    #imagePath = '-';
    #description = '-';
    #tags= new Set();
    #modifiers = [];
    #fields = {};

    constructor(type) {
        this.type = type;
        this._initializeFields();
    }

    _initializeFields() {

        const dynamicGroups = Codex.ENTRY_TYPES[this.type] || [];

        dynamicGroups.forEach(group => {
            group.fields.forEach(fieldSchema => {

                const fieldName = fieldSchema.name;
                const isString = fieldSchema.type === 'string';

                this.#fields[fieldName] = isString ? "" : 0;

                Object.defineProperty(this, fieldName, {
                    get: () => this.#fields[fieldName],
                    set: (val) => {
                        if (isString) this.#fields[fieldName] = String(val);
                        else if (typeof val === 'number' && !isNaN(val)) this.#fields[fieldName] = val;
                    },
                    enumerable: true,
                    configurable: true
                });
            });
        });
    }

    static _generateKey() {
        const chars = Entry.KEY_CHARS;
        const length = Entry.KEY_LENGTH;

        return Array.from({ length }, () =>
            chars[Math.floor(Math.random() * chars.length)]
        ).join('');
    }
    set key(key) {
        if (key === null) this.#key = Entry._generateKey();
        else if (typeof key === 'string') this.#key = key;
    }
    get key() {
        return this.#key;
    }

    set type(type) {
        if (type === null) return;
        if (typeof type !== 'string') return;
        if (!(type in Codex.ENTRY_TYPES)) return;

        this.#type = type;
    }
    get type() {
        return this.#type;
    }

    set name(name) {
        if (typeof name !== 'string') return;
        this.#name = name;
    }
    get name() {
        return this.#name
    }

    set imagePath(imagePath) {
        if (typeof imagePath !== 'string') return;

        this.#imagePath = imagePath;
    }
    get imagePath() {
        return this.#imagePath;
    }
    getFullImagePath() {
        return `../images/${(this.imagePath === '-' || !this.imagePath) ? this.type+'.png' : this.imagePath}`;
    }

    set description(description) {
        if (typeof description !== 'string') return;

        this.#description = description;
    }
    get description() {
        return this.#description
    }

    set tags(tags) {
        if (!Array.isArray(tags)) return;
        this.clearTags();
        tags.forEach(tag => this.addTag(tag));
    }
    get tags() {
        return Array.from(this.#tags);
    }
    addTag(tag) {
        if(tag === null) return;
        if (typeof tag !== 'string') return;

        this.#tags.add(tag);
    }
    removeTag(tag) {
        if (tag === null) return;
        if (typeof tag !== 'string') return;

        if (this.hasTag(tag)) this.#tags.delete(tag);
    }
    hasTag(tag) {
        if (tag === null) return false;
        if (typeof tag !== 'string') return false;

        return this.#tags.has(tag);
    }
    clearTags() {
        this.#tags.clear();
    }

    set modifiers(list) {
        if (!Array.isArray(list)) return;
        this.#modifiers = list.map(modifiers => ({
            name: modifiers.name || "",
            description: modifiers.description || "",
            effects: Array.isArray(modifiers.effects) ? modifiers.effects.map(e => ({...e})) : []
        }));
    }
    get modifiers() {
        return JSON.parse(JSON.stringify(this.#modifiers));
    }
    addModifier(modifier) {
        if (typeof modifier !== 'object' || modifier === null || !modifier.name) return;

        const exists = this.#modifiers.some(p => p.name === modifier.name);
        if (exists) return;

        this.#modifiers.push({
            name: modifier.name,
            description: modifier.description || "",
            effects: Array.isArray(modifier.effects) ? [...modifier.effects] : []
        });
    }
    removeModifier(modifierName) {
        if (typeof modifierName !== 'string') return;
        const initialLength = this.#modifiers.length;
        this.#modifiers = this.#modifiers.filter(p => p.name !== modifierName);
        return this.#modifiers.length !== initialLength;
    }

    serialize() {
        return {
            key: this.key,
            type: this.type,
            name: this.name,
            description: this.description,
            imagePath: this.imagePath,
            tags: this.tags,
            modifiers: this.modifiers,
            ...this.#fields
        };
    }
    static deserialize(data, entry) {

        entry.key = data.key;
        entry.name = data.name;
        entry.description = data.description;
        entry.imagePath = data.imagePath;
        entry.tags = data.tags || [];
        entry.modifiers = data.modifiers || [];

        const dynamicGroups = Codex.ENTRY_TYPES[entry.type] || [];
        dynamicGroups.forEach(group => {
            group.fields.forEach(fieldSchema => {
                const fieldName = fieldSchema.name;
                if (data[fieldName] !== undefined) entry[fieldName] = data[fieldName];
            });
        });

        return entry;
    }
}