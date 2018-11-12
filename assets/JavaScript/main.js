var chosenEnemy = false;
var chosenChampion = false;
var attack = 0;
var health = 0;
var counterAttack = 0;

var characters = {
    getAttributes: function (char) {
        if (chosenChampion === true) {
            attack = char.attack + 10;
            health = char.health;
        }
        else {
            health = char.health;
            counterAttack = char.getCounterAttack + 10;
        }
    },
    levelUp: function (char1, char2) {
        if (char2.health < 0) {
            char.attack += 10;
            char.health += 100;
        }
    },
};

var characters = {
    obiWan: {
        health: 150,
        attack: 20,
        counterAttack: 15
    },// best in game
    lukeSkywalker: {
        health: 100,
        attack: 30,
        counterAttack: 20
    },
    emporerPalpatine: {
        health: 90,
        attack: 25,
        counterAttack: 20
    }, // worst in game
    darthVader: {
        health: 100,
        attack: 25,
        counterAttack: 20
    },
};

var battle = function (char1, char2) {
    char1.health -= char2.counterAttack
    char2.health -= char1.attack
};

// character selection
$("#char1").on("click", function () {
    $("#char2").appendTo($("#enemies-sect"))
    $("#char3").appendTo($("#enemies-sect"))
    $("#char4").appendTo($("#enemies-sect"))
    character[chosenChampion] = true;
});
$("#char2").on("click", function () {
    $("#char1").appendTo($("#enemies-sect"))
    $("#char3").appendTo($("#enemies-sect"))
    $("#char4").appendTo($("#enemies-sect"))
    character[chosenChampion] = true;
});
$("#char3").on("click", function () {
    $("#char1").appendTo($("#enemies-sect"))
    $("#char2").appendTo($("#enemies-sect"))
    $("#char4").appendTo($("#enemies-sect"))
    character[chosenChampion] = true;
});
$("#char4").on("click", function () {
    $("#char1").appendTo($("#enemies-sect"))
    $("#char2").appendTo($("#enemies-sect"))
    $("#char4").appendTo($("#enemies-sect"))
    character[chosenChampion] = true;
});