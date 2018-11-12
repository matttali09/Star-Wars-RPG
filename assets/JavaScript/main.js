$(document).ready(function () {
    //globals
    var chosenEnemy = false;
    var chosenChampion = false;
    var attack = 0;
    var health = 0;
    var counterAttack = 0;

    // run when chosing and attacking champions
    var fightStats = {
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

    // game characters and starting attributes
    var characters = {
        obiWan: {
            health: 150,
            attack: 20,
            counterAttack: 15,
            chosenChampion: false,
            chosenEnemy: false,
        },// best in game
        lukeSkywalker: {
            health: 100,
            attack: 30,
            counterAttack: 20,
            chosenChampion: false,
            chosenEnemy: false,
        },
        darthVader: {
            health: 100,
            attack: 25,
            counterAttack: 20,
            chosenChampion: false,
            chosenEnemy: false,
        },
        emporerPalpatine: {
            health: 90,
            attack: 25,
            counterAttack: 20,
            chosenChampion: false,
            chosenEnemy: false,
        }, // worst in game
    };

    // run on battle button
    var battle = function (char1, char2) {
        char1.health -= char2.counterAttack
        char2.health -= char1.attack
    };

    // $("#char1").attr(character.obiWan); not sure if i can use something like this
    // for the data-type attribute i added to the img tag or if something like this would work better.


    // character selection and movement between sections
    if (chosenChampion === false ) {   
    $("#char1").on("click", function () {
        $("#char2").appendTo($("#enemies-sect1"))
        $("#char3").appendTo($("#enemies-sect2"))
        $("#char4").appendTo($("#enemies-sect3"))
        $("#char1").character[this.chosenChampion] = true;
    });
    $("#char2").on("click", function () {
        $("#char1").appendTo($("#enemies-sect1"))
        $("#char3").appendTo($("#enemies-sect2"))
        $("#char4").appendTo($("#enemies-sect3"))
        $(this).character[this.chosenChampion] = true;
    });
    $("#char3").on("click", function () {
        $("#char1").appendTo($("#enemies-sect1"))
        $("#char2").appendTo($("#enemies-sect2"))
        $("#char4").appendTo($("#enemies-sect3"))
        $(this).character[this.chosenChampion] = true;
    });
    $("#char4").on("click", function () {
        $("#char1").appendTo($("#enemies-sect1"))
        $("#char2").appendTo($("#enemies-sect2"))
        $("#char4").appendTo($("#enemies-sect3"))
        $(this).character[this.chosenChampion] = true;
    });}

    if (chosenEnemy === false && chosenChampion === false) {
    $("#ememies-sect1").on("click", function () {
        $("#enemies-sect1").appendTo($("#defender-obj"))

    });
    $("#ememies-sect2").on("click", function () {
        $("#enemies-sect2").appendTo($("#defender-obj"))
    });
    $("#ememies-sect3").on("click", function () {
        $("#enemies-sect3").appendTo($("#defender-obj"))
    });}

});