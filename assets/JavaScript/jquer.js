currentPlayer = "";
currentEnemy = "";
stage = 0;
damageMultiplier = 1;
enemiesDefeated = 0;
playerIndex = 0;
enemyIndex = 0;

charsArray = [

    {
        name: "squirtle",
        id: 0,
        power: 3,
        counterAttackPower: 5,
        currentHealth: 100,
        maxHealth: 100,
        isPlayer: false,
        isEnemy: true,
        isDefeated: false,
    },
    {
        name: "charmander",
        id: 1,
        power: 5,
        counterAttackPower: 3,
        currentHealth: 65,
        maxHealth: 65,
        isPlayer: false,
        isEnemy: true,
        isDefeated: false,
    },
    {
        name: "bulbasaur",
        id: 2,
        power: 4,
        counterAttackPower: 4,
        currentHealth: 85,
        maxHealth: 85,
        isPlayer: false,
        isEnemy: true,
        isDefeated: false,
    },
];

damageCalculation = function (character) {
    if (character.isPlayer) {
        var damage = character.power * damageMultiplier * randomDamage();
        damageMultiplier += (Math.floor(Math.random() * (35 - 5)) / 100);
        textHTML(`${charsArray[playerIndex].name.toUpperCase()} dealt ${Math.floor(damage)} damage!`)

    }

    if (character.isEnemy) {
        var damage = character.counterAttackPower * this.randomDamage();
        this.textAppend(`${charsArray[enemyIndex].name.toUpperCase()} dealt ${Math.floor(damage)} damage!`)

    }

    return damage;
};

randomDamage = function () {
    return (Math.floor(Math.random() * (100 - 85) + 85)) / 100;
};

applyDamage = function (defender, atacker) {
    if (atacker.isDefeated === false) {
        defender.currentHealth -= damageCalculation(atacker);
    }

    let playerHP = `.${charsArray[playerIndex].name}HP`;
    let playerHealthPercent = ((charsArray[game.playerIndex].currentHealth / charsArray[playerIndex].maxHealth) * 100);
    $(playerHP).each(function () {
        $(playerHP).attr("style", `width:${healthBar(playerIndex)}%`);

    });
    let enemyHP = `.${charsArray[enemyIndex].name}HP`;
    let enemyHealthPercent = ((charsArray[enemyIndex].currentHealth / charsArray[enemyIndex].maxHealth) * 100);
    $(enemyHP).each(function () {
        $(enemyHP).attr("style", `width:${healthBar(enemyIndex)}%`);
    });
};

checkDefeated = function (character) {

    if ((character.isPlayer) && (character.currentHealth <= 0)) {
        character.isDefeated = true;
        alert("You've lost!");
        location.reload();
    }

    if ((character.isEnemy) && (character.currentHealth < 0)) {
        character.isDefeated = true;
        enemiesDefeated++;
        setUpBattle();
        createTeams();
        stage = 1;

        if (enemiesDefeated === 2) {
            setTimeout(function () {
                alert("You win!");
                location.reload();
            }, 1000);

        }
    }


};

createTeams = function () {
    let teamColumn = $("<div></div>").attr({
        "class": "col-3",
        "id": "teamColumn"
    });
    let emptyColumn = $("<div></div>").attr("class", "col-6");
    let enemyColumn = $("<div></div>").attr({
        "class": "col-3",
        "id": "enemyTeamColumn"
    });

    $("#top-row").empty();
    $("#top-row").append(teamColumn, emptyColumn, enemyColumn);
    for (i in charsArray) {
        if ((charsArray[i].isPlayer) && (charsArray[i].isDefeated === false)) {
            let teamDiv = `<div id='portrait'><img id=${charsArray[i].name} value='${charsArray[i].name}' class='portrait character' src='assets/images/${charsArray[i].name}/portrait.png'><div id='${charsArray[i].name}HP' class='progress healthBar'><div id='${charsArray[i].name}HP' class='progress-bar healthBarCurrent ${charsArray[i].name}HP' style='width:${healthBar(i)}%'</div></div></div>`;
            $("#teamColumn").append(teamDiv);
        } else if ((charsArray[i].isPlayer) && (charsArray[i].isDefeated === true)) {
            let teamDiv = `<div id='portrait'><img id=${charsArray[i].name} value='${charsArray[i].name}' class='portrait character' src='assets/images/${charsArray[i].name}/portraitgrey.png'><div id='${charsArray[i].name}HP' class='progress healthBar'><div id='${charsArray[i].name}HP' class='progress-bar healthBarCurrent ${charsArray[i].name}HP' style='width:${healthBar(i)}%'</div></div></div>`;
            $("#teamColumn").append(teamDiv);
        } else if ((charsArray[i].isEnemy) && charsArray[i].isDefeated === false) {
            let teamDiv = `<div id='portrait'><img id=${charsArray[i].name} value='${charsArray[i].name}' class='portrait character' src='assets/images/${charsArray[i].name}/portrait.png'><div id='${charsArray[i].name}HP' class='progress healthBar'><div id='${charsArray[i].name}HP' class='progress-bar healthBarCurrent ${charsArray[i].name}HP' style='width:${healthBar(i)}%'</div></div></div>`;
            $("#enemyTeamColumn").append(teamDiv);
        } else if ((charsArray[i].isEnemy) && charsArray[i].isDefeated === true) {
            let teamDiv = `<div id='portrait'><img id=${charsArray[i].name} value='${charsArray[i].name}' class='portrait character' src='assets/images/${charsArray[i].name}/portraitgrey.png'><div id='${charsArray[i].name}HP' class='progress healthBar'><div id='${charsArray[i].name}HP' class='progress-bar healthBarCurrent ${charsArray[i].name}HP' style='width:${healthBar(i)}%'</div></div></div>`;
            $("#enemyTeamColumn").append(teamDiv);
        }
    }

};

