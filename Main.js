//creating an element
const gameName = document.createElement("div");
const gameMenu = document.createElement("div");

//is it the time to animate the next player
let keepGoing = true;

//the position that entity must follow
//player One
let entityFollowOne = [];
for(let i = 1; i <= 57; i++) {
    entityFollowOne.push(i);
}
//player two
let entityFollowTwo = []
for(let i = 14; i <= 51; i++) {
    entityFollowTwo.push(i);
}
for(let i = 0; i <= 12; i++) {
    entityFollowTwo.push(i);
}
for(let i = 58; i <= 63; i++) {
    entityFollowTwo.push(i);
}
//player three
let entityFollowThree = [];
for(let i = 27; i <= 51; i++) {
    entityFollowThree.push(i);
}
for(let i = 0; i <= 25; i++) {
    entityFollowThree.push(i);
}
for(let i = 64; i <= 69; i++) {
    entityFollowThree.push(i);
}
//player four
let entityFollowFour = [];
for(let i = 40; i <= 51; i++) {
    entityFollowFour.push(i);
}
for(let i = 0; i <= 38; i++) {
    entityFollowFour.push(i);
}
for(let i = 70; i <= 75; i++) {
    entityFollowFour.push(i);
}

console.table(entityFollowOne);
console.table(entityFollowTwo);
console.table(entityFollowThree);
console.table(entityFollowFour);
//animation placemet===================================================
//player entity positon 
let entityActualPosition = 
                        [[274, 69], 
                        //0
                        [274, 106], [274, 143],
                        [274, 179], [274, 216], [274, 252],
                        [237, 288], [201, 288], [168, 288],
                        [128, 288], [92, 288], 
                        //10
                        [55, 288],
                        [55, 325], [55, 361], [92, 361],
                        [128, 361], [164, 361], [200, 361],
                        [237, 361], [274, 398], [274, 435],
                        //20
                        [274, 471], [274, 508], [274, 543], 
                        [274, 580], [310, 580], [347, 580],
                        [347, 544], [347, 508],
                        [347, 471], 
                        [347, 435], 
                        //30
                        [347, 398],
                        [383, 362], [419, 362], [456, 362],
                        [493, 362], [529, 362], [565, 362],
                        [565, 325], 
                        [565, 289], [529, 289],
                        //40
                        [493, 289], [457, 289], [420, 289],
                        [383, 289], [347, 252], [347, 216], 
                        [347, 180], [347, 143], 
                        [347, 106],
                        [347, 70], 
                        //50
                        [310, 70], [310, 106],
                        [310, 143], [310, 179], [310, 215],
                        [310, 251], [310, 290], [92, 325],
                        [128, 325], [164, 325], 
                        //60
                        [200, 325],
                        [236, 325], [276, 325], [310, 544],
                        [310, 508], [310, 471], [310, 435],
                        [310, 399], 
                        [310, 360], [529, 326],
                        //70
                        [492, 326], [456, 326], [420, 326],
                        [383, 326], [345, 326]];

//=====================================================================

//what is the number of players
let numberOfPlayers = 0;

//which actionListner is on
let playerAviable = [false, false, false, false];

//flag if we find 6
let playerFindSix = [false, false, false, false];

//what is the output each player perviose draw
let playersDot = [0, 0, 0, 0];

//the current position of entity
let playerPostion = [[-1, -1, -1, -1], 
                    [-2, -2, -2, -2],
                    [-3, -3, -3, -3],
                    [-4, -4, -4, -4]];
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
        //we will use it for later ================================
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
        //=========================================================
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
    box.style.animation =  `animationBox${boxNumber-1} 1.7s infinite`;
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

//entity background animation
function entityAnimation(player, entityNumber, animate) {
    const entity = document.querySelector(`#entity${player}${entityNumber}`);
    if(animate) { 
        entity.style.animation =  `entity_animation 1s infinite`;
    }
    else {
        entity.style.animation =  ``;
    }
}

