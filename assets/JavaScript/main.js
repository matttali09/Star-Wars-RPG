var chosenEnemy = false;
var chosenChampion = true;
var attack = 0;
var health = 0;
var counterAttack = 0;

var attributes = {
    health: 100,
    attack: 20,
    counterAttack: 15,
},

var characters = {
    getAttributes: function (attributes) {
        if (chosenChampion === true) {
            attack = attributes.attack;
            health = attributes.health;
        }
        else {
            health = attributes.health;
            counterAttack = attributes.getCounterAttack
        }
    },
},

var specificCharacters = {
    obiWan = {
        
    },// best in game
    lukeSkywalker = {

    },
    emporerPalpatine = {

    }, // worst in game
    darthVader = {

    },
},