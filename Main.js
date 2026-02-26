//creating an element
const gameName = document.createElement("div");
const gameMenu = document.createElement("div");

//what is the number of players
let numberOfPlayers = 0;

//which actionListner is on
let playerOne = false;
let playerTwo = false;
let playerThree = false;
let playerFour = false;

//what is the output each player perviose draw
let playerOneDot = 0;
let playerTwoDot = 0;
let playerThreeDot = 0;
let playerFourDot = 0;

//the current position of entity
let playerOnePostion = [0, 0, 0, 0];
let playerTwoPosition  = [0, 0, 0, 0];
let playerThreePosition  = [0, 0, 0, 0];
let playerFourPosition = [0, 0, 0, 0];

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
    goGame(2); 
    for (let i = 1; i <=2 ; i++) {
        makeEntity(i);
    }
    gameRunner(2);
});
document.querySelector("#two").addEventListener("click", ()=> {
    goGame(3);
    for (let i = 1; i <=3 ; i++) {
        makeEntity(i);
    }
    gameRunner(3);
});
document.querySelector("#three").addEventListener("click", ()=> {
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

//Random function =================================================
function randomFunction(max) {
    return Math.floor(Math.random() * (max - 1 + 1)) + 1;
}

//Animation ========================================================
//animation for the box
function animateBox(boxNumber) {
    const box = document.querySelector(`#rotationBox${boxNumber-1}`); 
    box.style.animation =  `animationBox${boxNumber-1} 2.5s infinite`;
    if (boxNumber == 1) {
        playerOne = true;
    }
    else if (boxNumber == 2) {
        playerTwo = true;
    }
    else if (boxNumber == 3) {
        playerThree = true;
    }
    else {
        playerFour = true;
    }
    return box;
}

//stop animation for the box
function stopAnimateBox(box) {
    box.style.animation =  ``;
}

//Entity mover
function entityMove(player, entityNumber, position) {

}

//position adder 
function entityPosition(player, enityNumber, offset) {

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
        if (playerOne == true) {
            document.querySelector("#rotationBox0 .dice").remove();
            playerOneDot = randomFunction(6); //drawing random number
            makeDice(0, playerOneDot);
            stopAnimateBox(document.querySelector("#rotationBox0"));
            playerTwo = true;
            entityEventListner(1);
            animateBox(2);
            playerOne = false;
        }
    });
    document.querySelector("#rotationBox1").addEventListener("click", ()=> {
        if (playerTwo == true) {
            playerTwo = false;
            document.querySelector("#rotationBox1 .dice").remove();
            playerTwoDot = randomFunction(6); //drawing random number
            makeDice(1, playerTwoDot);
            stopAnimateBox(document.querySelector("#rotationBox1"));
            if (numberOfPlayers == 2){
                playerOne = true;
                animateBox(1);
            }
            else {
                playerThree = true;
                animateBox(3);
            }
        }
    });
    document.querySelector("#rotationBox2").addEventListener("click", ()=> {
        if (playerThree == true) {
            playerThree = false;
            document.querySelector("#rotationBox2 .dice").remove();
            playerThreeDot = randomFunction(6); //drawing random number
            makeDice(2, playerThreeDot);
            stopAnimateBox(document.querySelector("#rotationBox2"));
            if (numberOfPlayers == 3){
                playerOne = true;
                animateBox(1);
            }
            else {
                playerFour = true;
                animateBox(4);
            }
        }
    });
    document.querySelector("#rotationBox3").addEventListener("click", ()=> {
        if (playerFour == true) {
            playerFour = false;
            document.querySelector("#rotationBox3 .dice").remove();
            playerFourDot = randomFunction(6); //drawing random number
            makeDice(3, playerFourDot);
            stopAnimateBox(document.querySelector("#rotationBox3"));
            playerOne = true;
            animateBox(1)
        }
    });
}

//entity Event Listner
function entityEventListner(player) {
    for(let entity of document.querySelectorAll(`.entityClass${player}`)) {
        entity.addEventListener('click', ()=> {

        });
    }
} 