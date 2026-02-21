//creating an element
const gameName = document.createElement("gameName");
const gameMenu = document.createElement("gameMenu");
//making the game Name
document.body.append(gameName);
gameName.innerHTML = `<div id="m_game_name">Lodo Game</div>`;
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


document.querySelector("#one").addEventListener("click", ()=> {
    goGame(2);
});
document.querySelector("#two").addEventListener("click", ()=> {
    goGame(3);
});
document.querySelector("#three").addEventListener("click", ()=> {
    goGame(4);
});

//when menu cliked this function will work
function goGame(numberOfPlayers) {
    const gameBox = document.createElement("gameBox");
 
    //removing tha menu
    gameMenu.remove();
    gameName.remove();
    document.body.classList.remove("main_page");
    document.body.classList.add("game_page")

    document.body.append(gameBox);
    gameBox.innerHTML = 
        `<div id="gameBox">
            ${rotationBox(numberOfPlayers)}
        </div>`;
}

//making rotation box
function rotationBox(numberOfBox) {
    let box = ""
    for(let i = 0; i < numberOfBox; i++) {
        box += 
            `<div id="rotationBox${i}">
                ${makeDice(6)}
            </div>`
        ;
    }
    return box;
}

//making dice and dotes
function makeDice(numberOfDot) {
    let dots = "";
    for(let i = 0; i < numberOfDot; i++) {
        dots += `<div class="dot"></div>`;
    }

    return `<div class="dice">${dots}</div>`;
}