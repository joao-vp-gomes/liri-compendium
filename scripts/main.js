// main.js
// DATABASE ------------------------------------------------------------------------------------------------------------

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyAnlFo7_oz9HScgAJgFuGiO1QbCnWpg8kw",
    authDomain: "liri-rpg.firebaseapp.com",
    projectId: "liri-rpg",
    storageBucket: "liri-rpg.firebasestorage.app",
    messagingSenderId: "597629566802",
    appId: "1:597629566802:web:e050379cfc189bc79c448b"
};

const app = initializeApp(firebaseConfig);
window.db = getDatabase(app);


// DICTIONARY ----------------------------------------------------------------------------------------------------------

const dictionary = {
    'ability-1': 'Habilidade 1',
    'ability-2': 'Habilidade 2',
    'ability-3': 'Habilidade 3',
    'ability-4': 'Habilidade 4',
    'ability-5': 'Habilidade 5',
    'ability-6': 'Habilidade 6',
    'left-hand': 'Mão Esquerda',
    'right-hand': 'Mão Direita',
    'compendium': 'Compêndio',
    'confirm-delete': 'Tem certeza',
    'integrity': 'Integridade',
    'health': 'Vitalidade',
    'major-actions': 'Ações Maiores',
    'minor-actions': 'Ações Menores',
    'reactions': 'Reações',
    'movement': 'Movimento',
    'integrity-cost': 'Custo de Integridade',
    'save': 'Salvar',
    'delete': 'Deletar',
    'soul': 'Alma',
    'mind': 'Mente',
    'bag': 'Mochila',
    'modifiers': 'Modificadores',
    'new-modifier': 'Novo Modificador',
    'new-passive': 'Nova Passiva',
    'passives': 'Passivas',
    'range': 'Alcance',
    'paths': 'Caminhos',
    'body-attributes': 'Atributos do Corpo',
    'psyche-attributes': 'Atributos da Psique',
    'intellect-attributes': 'Atributos do Intelecto',
    'delete-entry': 'Deletar',
    'weapon': 'Arma',
    'tool': 'Ferramenta',
    'apparel': 'Vestimenta',
    'accessory': 'Acessório',
    'material': 'Material',
    'ability': 'Habilidade',
    'character': 'Personagem',
    'search': 'Pesquisar',
    'new-entry': 'Nova Entrada',
    'slashing-damage': 'Dano de Corte',
    'piercing-damage': 'Dano de Perfuração',
    'bludgeoning-damage': 'Dano de Impacto',
    'burning-damage': 'Dano de Fogo',
    'poisoning-damage': 'Dano de Veneno',
    'tainting-damage': 'Dano de Mácula',
    'withering-damage': 'Dano de Necrose',
    'max-durability': 'Durabilidade Máxima',
    'defense': 'Defesa',
    'class': 'Classe',
    'weight': 'Peso',
    'slashing-protection': 'Proteção contra Corte',
    'piercing-protection': 'Proteção contra Perfuração',
    'bludgeoning-protection': 'Proteção contra Impacto',
    'burning-protection': 'Proteção contra Fogo',
    'poisoning-protection': 'Proteção contra Veneno',
    'tainting-protection': 'Proteção contra Mácula',
    'withering-protection': 'Proteção contra Necrose',
    'cooldown': 'Tempo de Recarga',
    'health-cost': 'Custo de Vitalidade',
    'movement-cost': 'Custo de Movimento',
    'minor-actions-cost': 'Custo de Ação Menor',
    'major-actions-cost': 'Custo de Ação Maior',
    'reactions-cost': 'Custo de Reação',
    'bones': 'Tratamento de Ossos',
    'muscles': 'Tratamento de Sangue',
    'nerves': 'Tratamento de Nervos',
    'pyrotechnics': 'Preparo de Pirotecnia',
    'elixirs': 'Preparo de Poções',
    'oils': 'Preparo de Óleos',
    'smithing': 'Ofício de Ferraria',
    'traps': 'Ofício de Armadilhas',
    'crafting': 'Ofício de Artesanato',
    'comedy': 'Cântico Cômico',
    'tragedy': 'Cântico Trágico',
    'epic': 'Cântico Épico',
    'lyric': 'Cântico Lírico',
    'hammers-and-maces': 'Treinamento de Martelos e Maças',
    'axes': 'Treinamento de Machados',
    'fists': 'Treinamento de Punhos',
    'rods': 'Treinamento de Bastões',
    'swords': 'Treinamento de Espadas',
    'halberds': 'Treinamento de Alabardas',
    'spears': 'Treinamento de Lanças',
    'knifes-and-daggers': 'Treinamento de Facas e Adagas',
    'bows-and-crossbows': 'Treinamento de Arcos e Bestas',
    'max-health': 'Vitalidade Máxima',
    'max-movement': 'Movimento Máximo',
    'max-minor-actions': 'Ações Menores Máximas',
    'max-major-actions': 'Ações Maiores Máximas',
    'max-reactions': 'Reações Máximas',
    'constitution': 'Constituição',
    'breath': 'Fôlego',
    'agility': 'Agilidade',
    'strength': 'Força',
    'dexterity': 'Destreza',
    'shivers': 'Calafrios',
    'drama': 'Drama',
    'rhetoric': 'Retórica',
    'threat': 'Ameaça',
    'grace': 'Graça',
    'melody': 'Melodia',
    'empathy': 'Empatia',
    'erudition': 'Erudição',
    'clinic': 'Clínica',
    'pharmacy': 'Farmácia',
    'artifice': 'Artifício',
    'composure': 'Compostura',
    'insight': 'Compreensão',
    'body': 'Corpo',
    'psyche': 'Psique',
    'intellect': 'Intelecto',
    'damages': 'Danos',
    'protections': 'Proteções',
    'fields': 'Campos',
    'status': 'Status',
    'costs': 'Custos',
    'skills': 'Perícias',
    'other-fields': 'Outros Campos',
    'paths-and-attributes': 'Caminhos e Atributos',
    'gold-coins': 'Moedas de Ouro',
    'silver-coins': 'Moedas de Prata',
    'bronze-coins': 'Moedas de Bronze',
    'iron-coins': 'Moedas de Ferro',
    'coins': 'Moedas',
    'nofields': '-----(Sem Campos)-----'
};

