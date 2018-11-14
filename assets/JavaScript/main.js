$(document).ready(function () {
    //globals
    var chosenEnemy = false;
    var chosenChampion = false;
    var attack = 0;
    var health = 0;
    var counterAttack = 0;

    // run when chosing and attacking champions
    var fightStats = {
        getAttributes: function (char1, char2) {
            char1.attack = char1.attack + 10;
            char1.health = char1.health;

            char2.health = char2.health;
            char2.counterAttack = char2.getCounterAttack + 10;
        },
        levelUp: function (char1, char2) {
                char1.attack += 10;
                char1.health += 100;
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
    function battle(char1, char2) {
        char1.health -= char2.counterAttack
        char2.health -= char1.attack
    };

    // $("#char1").attr(character.obiWan); not sure if i can use something like this
    // for the data-type attribute i added to the img tag or if something like this would work better.


    // character selection and moving images to select enemy section
    if (characters.obiWan.chosenChampion === false && characters.lukeSkywalker.chosenChampion === false && characters.darthVader.chosenChampion === false && characters.emporerPalpatine.chosenChampion === false) {
        $("#your-char1").on("click", function () {
            $("#your-char2").appendTo($("#enemies-sect"));
            $("#your-char2").attr("id", "enemies-sect1");
            $("#your-char3").appendTo($("#enemies-sect"));
            $("#your-char3").attr("id", "enemies-sect2");
            $("#your-char4").appendTo($("#enemies-sect"));
            $("#your-char4").attr("id", "enemies-sect3");
            $("#your-char1").data('chosenChampion', true);
            console.log(obiWanDiv2);
            console.log(obiWanImg);
            console.log(obiWanDiv);
            console.log(characters.obiWan)
            console.log(lukeSkywalkerDiv2);
            console.log(lukeSkywalkerImg);
            console.log(lukeSkywalkerDiv);
            console.log(darthVaderDiv2);
            console.log(darthVaderImg);
            console.log(darthVaderDiv);
            console.log(emporerPalpatineDiv2);
            console.log(emporerPalpatineImg);
            console.log(emporerPalpatineDiv);
        });
        $("#your-char2").on("click", function () {
            $("#your-char1").appendTo($("#enemies-sect"));
            $("#your-char1").attr("id", "enemies-sect1");
            $("#your-char3").appendTo($("#enemies-sect"));
            $("#your-char3").attr("id", "enemies-sect2");
            $("#your-char4").appendTo($("#enemies-sect"));
            $("#your-char4").attr("id", "enemies-sect3");
            $("#your-char2").data('chosenChampion', true);
        });
        $("#your-char3").on("click", function () {
            $("#your-char1").appendTo($("#enemies-sect"));
            $("#your-char1").attr("id", "enemies-sect1");
            $("#your-char2").appendTo($("#enemies-sect"));
            $("#your-char2").attr("id", "enemies-sect2");
            $("#your-char4").appendTo($("#enemies-sect"));
            $("#your-char4").attr("id", "enemies-sect3");
            $("#your-char3").data('chosenChampion', true);
        });
        $("#your-char4").on("click", function () {
            $("#your-char1").appendTo($("#enemies-sect"));
            $("#your-char1").attr("id", "enemies-sect1");
            $("#your-char2").appendTo($("#enemies-sect"));
            $("#your-char2").attr("id", "enemies-sect2");
            $("#your-char3").appendTo($("#enemies-sect"));
            $("#your-char3").attr("id", "enemies-sect3");
            $("#your-char4").data('chosenChampion', true);
        });
    };

        // second movement
    if (characters.obiWan.chosenEnemy === false && characters.lukeSkywalker.chosenEnemy === false && characters.darthVader.chosenEnemy === false && characters.emporerPalpatine.chosenEnemy === false) {
        $("#ememies-sect").on("click", "#ememies-sect1", function () {
            $("#enemies-sect1").appendTo($("#defender"));
            $("#enemies-sect1").attr("id", "defender-obj");
            $("#defender-obj").data("chosenEnemy", true);
        });
        $("#ememies-sect").on("click", "#ememies-sect2", function () {
            $("#enemies-sect2").appendTo($("#defender"));
            $("#enemies-sect2").attr("id", "defender-obj");
            $("#defender-obj").data("chosenEnemy", true);
        });
        $("#ememies-sect").on("click", "#ememies-sect3", function () {
            $("#enemies-sect3").appendTo($("#defender"));
            $("#enemies-sect3").attr("id", "defender-obj");
            $("#defender-obj").data("chosenEnemy", true);
        });
    };

    function Game(char1, char2) {
        fightStats.getAttributes(char1, char2);
        battle(char1, char2);
        if (char2.health < 0) {
            fightStats.levelUp(char1, char2);
        };

    };

    $("#fight-button").on("click", function () {
        game($("#yourchar"), $("#defenderobj"))
    });

    // obiWan div with attributes to be appended in a better way than before to allow for 
    var obiWanDiv = $("<div data-name='" + characters.obiWan + "'></div>");
    var obiWanDiv2 = $("<div class='character-name'></div>").text("Obi-Wan-Kenobi");
    var obiWanImg = $('<img id="char1-img" src="assets/Images/obi-wan-kenobi.png" />');   
    obiWanDiv.addClass("character1-health").text(characters.obiWan.health);
    // luke div
    var lukeSkywalkerDiv = $("<div data-name='" + characters.lukeSkywalker + "'></div>");
    var lukeSkywalkerDiv2 = $("<div class='character-name2'></div>").text("Luke Skywalker");
    var lukeSkywalkerImg = $('<img id="char2-img" src="assets/Images/luke-skywalker.jpg" />');
    lukeSkywalkerDiv.addClass("character2-health").text(characters.lukeSkywalker.health);
    // darthVader div
    var darthVaderDiv = $("<div data-name='" + characters.darthVader + "'></div>");
    var darthVaderDiv2 = $("<div class='character-name2'></div>").text("Darth Vader");
    var darthVaderImg = $('<img id="char3-img" src="assets/Images/darth-vader.jpg" />');
    darthVaderDiv.addClass("character3-health").text(characters.darthVader.health);
    // emporer palpatine div
    var emporerPalpatineDiv = $("<div data-name='" + characters.emporerPalpatine + "'></div>");
    var emporerPalpatineDiv2 = $("<div class='character-name2'></div>").text("Emporer Palpatine");
    var emporerPalpatineImg = $('<img id="char4-img" src="assets/Images/palpatine.jpg" />');
    emporerPalpatineDiv.addClass("character4-health").text(characters.emporerPalpatine.health);

    $("#your-char1").append(obiWanDiv2);
    $("#your-char1").append(obiWanImg);
    $("#your-char1").append(obiWanDiv);

    $("#your-char2").append(lukeSkywalkerDiv2);
    $("#your-char2").append(lukeSkywalkerImg);
    $("#your-char2").append(lukeSkywalkerDiv);

    $("#your-char3").append(darthVaderDiv2);
    $("#your-char3").append(darthVaderImg);
    $("#your-char3").append(darthVaderDiv);

    $("#your-char4").append(emporerPalpatineDiv2);
    $("#your-char4").append(emporerPalpatineImg);
    $("#your-char4").append(emporerPalpatineDiv);


});