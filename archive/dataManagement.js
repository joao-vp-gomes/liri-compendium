import Archive from "./archive.js";
import { Weapon } from "./weapon.js";

import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAnlFo7_oz9HScgAJgFuGiO1QbCnWpg8kw",
    authDomain: "liri-rpg.firebaseapp.com",
    projectId: "liri-rpg",
    storageBucket: "liri-rpg.firebasestorage.app",
    messagingSenderId: "597629566802",
    appId: "1:597629566802:web:e050379cfc189bc79c448b",
    databaseURL: "https://liri-rpg-default-rtdb.firebaseio.com"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

global.db = database;

async function runTest() {

    const entry = await Archive.fetch('ZHhruCG0goPd');
    await entry.validateInventory();
    await Archive.register(entry);

}

await runTest();