function translate(source, mode) {
    if (typeof source !== 'string' || !source.length) return 'ERROR';

    let translation = dictionary[source.toLowerCase()] ?? source;

    switch (mode) {
        case 'uppercase': return translation.toUpperCase();
        case 'lowercase': return translation.toLowerCase();
        case 'capitalize': return translation.charAt(0).toUpperCase() + translation.slice(1).toLowerCase();
        case 'titlecase': return translation;
        default: return translation;
    }
}


// ENTRY ---------------------------------------------------------------------------------------------------------------

import Archive from '../archive/archive.js';
import {Weapon} from "../archive/weapon.js";
import {EntryFactory} from "../archive/entryFactory.js";
import {Codex} from "../archive/codex.js";

let PAGE_ENTRY = new Weapon();

function loadEntry(entry) {
    PAGE_ENTRY = EntryFactory.deserialize(entry.serialize());
    renderEntryContainers();
}

function turnPageEntryToType(type) {
    PAGE_ENTRY.type = type;
    PAGE_ENTRY = EntryFactory.deserialize(PAGE_ENTRY.serialize());

    renderStatuses();
    renderInventory();
    renderFields();
    renderImage();
    showSaveButton();
}

function saveEntry() {
    Archive.register(PAGE_ENTRY);
}

function deleteEntry() {
    const confirmation = confirm(`${translate('confirm-delete', 'uppercase')}?`);

    if (confirmation) {
        Archive.deregister(PAGE_ENTRY.key);
        createNewEntry();
    }
}

// SEARCH CONTAINER ----------------------------------------------------------------------------------------------------

const navigationBar = document.querySelector('nav');

function renderSearchContainer() {

    const searchContainer = document.createElement('div');
    searchContainer.id = 'search-container';
    searchContainer.innerHTML = `
        <div id="search-bar">
            <input type="text" id="search-input" autocomplete="off" spellcheck="false" placeholder="${translate('search', 'uppercase')}">
            <button id="search-button"><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
        <div id="search-suggestions"></div>
    `;

    navigationBar.appendChild(searchContainer);

    const searchInputElement = document.querySelector('#search-input');
    const searchButtonElement = document.querySelector('#search-button');

    searchInputElement.addEventListener('keyup', async event => {
        if (event.key === 'Enter') {
            const input = searchInputElement.value.trim();
            const entry = await Archive.fetchByName(input);
            if (entry){
                searchEntry(entry);
                searchInputElement.blur();
            }
        }
        else await renderSearchResults();
    });
    searchInputElement.addEventListener('focus', async () => {
        await renderSearchResults();
    });
    searchInputElement.addEventListener('blur', () => {
        deactivateSearchResults();
    });
    searchButtonElement.addEventListener('click', async () => {
        const input = searchInputElement.value.trim();
        const entry = await Archive.fetchByName(input);
        if (entry) searchEntry(entry);
    });

}
async function renderSearchResults() {

    const searchContainer = document.querySelector('#search-container');
    const searchInputElement = document.querySelector('#search-input');
    const searchSuggestionsElement = document.querySelector('#search-suggestions');

    if (!(searchInputElement && searchSuggestionsElement)) return;
    const input = searchInputElement.value.trim();

    const updateUI = (keywords) => {
        if (!searchContainer.classList.contains('showingResults') && keywords.length > 0) return;

        let filteredResults = [];
        if (input.length && keywords.length) {
            filteredResults = keywords.filter(keyword =>
                keyword.name?.toLowerCase().includes(input.toLowerCase())
            );
        }

        const content = filteredResults
            .map(item => `<li class="search-suggestion-button" data-key="${item.key}">${item.name}</li>`)
            .join('');

        searchSuggestionsElement.innerHTML = `
            <ul>
                <li class="new-entry-button">+ ${translate('new-entry', 'uppercase')}</li>
                ${content}
            </ul>
        `;
        searchContainer.classList.add('showingResults');

        document.querySelectorAll('.search-suggestion-button').forEach(button => {
            button.addEventListener('click', async () => {
                const searchedEntry = await Archive.fetch(button.dataset.key);
                searchEntry(searchedEntry);
            });
        });

        document.querySelector('.new-entry-button').addEventListener('click', () => {
            createNewEntry();
            clearSearchBar();
        });
    };

    updateUI([]);

    Archive.fetchAll().then(entries => {
        if (document.activeElement !== searchInputElement) return;
        const keywords = entries.map(entry => { return { name: entry.name, key: entry.key } });
        updateUI(keywords);
    });

}
function deactivateSearchResults() {
    const searchContainer = document.querySelector('#search-container');
    const searchSuggestionsElement = document.querySelector('#search-suggestions');

    setTimeout(() => {
        if (searchSuggestionsElement) searchSuggestionsElement.innerHTML = '';
        searchContainer.classList.remove('showingResults');
    }, 200);
}
function clearSearchBar() {
    const searchInputElement = document.querySelector('#search-input');
    if (searchInputElement) searchInputElement.value = '';
}

async function searchEntry(entry) {
    if (!entry) return;
    window.location.href = `${window.location.pathname}?key=${entry.key}`;
}

function createNewEntry() {
    window.location.href = window.location.pathname;
}


// ENTRY CONTAINERS-----------------------------------------------------------------------------------------------------

function renderEntryContainers() {
    renderKey();
    renderImage();
    renderName();
    renderSave();
    renderDelete();
    renderDescription();
    renderTags();
    renderModifiers();
    renderTypeSelector();
    renderStatuses();
    renderInventory();
    renderFields();
}

function renderKey() {
    const keyContainer = document.querySelector('#key-container');
    keyContainer.innerHTML = PAGE_ENTRY.key;
}

function renderImage() {
    const imageContainer = document.querySelector('#image-container');

    const imageURL = PAGE_ENTRY.imagePath ? PAGE_ENTRY.getFullImagePath() : '';

    imageContainer.innerHTML = `
    <div class="${PAGE_ENTRY.imagePath ? 'has-image' : ''}" 
         style="width: 100%; height: 100%; 
                display: flex; justify-content: center; align-items: center;
                background-image: ${PAGE_ENTRY.imagePath ? `url('${imageURL}')` : 'none'};
                background-size: cover; background-position: center;">
        
        <input type="file" id="image-input" style="display:none" accept="image/*">
        ${!PAGE_ENTRY.imagePath ? '<i class="fa-solid fa-camera" style="font-size: 40px; color: var(--color-idle);"></i>' : ''}
    </div>
    `;

    const imageInput = document.querySelector('#image-input');
    imageContainer.onclick = () => imageInput.click();
    imageInput.onchange = (e) => {
        if(e.target.files[0]) {
            PAGE_ENTRY.imagePath = e.target.files[0].name;
            showSaveButton();
            renderImage();
        }
    };

}

