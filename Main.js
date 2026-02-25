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
    makeEntity(1)
    gameRunner(2);
});
document.querySelector("#two").addEventListener("click", ()=> {
    goGame(3);
    gameRunner(3);
});
document.querySelector("#three").addEventListener("click", ()=> {
    goGame(4);
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
    }
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
        document.querySelector(`#rotatentityClassionBox${player} .dice dot:nth-child(4)`).style.left = `31px`;
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
            makeDice(0, randomFunction(6));
            stopAnimateBox(document.querySelector("#rotationBox0"));
            playerTwo = true;
            animateBox(2)
        }
    });
    document.querySelector("#rotationBox1").addEventListener("click", ()=> {
        if (playerTwo == true) {
            document.querySelector("#rotationBox1 .dice").remove();
            makeDice(1, randomFunction(6));
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
            document.querySelector("#rotationBox2 .dice").remove();
            makeDice(2, randomFunction(6));
            stopAnimateBox(document.querySelector("#rotationBox2"));
            playerFour = true;
            animateBox(4)
        }
    });
    document.querySelector("#rotationBox3").addEventListener("click", ()=> {
        if (playerFour == true) {
            document.querySelector("#rotationBox3 .dice").remove();
            makeDice(3, randomFunction(6));
            stopAnimateBox(document.querySelector("#rotationBox3"));
            playerOne = true;
            animateBox(1)
        }
    });
}