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


    // character selection and movement between sections
    if (chosenChampion === false) {
        $("#char1").on("click", function () {
            $("#char2").appendTo($("#enemies-sect1"));
            $("#char3").appendTo($("#enemies-sect2"));
            $("#char4").appendTo($("#enemies-sect3"));
            $("#char1").data('chosenChampion', true);
        });
        $("#char2").on("click", function () {
            $("#char1").appendTo($("#enemies-sect1"));
            $("#char3").appendTo($("#enemies-sect2"));
            $("#char4").appendTo($("#enemies-sect3"));
            $("#char2").data('chosenChampion', true);
        });
        $("#char3").on("click", function () {
            $("#char1").appendTo($("#enemies-sect1"));
            $("#char2").appendTo($("#enemies-sect2"));
            $("#char4").appendTo($("#enemies-sect3"));
            $("#char3").data('chosenChampion', true);
        });
        $("#char4").on("click", function () {
            $("#char1").appendTo($("#enemies-sect1"));
            $("#char2").appendTo($("#enemies-sect2"));
            $("#char3").appendTo($("#enemies-sect3"));
            $("#char4").data('chosenChampion', true);
        });
    };

    if (chosenEnemy === false && chosenChampion === false) {
        $("#ememies-sect1").on("click", function () {
            $("#enemies-sect1").appendTo($("#defender-obj"));
            $("#defender-obj").data("chosenEnemy", true);
        });
        $("#ememies-sect2").on("click", function () {
            $("#enemies-sect2").appendTo($("#defender-obj"));
            $("#defender-obj").data("chosenEnemy", true);
        });
        $("#ememies-sect3").on("click", function () {
            $("#enemies-sect3").appendTo($("#defender-obj"));
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
    var obiWanDiv = $("<div id='char1' data-name='" + characters.obiWan + "'></div>");
    console.log(obiWanDiv);
    obiWanDiv2 = $("<div class='character-name'></div>").text("obiWan");
    var obiWanImg = $('<img id="char1-img" src="assets/Images/obi-wan-kenobi.png" />');
    console.log("image text")
    
    obiWanDiv.addClass("character3-health").text(characters.obiWan.health);
    // luke div
    var lukeSkywalkerDiv = $("<div id='char2' data-name='" + characters.lukeSkywalker + "'></div>");
    console.log(lukeSkywalkerDiv);
    console.log("it made it")
    lukeSkywalkerDiv.addClass("character-name2").text("lukeSkywalker");
    console.log("hurrah")
    lukeSkywalkerDiv.prepend('<img id="char2-img" src="assets/Images/luke-skywalker.jpg" />');
    lukeSkywalkerDiv.addClass("character3-health").text(characters.lukeSkywalker.health);
    // darthVader div
    var darthVaderDiv = $("<div id='char3' data-name='" + characters.darthVader + "'></div>");
    console.log(darthVaderDiv);
    darthVaderDiv.addClass("character-name3").text("darthVader");
    darthVaderDiv.prepend('<img id="char3-img" src="assets/Images/darth-vader.jpg" />');
    darthVaderDiv.addClass("character3-health").text(characters.darthVader.health);
    // emporer palpatine div
    var emporerPalpatineDiv = $("<div id='char4' data-name='" + characters.emporerPalpatine + "'></div>");
    console.log(emporerPalpatineDiv);
    emporerPalpatineDiv.addClass("character-name4").text("emporerPalpatine");
    emporerPalpatineDiv.prepend('<img id="char4-img" src="assets/Images/palpatine.jpg" />');
    emporerPalpatineDiv.addClass("character4-health").text(characters.emporerPalpatine.health);

    $("#your-char").prepend(obiWanDiv2);
    $("#your-char").append(obiWanImg);
    $("#your-char").append(obiWanDiv);


    $(obiwan)

    console.log(obiWanDiv);
    $("#your-char").append(lukeSkywalkerDiv);
    console.log(lukeSkywalkerDiv);
    $("#your-char").append(darthVaderDiv);
    console.log(darthVaderDiv);
    $("#your-char").append(emporerPalpatineDiv);
    console.log(emporerPalpatineDiv);


});