function renderName() {
    const nameContainer = document.querySelector('#name-container');
    nameContainer.innerHTML = `<input type="text" spellcheck="false">`;
    const nameInput = nameContainer.querySelector('input');
    nameInput.value = PAGE_ENTRY.name;
    nameInput.oninput = (e) => { PAGE_ENTRY.name = (e.target.value).toUpperCase(); showSaveButton(); };
}

function renderSave() {
    const saveContainer = document.querySelector('#save-container');
    saveContainer.innerHTML = `<button>${translate('save', 'uppercase')}</button>`
    saveContainer.onclick = () => { saveEntry(); hideSaveButton(); showDeleteButton(); }
}
function showSaveButton() {
    const saveContainer = document.querySelector('#save-container');
    if (saveContainer) saveContainer.style.display = 'block';
}
function hideSaveButton() {
    const saveContainer = document.querySelector('#save-container');
    if (saveContainer) saveContainer.style.display = 'none';
}

function renderDelete() {
    const deleteContainer = document.querySelector('#delete-container');
    deleteContainer.innerHTML = `<button>${translate('delete', 'uppercase')}</button>`
    deleteContainer.onclick = () => { deleteEntry(); }
}
function showDeleteButton() {
    const deleteContainer = document.querySelector('#delete-container');
    if (deleteContainer) deleteContainer.style.display = 'block';
}
function hideDeleteButton() {
    const deleteContainer = document.querySelector('#delete-container');
    if (deleteContainer) deleteContainer.style.display = 'none';
}

function renderDescription() {
    const descriptionContainer = document.querySelector('#description-container');
    descriptionContainer.innerHTML = `<textarea spellcheck="false"></textarea>`;
    const descriptionInput = descriptionContainer.querySelector('textarea');
    descriptionInput.value = PAGE_ENTRY.description;
    descriptionInput.oninput = (e) => { PAGE_ENTRY.description = (e.target.value).toUpperCase(); showSaveButton(); };
}

function renderTags() {
    const tagsListContainer = document.querySelector('#tags-list-container');
    tagsListContainer.innerHTML = '';
    PAGE_ENTRY.tags.forEach(tag => {
        const tagContainer = document.createElement('button');
        tagContainer.className = 'tag-container';
        tagContainer.textContent = tag;
        tagContainer.onclick = () => { PAGE_ENTRY.removeTag(tag); showSaveButton(); renderTags(); };
        tagsListContainer.appendChild(tagContainer);
    });

    const addTagButton = document.createElement('button');
    addTagButton.className = 'add-tag-container';
    addTagButton.textContent = '+';
    addTagButton.onclick = () => {
        const tagAddInput = document.createElement('input');
        tagAddInput.className = 'add-tag-container';
        addTagButton.replaceWith(tagAddInput);
        tagAddInput.focus();
        const finish = () => {
            if(tagAddInput.value.trim()) { PAGE_ENTRY.addTag(tagAddInput.value.trim().toUpperCase()); showSaveButton(); }
            renderTags();
        };
        tagAddInput.onblur = finish;
        tagAddInput.onkeydown = (e) => { if(e.key === 'Enter') finish(); };
    };
    tagsListContainer.appendChild(addTagButton);
}