setUpBattle = function () {
    if (stage === 2) {
        let playerColumn = $("<div></div>").attr({
            "class": "col-md-3 col-6",
            "id": "playerColumn"
        });
        let currentEnemyColumn = $("<div></div>").attr({
            "class": "col-md-3 col-6",
            "id": "currentEnemyColumn"
        });
        let emptyColumn = $("<div></div>").attr("class", "col-md-3");
        $("#combat-row").empty();
        $("#combat-row").append(emptyColumn, playerColumn, currentEnemyColumn);
        $("#playerColumn").append(`<div id='battlesprite' value=${charsArray[playerIndex].name} class="mx-auto battlesprite current-player"><img class='battlesprite' src='assets/images/${charsArray[playerIndex].name}/playeridle.png'><div id='${charsArray[playerIndex].name}HP' class='progress battleHealthBar'><div id='${charsArray[playerIndex].name}HP' class='progress-bar healthBarCurrent ${charsArray[playerIndex].name}HP' style='width:${healthBar(playerIndex)}%'</div></div></div>`)
        if (charsArray[enemyIndex].isDefeated === false) {
            $("#currentEnemyColumn").append(`<div id='battlesprite' value=${charsArray[enemyIndex].name} class="mx-auto battlesprite current-enemy"><img class='battlesprite' src='assets/images/${charsArray[enemyIndex].name}/enemyidle.png'><div id='${charsArray[enemyIndex].name}HP' class='progress battleHealthBar'><div id='${charsArray[enemyIndex].name}HP' class='progress-bar healthBarCurrent ${charsArray[enemyIndex].name}HP' style='width:${healthBar(enemyIndex)}%'</div></div></div>`)
        }
        $("#button-row").empty();
        $("#button-row").append('<button type="button" id="attack" class="attack btn btn-danger mx-auto">Attack</button>');
    }
};

assignPlayer = function (x) {
    if (stage === 0) {
        for (i in charsArray) {

            if (x === charsArray[i].name) {
                playerIndex = i;
                charsArray[playerIndex].isPlayer = true;
                charsArray[playerIndex].isEnemy = false;
                break;
            };
        };
    } else if (stage === 1) {
        for (i in charsArray) {

            if ((x === charsArray[i].name) && (charsArray[i].isPlayer === false)) {
                enemyIndex = i;
                charsArray[enemyIndex].isEnemy = true;
                charsArray[enemyIndex].isPlayer = false;
                break
            } else if ((x === charsArray[i].name) && (charsArray[i].isPlayer === true)) {
                textHTML("This pokemon is on your team!");
                enemyIndex = -1;
            };
        };
    };

};

healthBar = function (x) {
    let healthPercent = ((charsArray[x].currentHealth / charsArray[x].maxHealth) * 100);
    return healthPercent;
};

textHTML = function (string) {
    $("#inGameText").html(`<p>${string}</p>`);
};

textAppend = function (string) {
    $("#inGameText").append(`<p>${string}</p>`);
};



$(document).ready(function () {
    $("#top-row").on("click", ".character", function () {
        if (stage === 0) {
            currentPlayer = $(this).attr("value");
            assignPlayer(currentPlayer);
            stage = 1;
            createTeams();
            $(".container").css({ "image-rendering": "pixelated", "background": "url(assets/images/background/labinterior.png)", "background-repeat": "no-repeat", "background-size": "cover", "height": "100%" });
            textHTML("Select your Oponent!");
        } else if (stage === 1) {
            currentEnemy = $(this).attr("value");
            assignPlayer(currentEnemy);
            if (enemyIndex !== -1) {
                if (charactersArray[enemyIndex].isDefeated === false) {
                    stage = 2;
                    setUpBattle();
                    textHTML(`Go! ${charsArray[playerIndex].name.toUpperCase()}!`);
                    textAppend(`Go! ${charsArray[enemyIndex].name.toUpperCase()}!`);
                    textAppend("Click attack to battle!")

                } else {
                    textHTML("That Pokemon no longer has the will to battle!");
                }
            }
        }
    });

    $("#button-row").on("click", ".attack", function () {
        if (stage === 2) {
            applyDamage(charsArray[enemyIndex], charsArray[playerIndex]);
            checkDefeated(charsArray[enemyIndex]);
            applyDamage(charsArray[playerIndex], charsArray[enemyIndex]);
            checkDefeated(charsArray[playerIndex]);

        } else if (stage === 1) {
            textHTML("There's no opponent!")
        }
    })

});