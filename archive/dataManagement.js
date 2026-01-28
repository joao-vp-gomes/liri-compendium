import Archive from "./archive.js";
import { Weapon } from "./weapon.js";
// ... outros imports de classes locais

// Importação correta para Node.js (via npm)
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAnlFo7_oz9HScgAJgFuGiO1QbCnWpg8kw",
    authDomain: "liri-rpg.firebaseapp.com",
    projectId: "liri-rpg",
    storageBucket: "liri-rpg.firebasestorage.app",
    messagingSenderId: "597629566802",
    appId: "1:597629566802:web:e050379cfc189bc79c448b"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// No Node não existe 'window', então usamos 'global' ou apenas guardamos a ref
global.db = database;

async function runTest() {

    const entry = new Weapon();
    entry.name = 'opa';

    await Archive.register(entry);

    const entries = await Archive.fetchAll();

    if (entries && entries.length > 0) {
        entries.forEach(entry => {
            console.log(`- ${entry.serialize().name}`);
        });
    } else console.log("Nenhum registro encontrado no banco.");

}

await runTest();