function renderModifiers() {

    const modifiersListContainer = document.querySelector('#modifiers-list-container');
    modifiersListContainer.innerHTML = '';

    const sync = () => {
        const blocks = Array.from(modifiersListContainer.querySelectorAll('.modifier-container'));
        PAGE_ENTRY.modifiers = blocks.map((block, index) => {
            const nameInput = block.querySelector('.name-customization input');
            const descInput = block.querySelector('.description-customization textarea');
            const effectRows = Array.from(block.querySelectorAll('.effect-row'));

            const effects = effectRows.map(row => ({
                identifier: row.querySelector('.identifier-customization').value.toLowerCase(),
                value: parseInt(row.querySelector('.value-visualization').textContent) || 0
            }));
            const original = PAGE_ENTRY.modifiers[index] || { name: '', description: '', effects: [] };

            return {
                name: nameInput ? nameInput.value.toUpperCase() : original.name,
                description: descInput ? descInput.value.toUpperCase() : original.description,
                effects: nameInput ? effects : (original.effects || [])
            };
        });

        showSaveButton();
        renderFields();
        renderStatuses();
    };

    if (window.modifiersController) window.modifiersController.abort();
    window.modifiersController = new AbortController();
    const { signal } = window.modifiersController;

    PAGE_ENTRY.modifiers.forEach((modifier) => {

        const modifierContainer = document.createElement('div');
        modifierContainer.className = 'modifier-container';

        modifierContainer.innerHTML = `
            <div class="name-visualization">${modifier.name}</div>
            <div class="description-visualization">${modifier.description}</div>
        `;

        modifierContainer.addEventListener('click', (e) => {

            if (modifierContainer.querySelector('.name-customization')) return;
            e.stopPropagation();

            const currentEditing = document.querySelector('.name-customization');
            if (currentEditing) renderModifiers();

            modifierContainer.innerHTML = `
                <div style="display:flex; flex-direction: row; gap: 5px;">
                    <div class="name-customization"><input type="text" value="${modifier.name}"></div>
                    <button class="delete-button"><i class="fa-solid fa-trash-can"></i></button>
                </div>
                <div class="description-customization"><textarea>${modifier.description}</textarea></div>
                <div class="effects-customization-list"></div>
            `;

            modifierContainer.querySelector('.delete-button').onclick = async (e) => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                PAGE_ENTRY.removeModifier(modifier.name);
                showSaveButton();
                renderModifiers();
                renderFields();
                renderStatuses();
            };

            const effectsList = modifierContainer.querySelector('.effects-customization-list');

            const renderEffectRows = () => {
                effectsList.innerHTML = '';
                modifier.effects.forEach((eff, i) => {
                    const row = document.createElement('div');
                    row.className = 'effect-row';
                    row.innerHTML = `
                        <input type="text" class="identifier-customization" value="${eff.identifier}">
                        <button class="decrease-value-button"><</button>
                        <span class="value-visualization">${eff.value}</span>
                        <button class="increase-value-button">></button>
                        <button class="delete-button"><i class="fa-solid fa-trash-can"></i></button>
                    `;

                    row.querySelector('.identifier-customization').oninput = (e) => {
                        e.target.value = e.target.value.toLowerCase();
                        eff.identifier = e.target.value;
                        sync();
                    };

                    row.querySelector('.decrease-value-button').onclick = async (e) => {
                        e.stopPropagation();
                        eff.value--;
                        row.querySelector('.value-visualization').textContent = eff.value;
                        sync();
                    };

                    row.querySelector('.increase-value-button').onclick = async (e) => {
                        e.stopPropagation();
                        eff.value++;
                        row.querySelector('.value-visualization').textContent = eff.value;
                        sync();
                    };

                    row.querySelector('.delete-button').onclick = async (e) => {
                        e.stopPropagation();
                        modifier.effects.splice(i, 1);
                        renderEffectRows();
                        sync();
                    };

                    row.onclick = (e) => e.stopPropagation();
                    effectsList.appendChild(row);
                });

                const addEffectButton = document.createElement('div');
                addEffectButton.className = 'add-button';
                addEffectButton.textContent = '+';
                addEffectButton.onclick = (e) => {
                    e.stopPropagation();
                    modifier.effects.push({ identifier: '-', value: 0 });
                    renderEffectRows();
                    sync();
                };
                effectsList.appendChild(addEffectButton);
            };

            renderEffectRows();

            const nameInput = modifierContainer.querySelector('.name-customization input');
            const descInput = modifierContainer.querySelector('.description-customization textarea');

            descInput.style.height = 'auto';
            descInput.style.height = descInput.scrollHeight + 'px';

            [nameInput, descInput].forEach(el => {
                el.addEventListener('click', (e) => e.stopPropagation());
            });

            nameInput.oninput = (e) => {
                e.target.value = e.target.value.toUpperCase();
                sync();
            };
            descInput.oninput = () => {
                descInput.style.height = 'auto';
                descInput.style.height = descInput.scrollHeight + 'px';
                sync();
            };

        }, { signal });

        modifiersListContainer.appendChild(modifierContainer);
    });

    const addModifierContainer = document.createElement('div');
    addModifierContainer.id = 'add-modifier-button';
    addModifierContainer.innerHTML = '+';
    addModifierContainer.onclick = () => {
        PAGE_ENTRY.addModifier({ name: '-', description: '-', effects: [] });
        renderModifiers();
        showSaveButton();
    };
    modifiersListContainer.appendChild(addModifierContainer);

    window.addEventListener('click', (e) => {
        const isEditing = document.querySelector('.name-customization');
        if (isEditing && !e.target.closest('.modifier-container')) {
            renderModifiers();
        }
    }, { signal });

}

function renderTypeSelector() {

    const typeSelector = document.querySelector('#type-selector');

    let text = '';
    Object.keys(Codex.ENTRY_TYPES).forEach(entry => text +=`<div class="option" data-type="${entry}">${translate(entry, 'uppercase')}</div>`);

    typeSelector.innerHTML = `
    <button id="type-dropdown-button">
        <span id="selected-type">${translate(PAGE_ENTRY.type, 'uppercase')}</span>
        
    </button>
    <div id="type-options" class="hidden">
        ${text}
    </div>
    `

    const typeDropdownButton = document.querySelector('#type-dropdown-button');
    const typeOptionsMenu = document.querySelector('#type-options');
    const selectedType = document.querySelector('#selected-type');
    const typeOptions = document.querySelectorAll('.option');

    typeDropdownButton.addEventListener('click', () => {
        typeOptionsMenu.classList.toggle('hidden');
    });

    typeOptions.forEach(option => {
        option.addEventListener('click', () => {

            selectedType.innerText = option.innerText;
            turnPageEntryToType(option.dataset.type);
            showSaveButton();

            typeOptionsMenu.classList.add('hidden');
        });
    });

    window.addEventListener('click', (e) => {
        if (!typeDropdownButton.contains(e.target)) {
            typeOptionsMenu.classList.add('hidden');
            typeDropdownButton.classList.remove('open');
        } else typeDropdownButton.classList.add('open');
    });

}

function renderFields() {
    const fieldsListContainer = document.querySelector('#fields-list-container');
    fieldsListContainer.innerHTML = '';

    if (PAGE_ENTRY.type === 'character') {
        for (const pathSchema of Codex.PATHS.fields) {
            const pathName = pathSchema.name;
            const pathGroup = document.createElement('div');
            pathGroup.className = 'field-group';
            pathGroup.dataset.group = pathName;

            pathGroup.appendChild(fieldContainer(pathName, Codex.PATHS.group, pathSchema.image));

            const attrGroupSchema = Codex.ATTRIBUTES.find(g => g.group === pathName);
            if (attrGroupSchema) {
                for (const attrSchema of attrGroupSchema.fields) {
                    pathGroup.appendChild(fieldContainer(attrSchema.name, attrGroupSchema.group, attrSchema.image));
                }
            }
            fieldsListContainer.appendChild(pathGroup);
        }

        const skillsGroup = document.createElement('div');
        skillsGroup.className = 'field-group';
        skillsGroup.dataset.group = Codex.SKILLS.group;

        for (const skillSchema of Codex.SKILLS.fields) {
            skillsGroup.appendChild(fieldContainer(skillSchema.name, Codex.SKILLS.group, skillSchema.image));
        }
        if (skillsGroup.children.length > 0) fieldsListContainer.appendChild(skillsGroup);
        return;
    }

    const groups = Codex.ENTRY_TYPES[PAGE_ENTRY.type] || [];
    for (const groupObj of groups) {
        const groupElement = document.createElement('div');
        groupElement.className = 'field-group';
        groupElement.dataset.group = groupObj.group;

        const fields = groupObj.fields || [];
        for (const fieldSchema of fields) {
            const condition = fieldSchema.condition;
            if (condition === 'required' || condition === 'optional') {
                const fieldNode = fieldContainer(fieldSchema.name, groupObj.group, fieldSchema.image);
                groupElement.appendChild(fieldNode);
            }
        }
        if (groupElement.children.length > 0) fieldsListContainer.appendChild(groupElement);
    }
}

