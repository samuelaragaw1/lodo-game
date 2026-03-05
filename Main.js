//creating an element
const gameName = document.createElement("div");
const gameMenu = document.createElement("div");

//what is the number of players
let numberOfPlayers = 0;

//which actionListner is on
let playerAviable = [false, false, false, false];

//flag if we find 6
let playerFindSix = [false, false, false, false];

//what is the output each player perviose draw
let playersDot = [0, 0, 0, 0];

//the current position of entity
let playerOnePostion = [0, 0, 0, 0];
let playerTwoPosition  = [0, 0, 0, 0];
let playerThreePosition  = [0, 0, 0, 0];
let playerFourPosition = [0, 0, 0, 0];

//which entity is movable
let entityAviable  = [[false, false, false, false], 
                      [false, false, false, false], 
                      [false, false, false, false], 
                      [false, false, false, false]];

//making the game Name
document.body.append(gameName);
gameName.innerHTML = `<div id="m_game_name">Ludo Game</div>`;
//making the game Menu
document.body.append(gameMenu);
gameMenu.innerHTML = `        
        <div id="m_con">
            <div id="m_intro">Game Menu</div>
            <div id="m_option_con">
                <div id="one" class="m_option">Two players</div>
                <div id="two" class="m_option">Three players</div>
                <div id="three" class="m_option">Four players</div>
            </div>
        </div>`;

//making event Listner for game menu options
document.querySelector("#one").addEventListener("click", ()=> {
    numberOfPlayers = 2;
    goGame(2); 
    for (let i = 1; i <=2 ; i++) {
        makeEntity(i);
    }
    gameRunner(2);
});
document.querySelector("#two").addEventListener("click", ()=> {
    numberOfPlayers = 3;
    goGame(3);
    for (let i = 1; i <=3 ; i++) {
        makeEntity(i);
    }
    gameRunner(3);
});
document.querySelector("#three").addEventListener("click", ()=> {
    numberOfPlayers = 4;
    goGame(4);
    for (let i = 1; i <=4 ; i++) {
        makeEntity(i);
    }
    gameRunner(4);
});

//Make =============================================================
//make the entitys
function makeEntity(player) {
    for(let i = 0; i < 4; i++) {
        const entity = document.createElement("entity");
        document.querySelector("#gameBox").append(entity);
        entity.classList.add("entityClass");
        entity.classList.add(`entityClass${player}`);
        entity.id = `entity${player}${i}`;
        //the placement of the entity
        if (player == 1) {
            if (i == 0 ) {
                entity.style.top = `${109}px`;
                entity.style.left =  `${124}px`;
                continue;
            }
            else if (i == 3) {
                entity.style.top = `${109 + 73}px`;
                entity.style.left =  `${124 + 73}px`;
                continue;
            }
            entity.style.top = `${109 + ((i-1)%2)*73}px`;
            entity.style.left =  `${124 + (i%2)*73}px`;
        }
        else if (player == 2) {
            if (i == 0) {
                entity.style.top = `${109}px`;
                entity.style.left =  `${453}px`;
                continue;
            }
            else if (i == 3) {
                entity.style.top = `${109 + 73}px`;
                entity.style.left =  `${453 + 73}px`;
                continue;
            }
            entity.style.top = `${109 + ((i-1)%2)*73}px`;
            entity.style.left =  `${453 + (i%2)*73}px`;
        }
        else if (player == 4) {
            if (i == 0 ) {
                entity.style.top = `${438}px`;
                entity.style.left =  `${124}px`;
                continue;
            }
            else if (i == 3) {
                entity.style.top = `${438 + 73}px`;
                entity.style.left =  `${124 + 73}px`;
                continue;
            }
            entity.style.top = `${438 + ((i-1)%2)*73}px`;
            entity.style.left =  `${124 + (i%2)*73}px`;
        }
        else if (player == 3) {
            if (i == 0) {
                entity.style.top = `${438}px`;
                entity.style.left = `${453}px`;
                continue;
            }
            else if (i == 3) {
                entity.style.top = `${438 + 73}px`;
                entity.style.left = `${453 +73}px`;
                continue;
            }
            entity.style.top = `${438 + ((i-1)%2)*73}px`;
            entity.style.left =  `${453 + (i%2)*73}px`;
        }
    }
    return 0;
} 
//making rotation box
function makeRotationBox(numberOfBox) {
    for(let i = 0; i < numberOfBox; i++) {
        const box = document.createElement("rotationBox");
        document.querySelector("#gameBox").append(box);
        box.id = `rotationBox${i}`;
    }

    for(let i = 0;i < numberOfBox; i++) {
        makeDice(i, 6);
    }

    return 0;
}

