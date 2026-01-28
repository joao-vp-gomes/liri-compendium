import { ref, set, get, child, remove } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-database.js";
import { EntryFactory } from "./entryFactory.js";

const Archive = {

    get dbRef() {
        return ref(window.db);
    },

    async fetch(key) {
        try {
            const snapshot = await get(child(this.dbRef, `entries/${key}`));
            if (snapshot.exists()) return EntryFactory.deserialize(snapshot.val());
            return null;
        } catch (error) { return null; }
    },

    async fetchAll() {
        try {
            const snapshot = await get(child(this.dbRef, 'entries'));
            if (snapshot.exists()) {
                const data = snapshot.val();
                return Object.values(data).map(item => EntryFactory.deserialize(item));
            }
            return [];
        } catch (error) { return []; }
    },

    async fetchByName(name) {
        try {
            const allEntries = await this.fetchAll();
            const found = allEntries.find(entry => entry.name?.toLowerCase() === name?.toLowerCase());
            return found || null;
        } catch (error) { return null; }
    },

    async register(entry) {
        try {
            const content = entry.serialize();
            await set(child(this.dbRef, `entries/${entry.key}`), content);
            return true;
        } catch (error) { return false; }
    },

    async deregister(keyOrEntry) {
        const key = typeof keyOrEntry === 'string' ? keyOrEntry : keyOrEntry.key;
        try {
            await remove(child(this.dbRef, `entries/${key}`));
            return true;
        } catch (error) { return false; }
    },

    async contains(key) {
        try {
            const snapshot = await get(child(this.dbRef, `entries/${key}`));
            return snapshot.exists();
        } catch (error) { return false; }
    },

    async clear() {
        try {
            await remove(child(this.dbRef, 'entries'));
            return true;
        } catch (error) { return false; }
    }

};

export default Archive;