function fieldContainer(field, group, imagePath) {
    const container = document.createElement('div');
    container.className = 'field-container';
    container.dataset.field = field;

    const getDigits = (val) => {
        const n = Number(val) || 0;
        const isNegative = n < 0;
        const absStr = Math.abs(n).toString();
        let s = isNegative ? '-' + absStr.padStart(1, '0') : absStr.padStart(2, '0');
        return s.split('').map(d => `<div class="digit">${d}</div>`).join('');
    };

    const getExtraValues = () => {
        const groupValue = Number(PAGE_ENTRY[group]) || 0;
        let fieldMod = 0;
        let groupMod = 0;

        if (typeof PAGE_ENTRY.gatherModifier === 'function') {
            fieldMod = Number(PAGE_ENTRY.gatherModifier(field)) || 0;
            groupMod = Number(PAGE_ENTRY.gatherModifier(group)) || 0;
        }

        const totalExtra = groupValue + fieldMod + groupMod;
        if (totalExtra === 0) return '';
        return `<div class="extra-value">(${totalExtra > 0 ? '+' : ''}${totalExtra})</div>`;
    };

    const renderVisualization = () => {
        const baseValue = Number(PAGE_ENTRY[field]) || 0;
        const groupValue = Number(PAGE_ENTRY[group]) || 0;
        let fieldMod = 0;
        let groupMod = 0;

        if (typeof PAGE_ENTRY.gatherModifier === 'function') {
            fieldMod = Number(PAGE_ENTRY.gatherModifier(field)) || 0;
            groupMod = Number(PAGE_ENTRY.gatherModifier(group)) || 0;
        }

        const totalValue = baseValue + fieldMod + groupValue + groupMod;
        container.innerHTML = `
            <img src="../assets/${imagePath}.png" alt="${field}">
            <div class="name">${translate(field, 'uppercase')}</div>
            <div class="value-visualization">
                <div class="value">${getDigits(totalValue)}</div>
            </div>
        `;
    };

    const renderCustomization = () => {
        const currentVal = Number(PAGE_ENTRY[field]) || 0;
        const extraHTML = getExtraValues();

        container.innerHTML = `
            <img src="../assets/${imagePath}.png" alt="${field}">
            <div class="name">${translate(field, 'uppercase')}</div>
            <div class="value-customization">
                <button class="adjust-button" data-action="minus"><</button>
                <div class="extra-value">${extraHTML}</div>
                <div class="value">${getDigits(currentVal)}</div>
                <button class="adjust-button" data-action="plus">></button>
            </div>
        `;

        container.querySelectorAll('.adjust-button').forEach(button => {
            button.onclick = (e) => {
                e.stopPropagation();
                let val = Number(PAGE_ENTRY[field]) || 0;
                if (button.dataset.action === 'plus') val++;
                else val--;
                PAGE_ENTRY[field] = val;
                showSaveButton();
                renderCustomization();
                window.dispatchEvent(new CustomEvent('fieldUpdated', { detail: { origin: field } }));
            };
        });
    };

    renderVisualization();

    window.addEventListener('fieldUpdated', (e) => {
        if (e.detail.origin !== field && container.querySelector('.value-visualization')) {
            renderVisualization();
        }
    });

    container.onmouseenter = () => { if (container.querySelector('.value-visualization')) renderCustomization(); };
    container.onmouseleave = () => { if (container.querySelector('.value-customization')) renderVisualization(); };

    return container;
}

function renderStatuses() {
    const container = document.querySelector('#statuses-list-container');
    if (!container) return;
    container.innerHTML = '';

    if (PAGE_ENTRY.type === 'character' && typeof PAGE_ENTRY.getCurrentStatus === 'function') {
        for (const status of Codex.STATUS_LIST) {
            container.appendChild(statusContainer(status.name));
        }
    }
}

function statusContainer(statusName) {
    const container = document.createElement('div');
    container.className = 'status-container';
    const schema = Codex.STATUS_LIST.find(s => s.name === statusName);

    const render = (isCustomizing = false) => {
        const maxVal = PAGE_ENTRY.getMaxStatus(statusName);
        let currentVal = PAGE_ENTRY.getCurrentStatus(statusName);
        if (currentVal>maxVal) currentVal = maxVal;

        container.innerHTML = `
            <img src="../assets/${schema.image}.png" alt="${statusName}">
            <div class="name">${translate(statusName, 'uppercase')}</div>
            <div class="status-controls" style="display: flex; flex-direction: row; justify-content: center; gap: 10px; align-items: center;">
                ${isCustomizing ? `<button class="adjust-button" data-action="minus"><</button>` : ''}
                <div class="value">${currentVal}/${maxVal}</div>
                ${isCustomizing ? `<button class="adjust-button" data-action="plus">></button>` : ''}
            </div>
            ${isCustomizing ? `<button class="reset-button"><i class="fa-solid fa-rotate-left"></i></button>` : ''}
        `;

        if (isCustomizing) {
            container.querySelectorAll('.adjust-button').forEach(button => {
                button.onclick = async (e) => {
                    e.stopPropagation();
                    const now = PAGE_ENTRY.getCurrentStatus(statusName);
                    const step = button.dataset.action === 'plus' ? 1 : -1;
                    await PAGE_ENTRY.setCurrentStatus(statusName, now + step);
                    showSaveButton();
                    render(true);
                };
            });
            const resetButton = container.querySelector('.reset-button');
            if (resetButton) {
                resetButton.onclick = async (e) => {
                    e.stopPropagation();
                    await PAGE_ENTRY.setCurrentStatus(statusName, maxVal);
                    showSaveButton();
                    render(true);
                };
            }
        }
    };

    container.onmouseenter = () => render(true);
    container.onmouseleave = () => render(false);
    window.addEventListener('fieldUpdated', () => { if (!container.querySelector('.adjust-button')) render(false); });
    render(false);
    return container;
}