//make dice function
function makeDice(player, numberOfDot) {
    const dice = document.createElement("dice");

    dice.classList.add("dice");
    document.querySelector(`#rotationBox${player}`).append(dice);

    //making the dotes
    for(let i = 0; i < numberOfDot; i++) {
        const dot = document.createElement("dot");
        dot.classList.add("dot");
        dice.append(dot);
    }
    
    if(numberOfDot == 1) {
        document.querySelector(`#rotationBox${player} .dice dot:first-child`).style.left = `16px`;
        document.querySelector(`#rotationBox${player} .dice dot:first-child`).style.top = `17px`;
    }
    else if (numberOfDot == 2) {
        document.querySelector(`#rotationBox${player} .dice dot:first-child`).style.left = `29px`;
        document.querySelector(`#rotationBox${player} .dice dot:first-child`).style.top = `29px`;
        document.querySelector(`#rotationBox${player} .dice dot:nth-child(2)`).style.left = `5px`;
        document.querySelector(`#rotationBox${player} .dice dot:nth-child(2)`).style.top = `5px`;
    }
    else if (numberOfDot == 3) {
        document.querySelector(`#rotationBox${player} .dice dot:first-child`).style.left = `31px`;
        document.querySelector(`#rotationBox${player} .dice dot:first-child`).style.top = `31px`;
        document.querySelector(`#rotationBox${player} .dice dot:nth-child(2)`).style.left = `17px`;
        document.querySelector(`#rotationBox${player} .dice dot:nth-child(2)`).style.top = `17px`;
        document.querySelector(`#rotationBox${player} .dice dot:nth-child(3)`).style.left = `4px`;
        document.querySelector(`#rotationBox${player} .dice dot:nth-child(3)`).style.top = `4px`;
    }
    else if(numberOfDot == 4) {
        document.querySelector(`#rotationBox${player} .dice dot:first-child`).style.left = `31px`;
        document.querySelector(`#rotationBox${player} .dice dot:first-child`).style.top = `31px`;
        document.querySelector(`#rotationBox${player} .dice dot:nth-child(2)`).style.left = `4px`;
        document.querySelector(`#rotationBox${player} .dice dot:nth-child(2)`).style.top = `31px`;
        document.querySelector(`#rotationBox${player} .dice dot:nth-child(3)`).style.left = `4px`;
        document.querySelector(`#rotationBox${player} .dice dot:nth-child(3)`).style.top = `4px`;
        document.querySelector(`#rotationBox${player} .dice dot:nth-child(4)`).style.left = `31px`;
        document.querySelector(`#rotationBox${player} .dice dot:nth-child(4)`).style.top = `4px`;
    }
    else if (numberOfDot == 5) {
        document.querySelector(`#rotationBox${player} .dice dot:first-child`).style.left = `31px`;
        document.querySelector(`#rotationBox${player} .dice dot:first-child`).style.top = `31px`;
        document.querySelector(`#rotationBox${player} .dice dot:nth-child(2)`).style.left = `4px`;
        document.querySelector(`#rotationBox${player} .dice dot:nth-child(2)`).style.top = `31px`;
        document.querySelector(`#rotationBox${player} .dice dot:nth-child(3)`).style.left = `4px`;
        document.querySelector(`#rotationBox${player} .dice dot:nth-child(3)`).style.top = `4px`;
        document.querySelector(`#rotationBox${player} .dice dot:nth-child(4)`).style.left = `31px`;
        document.querySelector(`#rotationBox${player} .dice dot:nth-child(4)`).style.top = `4px`;
        document.querySelector(`#rotationBox${player} .dice dot:nth-child(5)`).style.left = `17px`;
        document.querySelector(`#rotationBox${player} .dice dot:nth-child(5)`).style.top = `17px`;
    }
    else {
        document.querySelector(`#rotationBox${player} .dice dot:first-child`).style.left = `33px`;
        document.querySelector(`#rotationBox${player} .dice dot:first-child`).style.top = `31px`;
        document.querySelector(`#rotationBox${player} .dice dot:nth-child(2)`).style.left = `2px`;
        document.querySelector(`#rotationBox${player} .dice dot:nth-child(2)`).style.top = `31px`;
        document.querySelector(`#rotationBox${player} .dice dot:nth-child(3)`).style.left = `2px`;
        document.querySelector(`#rotationBox${player} .dice dot:nth-child(3)`).style.top = `4px`;
        document.querySelector(`#rotationBox${player} .dice dot:nth-child(4)`).style.left = `33px`;
        document.querySelector(`#rotationBox${player} .dice dot:nth-child(4)`).style.top = `4px`;
        document.querySelector(`#rotationBox${player} .dice dot:nth-child(5)`).style.left = `17px`;
        document.querySelector(`#rotationBox${player} .dice dot:nth-child(5)`).style.top = `4px`;
        document.querySelector(`#rotationBox${player} .dice dot:nth-child(6)`).style.left = `17px`;
        document.querySelector(`#rotationBox${player} .dice dot:nth-child(6)`).style.top = `31px`;
    }
    return dice;
}