//action Listener for entity of given player
function entityAction(player, Dot) {
    for(let i=0; i < 4; i++) {
        if (entityAviable[player - 1][i] == true) {
            keepGoing = false;
            document.querySelector(`#entity${player}${i}`).addEventListener('click', function test() {
                if(entityAviable[player-1][i] == true) {
                    keepGoing = true;
                    entityMove(player, i, playersDot[player -1]);
                    

                    //make animation stop
                    entityAnimation(player, 0, false);
                    entityAnimation(player, 1, false);
                    entityAnimation(player, 2, false);
                    entityAnimation(player, 3, false);

                    //make the aviablity false 
                    entityAviable[player - 1][0] = false;
                    entityAviable[player - 1][1] = false;
                    entityAviable[player - 1][2] = false;
                    entityAviable[player - 1][3] = false;

                    //if the dots are 6 then repeat one more time
                    if(playersDot[player-1] == 6) {
                        animateBox(player);
                        console.log("animated again");
                        document.querySelector(`#rotationBox${player-1}`).addEventListener('click', ()=> {
                            makeGameGoing(player);
                        }, {once: true});
                    }

                    //making the game going to next iteration
                    if (playersDot[player -1] != 6 && keepGoing) {
                        if (player == 1) {
                            animateBox(2);
                        }
                        //player two checker
                        else if (player == 2 && numberOfPlayers == 2) {
                            animateBox(1);
                        }
                        else if (player == 2) {
                            animateBox(3)
                        }
                        //player there checker
                        else if (player == 3 && numberOfPlayers  == 3) {
                            animateBox(1);
                        }
                        else if (player == 3) {
                            animateBox(4);
                        }
                        else  {
                            animateBox(1);
                        }
                    }
                    //stoping action listner
                    playerAviable[player - 1] = false;
                }
            });
        }
    }
    //stoping from action listner
    playerAviable[player - 1] = false;

    //enabling the next element actionlistner
    if (playersDot[player -1] != 6 && keepGoing) {
        if (player == 1) {
            animateBox(2);
        }
        //player two checker
        else if (player == 2 && numberOfPlayers == 2) {
            animateBox(1);
        }
        else if (player == 2) {
            animateBox(3)
        }
        //player there checker
        else if (player == 3 && numberOfPlayers  == 3) {
            animateBox(1);
        }
        else if (player == 3) {
            animateBox(4);
        }
        else  {
            animateBox(1);
        }
    }
    return 0;
}


//Entity mover=========================================================
function entityMove(player, entityNumber, Dot) {
    let position = playerPostion[player-1][entityNumber]
    if (player == 1) {
        if(position == -1) {
            playerPostion[player-1][entityNumber] = 1;
            moveTheEntity(player, entityNumber);
        }
        else {
            let index = entityFollowOne.indexOf(position);
            playerPostion[player-1][entityNumber] = entityFollowOne[index + playersDot[player -1]];
            moveTheEntity(player, entityNumber);
        }
    }
    else if (player == 2) {
        if (position == -2) {
            playerPostion[player-1][entityNumber] = 14;
            moveTheEntity(player, entityNumber);
        }
        else {
            let index = entityFollowTwo.indexOf(position);
            playerPostion[player-1][entityNumber] = entityFollowTwo[index + playersDot[player -1]];
            moveTheEntity(player, entityNumber);
        }
    }
    else if (player == 3) {
        if (position == -3) {
            playerPostion[player-1][entityNumber] = 27;
            moveTheEntity(player, entityNumber);
        }
        //transilating form 51 to 0
        else {
            let index = entityFollowThree.indexOf(position);
            playerPostion[player-1][entityNumber] = entityFollowThree[index + playersDot[player -1]];
            moveTheEntity(player, entityNumber);
        }
    }
    else {
        if (position == -4) {
            playerPostion[player-1][entityNumber] = 40;
            moveTheEntity(player, entityNumber);
        }        
        //transilating form 51 to 0
        else {
            let index = entityFollowFour.indexOf(position);
            playerPostion[player-1][entityNumber] = entityFollowFour[index + playersDot[player -1]];
            moveTheEntity(player, entityNumber);
        }
    }

    //making the same position entity positon them selves ==========================================================
    //the end position
    let positionEnd = playerPostion[player - 1][entityNumber];
    //allowing at particular positions
    if ((positionEnd == 48 
        || positionEnd == 9 
        || positionEnd == 22 
        || positionEnd == 35 
        || positionEnd == 57 
        || positionEnd == 63 
        || positionEnd == 75 
        || positionEnd == 69 
        || positionEnd == 40 
        || positionEnd == 1 
        || positionEnd == 14 
        || positionEnd == 27)) {
        let entitySimilar = [];
        for(let i = 0; i < 4; i++) {
            for(let j = 0; j < 4; j++) {
                if (positionEnd == playerPostion[i][j] && !((player -1) == i && entityNumber == j)){
                    entitySimilar.push([i, j]);
                }
            }
        }
        entityAligner(entitySimilar, player, entityNumber);
    }
    //return the entity at that position before
    else {
        let entitySimilar = [];
        for(let i = 0; i < 4; i++) {
            for(let j = 0; j < 4; j++) {
                if (positionEnd == playerPostion[i][j] && !((player -1) == i && entityNumber == j)){
                    entitySimilar.push([i, j]);
                }
            }
        }

        if (entitySimilar.length != 0) {
            entityReturner(entitySimilar);
        }
    }


}