function renderInventory() {
    const container = document.querySelector('#inventory-container');
    if (!container) return;
    container.innerHTML = '';
    if (PAGE_ENTRY.type !== 'character') return;

    container.innerHTML = `
        <div id="equipment-container"></div>
        <div id="bag-container">
            <div id="bag-list"></div>
            <div class="popover-wrapper" style="position: relative; display: inline-block;">
                <button id="add-item-trigger" class="add-button">+</button>
                <div id="inventory-search-panel" class="popover-panel hidden-panel"></div>
            </div>
        </div>
        <div id="coins-list-container"></div>
    `;

    renderEquipment();
    renderBag();
    renderCoins();

    const validTypes = Object.keys(Codex.ENTRY_TYPES).filter(t => t !== 'character');
    initializeFloatingSearch('#add-item-trigger', '#inventory-search-panel', validTypes, (dbEntry) => {
        PAGE_ENTRY.pick({ reference: dbEntry, amount: 1 });
        showSaveButton();
        renderBag();
    }, { searchInArchive: true });
}

function renderCoins() {
    const container = document.querySelector('#coins-list-container');
    if (!container) return;
    container.innerHTML = '';
    for (const field of Codex.COINS.fields) {
        container.appendChild(coinContainer(field.name));
    }
}

function coinContainer(coinName) {
    const container = document.createElement('div');
    container.className = 'coin-container';
    const schema = Codex.COINS.fields.find(f => f.name === coinName);

    const render = (isCustomizing = false) => {
        let currentVal = PAGE_ENTRY[coinName] || 0;
        container.innerHTML = `
            <img src="../assets/${schema.image}.png" alt="${coinName}">
            <div class="coin-controls">
                ${isCustomizing ? `<button class="adjust-button" data-action="minus"><</button>` : ''}
                <div class="value">${currentVal}</div>
                ${isCustomizing ? `<button class="adjust-button" data-action="plus">></button>` : ''}
            </div>
            ${isCustomizing ? `<button class="empty-button"><i class="fa-solid fa-trash-can"></i></button>` : ''}
        `;

        if (isCustomizing) {
            container.querySelectorAll('.adjust-button').forEach(button => {
                button.onclick = (e) => {
                    e.stopPropagation();
                    const step = button.dataset.action === 'plus' ? 1 : -1;
                    PAGE_ENTRY[coinName] = Math.max(0, currentVal + step);
                    showSaveButton();
                    render(true);
                };
            });
            const emptyButton = container.querySelector('.empty-button');
            if (emptyButton) {
                emptyButton.onclick = (e) => {
                    e.stopPropagation();
                    PAGE_ENTRY[coinName] = 0;
                    showSaveButton();
                    render(true);
                };
            }
        }
    };

    container.onmouseenter = () => render(true);
    container.onmouseleave = () => render(false);
    render(false);
    return container;
}

function renderBag() {
    const listContainer = document.querySelector('#bag-list');
    if (!listContainer || !PAGE_ENTRY.bag) return;
    listContainer.innerHTML = '';

    for (const itemSlot of PAGE_ENTRY.bag) {
        const reference = itemSlot.reference;
        if (!reference) continue;

        const itemRow = document.createElement('div');
        itemRow.className = 'bag-item-row';
        itemRow.style.display = 'grid';
        itemRow.style.gridTemplateColumns = '1fr 100px 80px 120px';
        itemRow.style.alignItems = 'center';
        itemRow.style.gap = '15px';
        itemRow.style.padding = '5px 0';

        const renderRowContent = (isHovering = false) => {
            const isStackable = Codex.STACKABLE_ITEMS.includes(reference.type);
            const maxDur = reference['max-durability'];
            const hasDurability = itemSlot.durability !== undefined && maxDur !== undefined;

            itemRow.innerHTML = `
                <div class="item-name" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; cursor: pointer;">${reference.name}</div>
                <div class="item-type" style="opacity: 0.5; font-size: 0.85em; text-align: center;">${translate(reference.type, 'uppercase')}</div>
                <div class="item-quantity-controls" style="display: flex; justify-content: center; align-items: center; gap: 5px;">
                    ${isHovering ? `<button class="quantity-button" data-action="minus" >${(!isStackable || itemSlot.amount <= 1) ? '<i class="fa-solid fa-trash"></i>' : '<'}</button>` : ''}
                    <span class="qty-value">${itemSlot.amount ?? 1}</span>
                    ${isHovering && isStackable ? `<button class="quantity-button" data-action="plus">></button>` : ''}
                </div>
                <div class="item-durability-controls" style="display: flex; justify-content: center; align-items: center; gap: 5px;">
                    ${hasDurability ? `
                        ${isHovering ? `<button class="durability-button" data-action="minus"><</button>` : ''}
                        <span class="dur-value">${itemSlot.durability}/${maxDur}</span>
                        ${isHovering ? `<button class="durability-button" data-action="plus">></button>` : ''}
                    ` : '<div style="flex:1"></div>'}
                </div>
            `;

            itemRow.querySelector('.item-name').onclick = async (e) => {
                e.stopPropagation();
                const entry = await Archive.fetch(reference.key);
                searchEntry(entry);
            };

            const nameEl = itemRow.querySelector('.item-name');

            nameEl.onmouseenter = (e) => showPreview(e, reference.key);
            nameEl.onmousemove = (e) => movePreview(e);
            nameEl.onmouseleave = () => hidePreview();

            nameEl.onclick = async (e) => {
                e.stopPropagation();
                hidePreview(); // Fecha a preview ao clicar para navegar
                const entry = await Archive.fetch(reference.key);
                searchEntry(entry);
            };

            if (isHovering) {
                itemRow.querySelectorAll('.quantity-button').forEach(btn => {
                    btn.onclick = (e) => {
                        e.stopPropagation();
                        if (btn.dataset.action === 'plus') itemSlot.amount = (itemSlot.amount || 1) + 1;
                        else {
                            if (!isStackable || (itemSlot.amount || 1) <= 1) {
                                PAGE_ENTRY.drop(itemSlot, 1);
                                renderBag();
                                showSaveButton();
                                return;
                            }
                            itemSlot.amount--;
                        }
                        showSaveButton();
                        renderRowContent(true);
                    };
                });
                if (hasDurability) {
                    itemRow.querySelectorAll('.durability-button').forEach(btn => {
                        btn.onclick = (e) => {
                            e.stopPropagation();
                            if (btn.dataset.action === 'plus') PAGE_ENTRY.repairItem(itemSlot, 1);
                            else PAGE_ENTRY.outwearItem(itemSlot, 1);
                            showSaveButton();
                            renderRowContent(true);
                            renderStatuses();
                        };
                    });
                }
            }
        };

        itemRow.onmouseenter = () => renderRowContent(true);
        itemRow.onmouseleave = () => renderRowContent(false);
        renderRowContent(false);
        listContainer.appendChild(itemRow);
    }
}