//Random function ==================================================
function randomFunction(max) {
    return Math.floor(Math.random() * (max - 1 + 1)) + 1;
}

//Animation ========================================================
//animation for the box
function animateBox(boxNumber) {
    const box = document.querySelector(`#rotationBox${boxNumber-1}`); 
    box.style.animation =  `animationBox${boxNumber-1} 2.5s infinite`;
    if (boxNumber == 1) {
        playerAviable[0] = true;
    }
    else if (boxNumber == 2) {
        playerAviable[1]= true;
    }
    else if (boxNumber == 3) {
        playerAviable[2] = true;
    }
    else {
        playerAviable[3] = true;
    }
    return box;
}

//stop animation for the box
function stopAnimateBox(box) {
    box.style.animation =  ``;
}

//action Listener for entity of given player
function entityAction(player, Dot) {
    for(let i=0; i < 4; i++) {
        console.log(`player ${player} enttiy ${i} is ${entityAviable[player - 1][i]}`)
    }
    for(let i=0; i < 4; i++) {
        if (entityAviable[player - 1][i] == true) {
            document.querySelector(`#entity${player}${i}`).addEventListener('click', function test() {
                if(entityAviable[player-1][i] == true) {
                    entityMove(player, i, Dot);
                    entityAviable[player - 1][0] = false;
                    entityAviable[player - 1][1] = false;
                    entityAviable[player - 1][2] = false;
                    entityAviable[player - 1][3] = false;
                    //if the dots are 6 then repeat one more time
                    if(Dot == 6) {
                        animateBox(player);
                        console.log("animated again");
                        document.querySelector(`#rotationBox${player-1}`).addEventListener('click', ()=> {
                            makeGameGoing(player);
                        }, {once: true});
                    }
                }
                //stoping action listner
                playerAviable[player - 1] = false;
            });
        }
    }
    //stoping from action listner
    playerAviable[player - 1] = false;

    //enabling the next element actionlistner
    if (Dot != 6) {
        playerAviable[player] = true;
        animateBox(player+1);
    }
    return 0;
}


