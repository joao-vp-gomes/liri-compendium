// codex.js
export class Codex {

    static PHYSICS_LIST = ['slashing', 'piercing', 'bludgeoning'];
    static ELEMENTS_LIST = ['burning', 'poisoning', 'tainting', 'withering'];
    static SKILLS_LIST = [
        'bones', 'muscles', 'nerves',
        'pyrotechnics', 'elixirs', 'oils',
        'smithing', 'traps', 'crafting',
        'comedy', 'tragedy', 'epic', 'lyric',
        'hammers-and-maces', 'axes', 'fists',
        'rods', 'swords', 'halberds',
        'spears', 'knifes-and-daggers', 'bows-and-crossbows'
    ]
    static PATHS_AND_ATTRIBUTES_LIST = {
        'body': ['constitution', 'breath', 'agility', 'strength', 'dexterity', 'shivers'],
        'soul': ['drama', 'rhetoric', 'threat', 'grace', 'melody', 'empathy'],
        'mind': ['erudition', 'clinic', 'pharmacy', 'artifice', 'composure', 'insight']
    };
    static COINS_LIST = ['gold-coins', 'silver-coins', 'bronze-coins', 'iron-coins'];
    static STATUS_LIST = [
        { name: 'integrity', attributes: [], a: 0, b: 3, image: 'integrity'},
        { name: 'health', attributes: ['constitution', 'body'], a: 4, b: 12, image: 'health'},
        { name: 'major-actions', attributes: ['breath', 'body'], a: 1/3, b: 1, image: 'major-actions' },
        { name: 'minor-actions', attributes: ['breath', 'body'], a: 1/2, b: 1, image: 'minor-actions' },
        { name: 'reactions', attributes: ['shivers', 'body'], a: 1/2, b: 1, image: 'reactions' },
        { name: 'movement', attributes: ['breath', 'body'], a: 1, b: 2, image: 'movement' },
    ]
    static CHARACTER_EQUIPMENT = {
        'software': {
            'ability-1': ['ability'],
            'ability-2': ['ability'],
            'ability-3': ['ability'],
            'ability-4': ['ability'],
            'ability-5': ['ability'],
            'ability-6': ['ability'],
        },
        'hardware': {
            'left-hand': ['weapon', 'tool'],
            'right-hand': ['weapon', 'tool'],
            'apparel': ['apparel'],
            'accessory': ['accessory']
        }
    };
    static STACKABLE_ITEMS = ['material'];














    static DAMAGES = {
        group: 'damages',
        fields: [...(this.PHYSICS_LIST.map(item => {
            return {
                name: item+'-damage',
                type: 'number',
                condition: 'required',
                image: item+'-damage'
            }
        })),
            ...(this.ELEMENTS_LIST.map(item => {
                return {
                    name: item+'-damage',
                    type: 'number',
                    condition: 'optional',
                    image: item+'-damage'
                }
            }))
        ]
    };
    static PROTECTIONS = {
        group: 'protections',
        fields: [...(this.PHYSICS_LIST.map(item => {
            return {
                name: item+'-protection',
                type: 'number',
                condition: 'required',
                image: item+'-protection'
            }
        })),
            ...(this.ELEMENTS_LIST.map(item => {
                return {
                    name: item+'-protection',
                    type: 'number',
                    condition: 'optional',
                    image: item+'-protection'
                }
            }))
        ]
    };
    static SKILLS = {
        group: 'skills',
        fields: this.SKILLS_LIST.map(item => {
            return {
                name: item,
                type: 'number',
                condition: 'optional',
                image: 'scroll'
            }
        })
    };
    static PATHS = {
        group: 'paths',
        fields: Object.keys(this.PATHS_AND_ATTRIBUTES_LIST).map(path => {
            return {
                name: path,
                type: 'number',
                condition: 'required',
                image: path
            }
        })
    };
    static ATTRIBUTES = Object.keys(this.PATHS_AND_ATTRIBUTES_LIST).map(path => {
        return {
            group: path,
            fields: this.PATHS_AND_ATTRIBUTES_LIST[path].map(attribute => ({
                name: attribute,
                type: 'number',
                condition: 'required',
                image: attribute
            }))
        };
    });
    static COINS = {
        group: 'coins',
        fields: this.COINS_LIST.map(item => {
            return {
                name: item,
                type: 'number',
                condition: 'required',
                image: item
            }
        })
    }

    static ABILITY_COSTS = {
        group: 'costs',
        fields: this.STATUS_LIST.map(item => {
            return {
                name: item.name+'-cost',
                type: 'number',
                condition: 'optional',
                image: item.name
            }
        })
    }
    static MAX_DURABILITY = {
        name: 'max-durability',
        type: 'number',
        condition: 'required',
        image: 'durability'
    }
    static DEFENSE = {
        name: 'defense',
        type: 'number',
        condition: 'optional',
        image: 'defense'
    }
    static CLASS = {
        name: 'class',
        type: 'number',
        condition: 'required',
        image: 'class'
    }
    static WEIGHT = {
        name: 'weight',
        type: 'number',
        condition: 'required',
        image: 'weight'
    }
    static COOLDOWN = {
        name: 'cooldown',
        type: 'number',
        condition: 'optional',
        image: 'cooldown'
    }
    static RANGE = {
        name: 'range',
        type: 'number',
        condition: 'optional',
        image: 'range'
    }

    static ENTRY_TYPES = {
        'weapon': [
            this.DAMAGES,
            {
                group: 'other-fields',
                fields: [
                    this.DEFENSE,
                    this.MAX_DURABILITY
                ]
            }
        ],
        'tool': [
            {
                group: 'fields',
                fields: [
                    this.CLASS,
                    this.MAX_DURABILITY
                ]
            }
        ],
        'apparel': [
            this.PROTECTIONS,
            {
                group: 'other-fields',
                fields: [
                    this.WEIGHT,
                    this.MAX_DURABILITY
                ]
            }
        ],
        'accessory': [],
        'ability': [
            this.ABILITY_COSTS,
            {
                group: 'other-fields',
                fields: [
                    this.COOLDOWN,
                    this.RANGE
                ]
            },
            this.SKILLS
        ],
        'material': [],
        'character': [
            this.PATHS,
            ...this.ATTRIBUTES,
            this.SKILLS,
            this.COINS,
        ]
    };


}