function renderEquipment() {
    const container = document.querySelector('#equipment-container');
    if (!container || PAGE_ENTRY.type !== 'character') return;
    container.innerHTML = '';

    const equipmentSlots = Object.values(Codex.CHARACTER_EQUIPMENT).reduce((acc, category) => {
        Object.keys(category).forEach(key => {
            acc[key] = category[key];
        });
        return acc;
    }, {});

    for (const [slotName, validTypes] of Object.entries(equipmentSlots)) {
        const slotRow = document.createElement('div');
        slotRow.className = 'equipment-slot-row';

        const equippedItem = PAGE_ENTRY.getEquipmentSlot(slotName);

        let iconName = slotName.replace(/[0-9]/g, '').replace(/-$/, '');
        if (slotName.startsWith('ability')) iconName = 'ability';
        const iconPath = `../assets/active-${iconName}.png`;

        const renderSlotContent = (isHovering = false) => {
            const hasDurability = equippedItem && equippedItem.durability !== undefined;

            slotRow.innerHTML = `
                <img src="${iconPath}" class="slot-icon">
                <div class="slot-label">${translate(slotName, 'uppercase')}</div>
                <div class="equipped-item-name" style="cursor: pointer;">
                    ${equippedItem ? equippedItem.reference.name : '<span class="slot-empty">...</span>'}
                </div>
                <div class="durability-area">
                    ${(isHovering && hasDurability) ? `
                        <div class="durability-adjuster">
                            <button class="dur-btn" data-action="minus"><</button>
                            <span class="dur-value">${equippedItem.durability}/${equippedItem.reference['max-durability']}</span>
                            <button class="dur-btn" data-action="plus">></button>
                        </div>
                    ` : (hasDurability ? `<span class="dur-value-static">${equippedItem.durability}</span>` : '')}
                </div>
                <div class="slot-actions">
                    ${equippedItem ? `<button class="remove-equip"><i class="fa-solid fa-trash-can"></i></button>` : ''}
                </div>
            `;

            slotRow.querySelector('.equipped-item-name').onclick = async (e) => {
                e.stopPropagation();
                if (equippedItem) {
                    const entry = await Archive.fetch(equippedItem.reference.key);
                    searchEntry(entry);
                }
            };

            const nameEl = slotRow.querySelector('.equipped-item-name');

            if (equippedItem) {
                nameEl.onmouseenter = (e) => showPreview(e, equippedItem.reference.key);
                nameEl.onmousemove = (e) => movePreview(e);
                nameEl.onmouseleave = () => hidePreview();
            }

            nameEl.onclick = async (e) => {
                e.stopPropagation();
                if (equippedItem) {
                    hidePreview();
                    const entry = await Archive.fetch(equippedItem.reference.key);
                    searchEntry(entry);
                }
            };

            slotRow.onclick = async (e) => {
                e.stopPropagation();
                const triggerId = `trigger-${slotName}`;
                const panelId = `panel-${slotName}`;

                let popoverWrapper = slotRow.querySelector('.popover-wrapper');
                if (!popoverWrapper) {
                    popoverWrapper = document.createElement('div');
                    popoverWrapper.className = 'popover-wrapper';
                    popoverWrapper.innerHTML = `
                        <button id="${triggerId}" style="display:none;"></button>
                        <div id="${panelId}" class="popover-panel hidden-panel"></div>
                    `;
                    slotRow.appendChild(popoverWrapper);

                    await initializeFloatingSearch(`#${triggerId}`, `#${panelId}`, validTypes, (bagItem) => {
                        PAGE_ENTRY.setEquipmentSlot(slotName, bagItem);
                        updateAll();
                    }, { searchInArchive: false });
                }

                document.getElementById(triggerId).click();
            };

            if (isHovering && hasDurability) {
                slotRow.querySelectorAll('.dur-btn').forEach(btn => {
                    btn.onclick = (e) => {
                        e.stopPropagation();
                        if (btn.dataset.action === 'plus') PAGE_ENTRY.repairItem(equippedItem, 1);
                        else PAGE_ENTRY.outwearItem(equippedItem, 1);
                        updateAll();
                    };
                });
            }

            const removeBtn = slotRow.querySelector('.remove-equip');
            if (removeBtn) {
                removeBtn.onclick = (e) => {
                    e.stopPropagation();
                    PAGE_ENTRY.clearEquipmentSlot(slotName);
                    updateAll();
                };
            }
        };

        const updateAll = () => {
            showSaveButton();
            renderStatuses();
            renderFields();
            renderEquipment();
            renderBag();
        };

        slotRow.onmouseenter = () => renderSlotContent(true);
        slotRow.onmouseleave = () => renderSlotContent(false);

        renderSlotContent(false);
        container.appendChild(slotRow);
    }
}