//which entity should move form particular player=======================
function entityChecker(player) {
    for(let i = 0; i < 4;i++) {
        if (player == 1) {
            if(playerPostion[player-1][i] <= 51 && playerPostion[player -1][i] >= 1) {
                entityAviable[player-1][i] = true;
                entityAnimation(player, i, true);
            }
            else if (playerPostion[player-1][i] == -1 && playersDot[player-1] == 6) {
                entityAviable[player-1][i] = true;
                entityAnimation(player, i, true);           
            }
            else if (playerPostion[player-1][i] > 51 && (57-playerPostion[player-1][i]) >= playersDot[player - 1]) {
                entityAviable[player-1][i] = true;
                entityAnimation(player, i, true);
            }
        }
        else if (player == 2) {
            if(playerPostion[player-1][i] <= 51 && playerPostion[player -1][i] >= 14) {
                entityAviable[player-1][i] = true;
                entityAnimation(player, i, true);
            }
            else if (playerPostion[player-1][i] == -2 && playersDot[player-1] == 6) {
                entityAviable[player-1][i] = true;
                entityAnimation(player, i, true);           
            }
            else if (playerPostion[player-1][i] >= 0 && playerPostion[player-1][i] <= 12) {
                entityAviable[player-1][i] = true;
                entityAnimation(player, i, true);
            }
            else if (playerPostion[player-1][i] >= 58 && (63- playerPostion[player-1][i]) >= playersDot[player - 1]) {
                entityAviable[player-1][i] = true;
                entityAnimation(player, i, true);
            }
        }
        else if (player == 3) {
            if(playerPostion[player-1][i] <= 51 && playerPostion[player -1][i] >= 27) {
                entityAviable[player-1][i] = true;
                entityAnimation(player, i, true);
            }
            //at the starting of player 3
            else if (playerPostion[player-1][i] == -3 && playersDot[player-1] == 6) {
                entityAviable[player-1][i] = true;
                entityAnimation(player, i, true);           
            }
            else if (playerPostion[player-1][i] >= 0 && playerPostion[player-1][i] <= 25) {
                entityAviable[player-1][i] = true;
                entityAnimation(player, i, true);
            }
            else if (playerPostion[player-1][i] >= 64 && (69- playerPostion[player-1][i]) >= playersDot[player - 1]) {
                entityAviable[player-1][i] = true;
                entityAnimation(player, i, true);
            }
        }
        if (player == 4) {
            if(playerPostion[player-1][i] <= 51 && playerPostion[player -1][i] >= 40) {
                entityAviable[player-1][i] = true;
                entityAnimation(player, i, true);
            }
            else if (playerPostion[player-1][i] == -4 && playersDot[player-1] == 6) {
                entityAviable[player-1][i] = true;
                entityAnimation(player, i, true);           
            }
            else if (playerPostion[player-1][i] >= 0 && playerPostion[player-1][i] <= 38) {
                entityAviable[player-1][i] = true;
                entityAnimation(player, i, true);
            }
            else if (playerPostion[player-1][i] >= 70 && (75- playerPostion[player-1][i]) >= playersDot[player - 1]) {
                entityAviable[player-1][i] = true;
                entityAnimation(player, i, true);
            }
        }
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
            makeGameGoing(2);
        }
    });
    if (numberOfPlayers >= 3) {
        document.querySelector("#rotationBox2").addEventListener("click", ()=> {
            if (playerAviable[2] == true) {
                makeGameGoing(3);
            }
        });
    }
    if (numberOfPlayers == 4) {
        document.querySelector("#rotationBox3").addEventListener("click", ()=> {
            if (playerAviable[3] == true) {
                makeGameGoing(4);
            }
        });
    }
}

//main function that runs the game
function makeGameGoing(player) {
    document.querySelector("#rotationBox" + (player-1) + " .dice").remove();
    playersDot[player-1] = randomFunction(6); //drawing random number
    makeDice(player-1, playersDot[player-1]);
    stopAnimateBox(document.querySelector("#rotationBox" + (player-1) +""));

    //game Logic goes here
    entityChecker(player);
    entityAction(player, playersDot[player-1]);
}

//entity mover that moves the entiy to x and y
function moveTheEntity(player, entityNumber) {
    document.querySelector(`#entity${player}${entityNumber}`).style.top = `${entityActualPosition[playerPostion[player -1][entityNumber]][0]}px`;
    document.querySelector(`#entity${player}${entityNumber}`).style.left = `${entityActualPosition[playerPostion[player -1][entityNumber]][1]}px`;
}