//Entity mover
function entityMove(player, entityNumber, Dot) {
    console.log(`player ${player} entity ${entityNumber + 1} moved ${Dot} when clicked`);
}

//position adder 
function entityPosition(player, enityNumber, offset) {

}

//which entity should move form particular player
function entityChecker(player) {
    console.log(`player ${player} entity checker worked`);
    if (playersDot[player-1] == 6) { //this should be playerDot == 6
        entityAviable[player - 1][0] = true;
        entityAviable[player - 1][1] = true;
        entityAviable[player - 1][2] = true;
        entityAviable[player - 1][3] = true;
    }
}
//game runner ======================================================
function gameRunner(numberOfPlayers) {
    //selecting random player
    let gamePlayer = randomFunction(numberOfPlayers);
    //animating the box
    animateBox(gamePlayer);
    //starting the listners
    startEventListner();
}

//when menu cliked this function will work
function goGame(numOfPlayers) {
    numberOfPlayers = numOfPlayers;
    const gameBox = document.createElement("div");
 
    //removing tha menu
    gameMenu.remove();
    gameName.remove();
    document.body.classList.remove("main_page");
    document.body.classList.add("game_page")

    document.body.append(gameBox);
    gameBox.id = `gameBox`;

    makeRotationBox(numOfPlayers);

    return gameBox;
}

//starting the event listner =========================================
function startEventListner() {
    document.querySelector("#rotationBox0").addEventListener("click", ()=> {
        if (playerAviable[0] == true) {
            makeGameGoing(1);
        }
    });
    document.querySelector("#rotationBox1").addEventListener("click", ()=> {
        if (playerAviable[1] == true) {
            playerAviable[1] = false;
            document.querySelector("#rotationBox1 .dice").remove();
            playersDot[1] = randomFunction(6); //drawing random number
            makeDice(1, playersDot[1]);
            stopAnimateBox(document.querySelector("#rotationBox1"));
            if (numberOfPlayers == 2){
                playerAviable[0] = true;
                animateBox(1);
            }
            else {
                playerAviable[2] = true;
                animateBox(3);
            }
        }
    });
    if (numberOfPlayers >= 3) {
        document.querySelector("#rotationBox2").addEventListener("click", ()=> {
            if (playerAviable[2] == true) {
                playerAviable[2] = false;
                document.qerySelector("#rotationBox2 .dice").remove();
                playersDot[2] = randomFunction(6); //drawing random number
                makeDice(2, playersDot[2]);
                stopAnimateBox(document.querySelector("#rotationBox2"));
                if (numberOfPlayers == 3){
                    playerAviable[0] = true;
                    animateBox(1);
                }
                else {
                    playerAviable[3] = true;
                    animateBox(4);
                }
            }
        });
    }
    if (numberOfPlayers == 4) {
        document.querySelector("#rotationBox3").addEventListener("click", ()=> {
            if (playerAviable[3] == true) {
                playerAviable[3] = false;
                document.querySelector("#rotationBox3 .dice").remove();
                playersDot[3] = randomFunction(6); //drawing random number
                makeDice(3, playersDot[3]);
                stopAnimateBox(document.querySelector("#rotationBox3"));
                playerAviable[0] = true;
                animateBox(1)
            }
        });
    }
}

function makeGameGoing(player) {
    document.querySelector("#rotationBox" + (player-1) + " .dice").remove();
    playersDot[player-1] = randomFunction(6); //drawing random number
    makeDice(player-1, playersDot[0]);
    stopAnimateBox(document.querySelector("#rotationBox" + (player-1) +""));
        
    //game Logic goes here
    entityChecker(player);
    entityAction(1, playersDot[player-1]);
}