async function initializeFloatingSearch(triggerSelector, panelSelector, validTypes, action, options = {}) {
    const trigger = document.querySelector(triggerSelector);
    const panel = document.querySelector(panelSelector);

    if (!trigger || !panel) return;

    const {
        searchInArchive = false,
        placeholder = translate('search', 'uppercase')
    } = options;

    if (!panel.dataset.listenerInitialized) {
        window.addEventListener('click', (e) => {
            if (!panel.contains(e.target) && e.target !== trigger) {
                panel.classList.add('hidden-panel');
            }
        });
        panel.dataset.listenerInitialized = "true";
    }

    const renderPanelContent = async () => {
        if (searchInArchive) {
            panel.innerHTML = `
                <div class="floating-search-box">
                    <input type="text" class="floating-input" spellcheck="false" placeholder="${placeholder}...">
                    <ul class="floating-results-list"></ul>
                </div>
            `;

            const input = panel.querySelector('.floating-input');
            const list = panel.querySelector('.floating-results-list');

            const updateList = async () => {
                const term = input.value.toLowerCase();
                const all = await Archive.fetchAll();
                const filtered = all.filter(entry =>
                    validTypes.includes(entry.type) &&
                    entry.name.toLowerCase().includes(term)
                );

                list.innerHTML = filtered.map(item => `
                    <li class="floating-result-item" data-key="${item.key}">
                        <span class="result-name">${item.name}</span>
                        <span class="result-type">${translate(item.type, 'lowercase')}</span>
                    </li>
                `).join('');

                list.querySelectorAll('.floating-result-item').forEach(li => {
                    li.onclick = async (e) => {
                        e.stopPropagation();
                        const selected = await Archive.fetch(li.dataset.key);
                        action(selected.serialize());
                        panel.classList.add('hidden-panel');
                    };
                });
            };

            input.oninput = updateList;
            input.focus();
            await updateList();

        } else {
            const filteredBag = PAGE_ENTRY.bag.filter(item =>
                validTypes.includes(item.reference.type)
            );

            panel.innerHTML = `
                <div class="floating-search-box">
                    <ul class="floating-results-list">
                        ${filteredBag.map((item, index) => `
                            <li class="floating-result-item" data-index="${index}" style="cursor:pointer; padding: 5px;">
                                <span class="result-name">${item.reference.name}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            `;

            panel.querySelectorAll('.floating-result-item').forEach(li => {
                li.onclick = (e) => {
                    e.stopPropagation();
                    const item = filteredBag[parseInt(li.dataset.index)];
                    action(item);
                    panel.classList.add('hidden-panel');
                };
            });
        }
    };

    trigger.onclick = (e) => {
        e.stopPropagation();
        panel.classList.toggle('hidden-panel');
        if (!panel.classList.contains('hidden-panel')) {
            renderPanelContent();
        }
    };
}

// MAIN ----------------------------------------------------------------------------------------------------------------

async function validateCharacterInventory(character) {
    if (character.type !== 'character') return;

    const bagPromises = character.bag.map(async (item) => {
        const archiveData = await Archive.fetch(item.reference.key);
        return { item, archiveData };
    });

    const bagResults = await Promise.all(bagPromises);
    for (const { item, archiveData } of bagResults) {
        if (!archiveData) character.drop(item, -1);
        else item.reference = archiveData.serialize();
    }
    const slots = Object.keys(Codex.CHARACTER_EQUIPMENT).reduce((acc, cat) => {
        return [...acc, ...Object.keys(Codex.CHARACTER_EQUIPMENT[cat])];
    }, []);

    const equipmentPromises = slots.map(async (slotName) => {
        const item = character.getEquipmentSlot(slotName);
        if (!item) return { slotName, item: null, archiveData: null };
        const archiveData = await Archive.fetch(item.reference.key);
        return { slotName, item, archiveData };
    });
    const equipmentResults = await Promise.all(equipmentPromises);
    for (const { slotName, item, archiveData } of equipmentResults) {
        if (!item) continue;
        if (!archiveData) character.clearEquipmentSlot(slotName);
        else item.reference = archiveData.serialize();
    }
}

async function showPreview(e, key) {
    isHoveringPreview = true;
    const entry = await Archive.fetch(key);
    if (!entry || !isHoveringPreview) return;

    let fieldsHTML = '';
    const groups = Codex.ENTRY_TYPES[entry.type] || [];

    for (const groupObj of groups) {
        const fields = groupObj.fields || [];
        for (const fieldSchema of fields) {
            const fieldName = fieldSchema.name;
            const groupName = groupObj.group;
            const condition = fieldSchema.condition;

            if (condition === 'never') continue;

            const baseValue = Number(entry[fieldName]) || 0;
            const groupValue = Number(entry[groupName]) || 0;
            let fieldMod = 0;
            let groupMod = 0;

            if (typeof entry.gatherModifier === 'function') {
                fieldMod = Number(entry.gatherModifier(fieldName)) || 0;
                groupMod = Number(entry.gatherModifier(groupName)) || 0;
            }

            const totalValue = baseValue + fieldMod + groupValue + groupMod;
            const isInfinity = totalValue === -1;

            const shouldShow = condition === 'required' || (condition === 'optional' && (totalValue !== 0 || isInfinity));

            if (shouldShow) {
                const displayValue = isInfinity ? '∞' : totalValue;

                fieldsHTML += `
                    <div style="display: flex; align-items: center; gap: 8px; margin-top: 4px;">
                        <img src="../assets/${fieldSchema.image}.png" style="width: 16px; height: 16px; filter: brightness(0.8); margin: 0;">
                        <span style="font-size: 0.75em; flex: 1; display: flex; align-items: center;">${translate(fieldName, 'uppercase')}</span>
                        <span style="font-size: 0.9em; font-weight: bold; display: flex; align-items: center;">
                            ${displayValue}
                        </span>
                    </div>
                `;
            }
        }
    }

    previewPopover.innerHTML = `
        <div class="preview-name">
            <img src="../images/${entry.type}.png" style="width: 24px; height: 24px; margin: 0;">
            <span style="display: flex; align-items: center;">${entry.name.toUpperCase()}</span>
        </div>
        <div style="font-size: 0.8em; opacity: 0.8; line-height: 1.4; margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid var(--color-hover); white-space: pre-line;">
            ${entry.description || ''}
        </div>
        <div class="preview-fields">
            ${fieldsHTML}
        </div>
    `;

    previewPopover.style.display = 'block';
    movePreview(e);
}

function movePreview(e) {
    previewPopover.style.left = (e.clientX + 20) + 'px';
    previewPopover.style.top = (e.clientY + 20) + 'px';
}

function hidePreview() {
    isHoveringPreview = false;
    previewPopover.style.display = 'none';
}

let isHoveringPreview = false;
const previewPopover = document.createElement('div');
previewPopover.id = 'preview-popover';
document.body.appendChild(previewPopover);

document.title = 'Liri: ' + translate('compendium', 'titlecase');
renderSearchContainer();

const urlParams = new URLSearchParams(window.location.search);
const entryKey = urlParams.get('key');

if (entryKey) {
    const entry = await Archive.fetch(entryKey);
    if (entry) {
        if (entry.type === 'character') await validateCharacterInventory(entry);
        loadEntry(entry);
        hideSaveButton();
        showDeleteButton();
    }
}

renderEntryContainers();