//align the entity that are at the same position
function entityAligner(array, player, entityNumber) {
    //saving the positon left and top
    let positionTop = entityActualPosition[playerPostion[player -1][entityNumber]][0];
    let positionLeft = entityActualPosition[playerPostion[player -1][entityNumber]][1];

    //choosing which type of alignment fits based on number of entity in similar position
    if (array.length == 1) {
        //the one on the array
        document.querySelector(`#entity${array[0][0] + 1}${array[0][1]}`).style.top = `${positionTop + 7}px`;
        document.querySelector(`#entity${array[0][0] + 1}${array[0][1]}`).style.scale = `0.5`;

        //the moved player it self
        document.querySelector(`#entity${player}${entityNumber}`).style.top = `${positionTop - 7}px`;
        document.querySelector(`#entity${player}${entityNumber}`).style.scale = `0.5`;
    }
    else if (array.length == 2) {
        //the one on the array
        document.querySelector(`#entity${array[0][0] + 1}${array[0][1]}`).style.top = `${positionTop + 11}px`;
        document.querySelector(`#entity${array[0][0] + 1}${array[0][1]}`).style.scale = `0.4`;

        //the thrid on the array
        document.querySelector(`#entity${array[1][0] + 1}${array[1][1]}`).style.top = `${positionTop + 1}px`;
        document.querySelector(`#entity${array[1][0] + 1}${array[1][1]}`).style.scale = `0.4`;

        //the moved player it self
        document.querySelector(`#entity${player}${entityNumber}`).style.top = `${positionTop - 11}px`;
        document.querySelector(`#entity${player}${entityNumber}`).style.scale = `0.4`;
    }
    else if (array.length == 3) {
        //the one on the array
        document.querySelector(`#entity${array[0][0] + 1}${array[0][1]}`).style.top = `${positionTop + 11}px`;
        document.querySelector(`#entity${array[0][0] + 1}${array[0][1]}`).style.scale = `0.4`;

        //the second on the array
        document.querySelector(`#entity${array[1][0] + 1}${array[1][1]}`).style.top = `${positionTop + 1}px`;
        document.querySelector(`#entity${array[1][0] + 1}${array[1][1]}`).style.scale = `0.4`;

        //the third on the array
        document.querySelector(`#entity${array[2][0] + 1}${array[2][1]}`).style.top = `${positionTop + 1}px`;
        document.querySelector(`#entity${array[2][0] + 1}${array[2][1]}`).style.scale = `0.4`;

        //the moved player it self
        document.querySelector(`#entity${player}${entityNumber}`).style.top = `${positionTop - 11}px`;
        document.querySelector(`#entity${player}${entityNumber}`).style.scale = `0.4`;
    }
}

//return the entity
function entityReturner(array) {
    let entity = document.querySelector(`#entity${array[0][0]+1}${array[0][1]}`);
    if (array[0][0] == 0) {
        if (array[0][1] == 0) {
            entity.style.top = `${109}px`;
            entity.style.left =  `${124}px`;
        }
        else if (array[0][1] == 3) {
            entity.style.top = `${109 + 73}px`;
            entity.style.left =  `${124 + 73}px`;
        }
        else {
            entity.style.top = `${109 + ((i-1)%2)*73}px`;
            entity.style.left =  `${124 + (i%2)*73}px`;
        }
        playerPostion[array[0][0]][array[0][1]] = -1;
    }
    else if(array[0][0] == 1) {
        if (array[0][1] == 0) {
            entity.style.top = `${109}px`;
            entity.style.left =  `${453}px`;
        }
        else if (array[0][1] == 3) {
            entity.style.top = `${109 + 73}px`;
            entity.style.left =  `${453 + 73}px`;
        }
        else  {
            entity.style.top = `${109 + ((i-1)%2)*73}px`;
            entity.style.left =  `${453 + (i%2)*73}px`;
        }
        playerPostion[array[0][0]][array[0][1]] = -2;
    }
    else if(array[0][0] == 2) {
        if (array[0][1] == 0) {
            entity.style.top = `${438}px`;
            entity.style.left = `${453}px`;
        }
        else if (array[0][1] == 3) {
            entity.style.top = `${438 + 73}px`;
            entity.style.left = `${453 +73}px`;
        }
        else {
            entity.style.top = `${438 + ((i-1)%2)*73}px`;
            entity.style.left =  `${453 + (i%2)*73}px`;
        }
        playerPostion[array[0][0]][array[0][1]] = -3;
    }
    else if(array[0][0] == 3) {
        if (array[0][1] == 0) {
            entity.style.top = `${438}px`;
            entity.style.left =  `${124}px`;
        }
        else if (array[0][1] == 3) {
            entity.style.top = `${438 + 73}px`;
            entity.style.left =  `${124 + 73}px`;
        }
        else {
            entity.style.top = `${438 + ((i-1)%2)*73}px`;
            entity.style.left =  `${124 + (i%2)*73}px`;
        }
        playerPostion[array[0][0]][array[0][1]] = -4;
    }
}