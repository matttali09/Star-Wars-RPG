$(document).ready(function () {
    //globals
    var chosenEnemy = false;
    var chosenChampion = false;
    var attack = 0;
    var health = 0;
    var counterAttack = 0;

    // game characters and starting attributes
    var characters = {
        obiWan: {
            name: "obiWan",
            health: 150,
            attack: 20,
            counterAttack: 15,
            chosenChampion: false,
            chosenEnemy: false,
        },// best in game
        lukeSkywalker: {
            name: "lukeSkywalker",
            health: 100,
            attack: 30,
            counterAttack: 20,
            chosenChampion: false,
            chosenEnemy: false,
        },
        darthVader: {
            name: "lukeSkywalker",
            health: 100,
            attack: 25,
            counterAttack: 20,
            chosenChampion: false,
            chosenEnemy: false,
        },
        emporerPalpatine: {
            name: "lukeSkywalker",
            health: 90,
            attack: 25,
            counterAttack: 20,
            chosenChampion: false,
            chosenEnemy: false,
        }, // worst in game
    };

    // character selection and moving images to select enemy section
    $("#your-char1").on("click", function () {
        if (characters.obiWan.chosenChampion === false && characters.lukeSkywalker.chosenChampion === false && characters.darthVader.chosenChampion === false && characters.emporerPalpatine.chosenChampion === false) {
            $("#your-char2").appendTo($("#enemies-sect"));
            $("#your-char2").attr("id", "enemies-sect1");
            $("#enemies-sect1").css("background-color", "red");
            $("#your-char3").appendTo($("#enemies-sect"));
            $("#your-char3").attr("id", "enemies-sect2");
            $("#enemies-sect2").css("background-color", "red");
            $("#your-char4").appendTo($("#enemies-sect"));
            $("#your-char4").attr("id", "enemies-sect3");
            $("#enemies-sect3").css("background-color", "red");
            $("#your-char1").data('chosenChampion', true);
            $("#your-char1").css("background-color", "gold");
            characters.obiWan.chosenChampion = true;
            console.log(obiWanDiv2);
            console.log(obiWanImg);
            console.log(obiWanDiv);
            console.log(characters.obiWan);
            console.log(lukeSkywalkerDiv2);
            console.log(lukeSkywalkerImg);
            console.log(lukeSkywalkerDiv);
            console.log(darthVaderDiv2);
            console.log(darthVaderImg);
            console.log(darthVaderDiv);
            console.log(emporerPalpatineDiv2);
            console.log(emporerPalpatineImg);
            console.log(emporerPalpatineDiv);
        }
    });
    $("#your-char2").on("click", function () {
        if (characters.obiWan.chosenChampion === false && characters.lukeSkywalker.chosenChampion === false && characters.darthVader.chosenChampion === false && characters.emporerPalpatine.chosenChampion === false) {
            $("#your-char1").appendTo($("#enemies-sect"));
            $("#your-char1").attr("id", "enemies-sect1");
            $("#enemies-sect1").css("background-color", "red");
            $("#your-char3").appendTo($("#enemies-sect"));
            $("#your-char3").attr("id", "enemies-sect2");
            $("#enemies-sect2").css("background-color", "red");
            $("#your-char4").appendTo($("#enemies-sect"));
            $("#your-char4").attr("id", "enemies-sect3");
            $("#enemies-sect3").css("background-color", "red");
            $("#your-char2").data('chosenChampion', true);
            $("#your-char2").css("background-color", "gold");
            characters.lukeSkywalker.chosenChampion = true;
        }
    });
    $("#your-char3").on("click", function () {
        if (characters.obiWan.chosenChampion === false && characters.lukeSkywalker.chosenChampion === false && characters.darthVader.chosenChampion === false && characters.emporerPalpatine.chosenChampion === false) {
            $("#your-char1").appendTo($("#enemies-sect"));
            $("#your-char1").attr("id", "enemies-sect1");
            $("#enemies-sect1").css("background-color", "red");
            $("#your-char2").appendTo($("#enemies-sect"));
            $("#your-char2").attr("id", "enemies-sect2");
            $("#enemies-sect2").css("background-color", "red");
            $("#your-char4").appendTo($("#enemies-sect"));
            $("#your-char4").attr("id", "enemies-sect3");
            $("#enemies-sect3").css("background-color", "red");
            $("#your-char3").data('chosenChampion', true);
            $("#your-char3").css("background-color", "gold");
            characters.darthVader.chosenChampion = true;
        }
    });
    $("#your-char4").on("click", function () {
        if (characters.obiWan.chosenChampion === false && characters.lukeSkywalker.chosenChampion === false && characters.darthVader.chosenChampion === false && characters.emporerPalpatine.chosenChampion === false) {
            $("#your-char1").appendTo($("#enemies-sect"));
            $("#your-char1").attr("id", "enemies-sect1");
            $("#enemies-sect1").css("background-color", "red");
            $("#your-char2").appendTo($("#enemies-sect"));
            $("#your-char2").attr("id", "enemies-sect2");
            $("#enemies-sect2").css("background-color", "red");
            $("#your-char3").appendTo($("#enemies-sect"));
            $("#your-char3").attr("id", "enemies-sect3");
            $("#enemies-sect3").css("background-color", "red");
            $("#your-char4").data('chosenChampion', true);
            $("#your-char4").css("background-color", "gold");
            characters.emporerPalpatine.chosenChampion = true;
        }
    });

    // second movement to the enemy to attack spot (defender-obj) (only works for obiwan atthe moment because i cant get 
    // defender1 to pick up the attribute from the container so i have to hardcode chosenEnemy true)
    $(this).on("click", "#enemies-sect1", function () {
        if (characters.obiWan.chosenEnemy === false && characters.lukeSkywalker.chosenEnemy === false && characters.darthVader.chosenEnemy === false && characters.emporerPalpatine.chosenEnemy === false) {
            $("#enemies-sect1").appendTo($("#defender"));
            $("#enemies-sect1").attr("id", "defender-obj");
            $("#enemies-sect2").css("background-color", "grey");
            $("#enemies-sect3").css("background-color", "grey");
            var defender1 = $("#defender-obj").attr("data-name")
            characters.lukeSkywalker.chosenEnemy = true;

            console.log(characters.lukeSkywalker);
            console.log($("#defender-obj"))
        }
    });
    $(this).on("click", "#enemies-sect2", function () {
        if (characters.obiWan.chosenEnemy === false && characters.lukeSkywalker.chosenEnemy === false && characters.darthVader.chosenEnemy === false && characters.emporerPalpatine.chosenEnemy === false) {
            $("#enemies-sect2").appendTo($("#defender"));
            $("#enemies-sect2").attr("id", "defender-obj");
            $("#enemies-sect1").css("background-color", "grey");
            $("#enemies-sect3").css("background-color", "grey");
            $("#defender-obj").data("chosenEnemy", true);
            characters.darthVader.chosenEnemy = true;

            console.log(characters.lukeSkywalker);
            console.log($("#defender-obj"))
        }
    });
    $(this).on("click", "#enemies-sect3", function () {
        if (characters.obiWan.chosenEnemy === false && characters.lukeSkywalker.chosenEnemy === false && characters.darthVader.chosenEnemy === false && characters.emporerPalpatine.chosenEnemy === false) {
            $("#enemies-sect3").appendTo($("#defender"));
            $("#enemies-sect3").attr("id", "defender-obj");
            $("#enemies-sect1").css("background-color", "grey");
            $("#enemies-sect2").css("background-color", "grey");
            $("#defender-obj").data("chosenEnemy", true);
            characters.emporerPalpatine.chosenEnemy = true;

            console.log(characters.lukeSkywalker);
            console.log($("#defender-obj"))
        }
    });

    // battle functions
    // run on battle button
    function battle(char1, char2) {
        char1.health -= char2.counterAttack
        char2.health -= char1.attack
    };

    // run when chosing and attacking champions
    var fightStats = {
        getAttributes: function (char1, char2) {
            char1.attack += 6;
            char1.health = char1.health;

            char2.health = char2.health;
        },
        levelUp: function (char1, char2) {
            char1.health += 10;
        },
    };

    // function to reset the chosen enemy's to false
    function defeated() {
        characters.obiWan.chosenEnemy = false;
        characters.lukeSkywalker.chosenEnemy = false;
        characters.darthVader.chosenEnemy = false;
        characters.emporerPalpatine.chosenEnemy = false;
        $("#enemies-sect1").css("background-color", "red");
        $("#enemies-sect2").css("background-color", "red");
        $("#enemies-sect3").css("background-color", "red");
    }

    // to be thrown into fight button when i can pull attributes from the objects
    var defender = $("defender-obj")
    var yourchar = $("#yourchar")
    // $("#fight-button").on("click", function () {
    //     console.log("button working");

    //     fightStats.getAttributes($("#yourchar"), $("#defender-obj"))
    //     battle($("#yourchar"), $("#defender-obj"))
    //      console.log("battle function firing!");
    //      console.log(characters.obiWan);
    //      console.log(characters.lukeSkywalker);       
    //     if ($("#defender-obj").health < 0) {
    //         $("#defender-obj").css('display', 'none')
    //         defeated();
    //     }
    // });

    // initialize battle log
    var battleText = $("#battle-log")

    // fight battle with button and function
    $("#fight-button").on("click", function () {
        console.log("button working");
        
        fightStats.getAttributes(characters.obiWan, characters.lukeSkywalker);
        console.log("fightStats function working");
        battle(characters.obiWan, characters.lukeSkywalker)
        obiWanDiv.text(characters.obiWan.health);
        lukeSkywalkerDiv.text(characters.lukeSkywalker.health);
        console.log("battle function firing!");
        console.log(characters.obiWan);
        console.log(characters.lukeSkywalker);

        
        battleText.html("<p>Your character attacked for " + characters.obiWan.attack + " damage and your enemy attacked you for " + characters.lukeSkywalker.counterAttack + "</p>")
        console.log("battle text is doing something probably");
        
        if (characters.lukeSkywalker.health < 0) {
            fightStats.levelUp(characters.obiWan)
            $("#defender-obj").css('display', 'none')
            defeated();
        }
    });

    // obiWan div with attributes to be appended in a better way than before to allow for it to be wrapped in a container.
    var obiWanDiv = $("<div data-name='" + characters.obiWan + "'></div>");
    var obiWanDiv2 = $("<div class='character-name' data-name=" + characters.obiWan.name + " data-attack=" + characters.obiWan.attack + " data-health=" + characters.obiWan.health + " data-counterAttack=" + characters.obiWan.counterAttack + "></div>").text("Obi-Wan-Kenobi");
    var obiWanImg = $('<img id="char1-img" height="100" src="assets/Images/obi-wan-kenobi.png" />');
    obiWanDiv.addClass("character1-health").text(characters.obiWan.health);
    // luke div
    var lukeSkywalkerDiv = $("<div data-name='" + characters.lukeSkywalker + "'></div>");
    var lukeSkywalkerDiv2 = $("<div class='character-name2' data-name=" + characters.lukeSkywalker.name + " data-attack=" + characters.lukeSkywalker.attack + " data-health=" + characters.lukeSkywalker.health + " data-counterAttack=" + characters.lukeSkywalker.counterAttack + "></div>").text("Luke Skywalker");
    var lukeSkywalkerImg = $('<img id="char2-img" height="100" src="assets/Images/luke-skywalker.jpg" />');
    lukeSkywalkerDiv.addClass("character2-health").text(characters.lukeSkywalker.health);
    // darthVader div
    var darthVaderDiv = $("<div data-name='" + characters.darthVader + "'></div>");
    var darthVaderDiv2 = $("<div class='character-name3' data-name=" + characters.darthVader.name + " data-attack=" + characters.darthVader.attack + " data-health=" + characters.darthVader.health + " data-counterAttack=" + characters.darthVader.counterAttack + "></div>").text("Darth Vader");
    var darthVaderImg = $('<img id="char3-img" height="100" src="assets/Images/darth-vader.jpg" />');
    darthVaderDiv.addClass("character3-health").text(characters.darthVader.health);
    // emporer palpatine div
    var emporerPalpatineDiv = $("<div data-name='" + characters.emporerPalpatine + "'></div>");
    var emporerPalpatineDiv2 = $("<div class='character-name4' data-name=" + characters.emporerPalpatine.name + " data-attack=" + characters.emporerPalpatine.attack + " data-health=" + characters.emporerPalpatine.health + " data-counterAttack=" + characters.emporerPalpatine.counterAttack + "></div>").text("Emporer Palpatine");
    var emporerPalpatineImg = $('<img id="char4-img" height="100" src="assets/Images/palpatine.jpg" />');
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