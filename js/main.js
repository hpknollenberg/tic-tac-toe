let oneX = false;
let twoX = false;
let threeX = false;
let fourX = false;
let fiveX = false;
let sixX = false;
let sevenX = false;
let eightX = false;
let nineX = false;

let oneO = false;
let twoO = false;
let threeO = false;
let fourO = false;
let fiveO = false;
let sixO = false;
let sevenO = false;
let eightO = false;
let nineO = false;


let turnX = true;
let winX = false;
let winO = false;
let draw = false;
let gameOver = false;


let nameX = "";
let nameO = "";


document.getElementById("x-player").addEventListener("input", (e) => {
    nameX = e.target.value;
    if (gameOver !== true) {
        displayNameX();
    }
})

document.getElementById("o-player").addEventListener("input", (e) => {
    nameO = e.target.value;
})



document.getElementById("buttonOne").addEventListener("click", () => {//When button is clicked...
    if (turnX === true) { //If X's turn
        if (oneX === false && oneO === false) { //If button hasn't been clicked
            oneX = display(oneX, "buttonOne"); //Run display function
            checkX(); //Check for a game over
        }
    } else { //If O's turn
        if (oneX === false && oneO === false) { //If button hasn't been clicked
            oneO = display(oneO, "buttonOne"); //Run display function
            checkO(); //Check for a game over
        }
    }  
})

document.getElementById("buttonTwo").addEventListener("click", () => {//When button is clicked...
    if (turnX === true) {
        if (twoX === false && twoO === false) {
            twoX = display(twoX, "buttonTwo");
            checkX();
        }
    } else {
        if (twoX === false && twoO === false) {
            twoO = display(twoO, "buttonTwo");
            checkO();
        }
    }  
})

document.getElementById("buttonThree").addEventListener("click", () => {//When button is clicked...
    if (turnX === true) {
        if (threeX === false && threeO === false) {
            threeX = display(threeX, "buttonThree");
            checkX();
        }
    } else {
        if (threeX === false && threeO === false) {
            threeO = display(threeO, "buttonThree");
            checkO();
        }
    }  
})

document.getElementById("buttonFour").addEventListener("click", () => {//When button is clicked...
    if (turnX === true) {
        if (fourX === false && fourO === false) {
            fourX = display(fourX, "buttonFour");
            checkX();
        }
    } else {
        if (fourX === false && fourO === false) {
            fourO = display(fourO, "buttonFour");
            checkO();
        }
    }  
})

document.getElementById("buttonFive").addEventListener("click", () => {//When button is clicked...
    if (turnX === true) {
        if (fiveX === false && fiveO === false) {
            fiveX = display(fiveX, "buttonFive");
            checkX();
        }
    } else {
        if (fiveX === false && fiveO === false) {
            fiveO = display(fiveO, "buttonFive");
            checkO();
        }
    }  
})

document.getElementById("buttonSix").addEventListener("click", () => {//When button is clicked...
    if (turnX === true) {
        if (sixX === false && sixO === false) {
            sixX = display(sixX, "buttonSix");
            checkX();
        }
    } else {
        if (sixX === false && sixO === false) {
            sixO = display(sixO, "buttonSix");
            checkO();
        }
    }  
})

document.getElementById("buttonSeven").addEventListener("click", () => {//When button is clicked...
    if (turnX === true) {
        if (sevenX === false && sevenO === false) {
            sevenX = display(sevenX, "buttonSeven");
            checkX();
        }
    } else {
        if (sevenX === false && sevenO === false) {
            sevenO = display(sevenO, "buttonSeven");
            checkO();
        }
    }  
})

document.getElementById("buttonEight").addEventListener("click", () => {//When button is clicked...
    if (turnX === true) {
        if (eightX === false && eightO === false) {
            eightX = display(eightX, "buttonEight");
            checkX();
        }
    } else {
        if (eightX === false && eightO === false) {
            eightO = display(eightO, "buttonEight");
            checkO();
        }
    }  
})

document.getElementById("buttonNine").addEventListener("click", () => {//When button is clicked...
    if (turnX === true) {
        if (nineX === false && nineO === false) {
            nineX = display(nineX, "buttonNine");
            checkX();
        }
    } else {
        if (nineX === false && nineO === false) {
            nineO = display(nineO, "buttonNine");
            checkO();
        }
    }      
})



function display(button, id) {
    if (gameOver !== true) { //If game is not over
        if (turnX === true) { //If X's turn
            document.getElementById(`${id}`).innerHTML = "X";//display X
            turnX = false; //Change turn
            displayNameO(); //Run displayNameO function
            return true; //Change X button to true (Or "as clicked")
        } else { //If O's turn
            document.getElementById(`${id}`).innerHTML = "O";//display O
            turnX = true; //Change turn
            displayNameX(); //Run displayNameF function
            return true; //Change O button to true (Or "as clicked")
        }   
    } 
}


function displayNameO() {
    if (nameO !== "") { //If input is not blank
        document.getElementById("message").innerHTML = `${nameO}'s Turn (O)` //Display Name's Turn (O)
    } else { //If input is blank
        document.getElementById("message").innerHTML = "O's Turn"; //Display O's Turn
    }
}

function displayNameX() {
    if (nameX !== "") {
        document.getElementById("message").innerHTML = `${nameX}'s Turn (X)`
    } else {
        document.getElementById("message").innerHTML = "X's Turn";
    }
}


function checkX() { //Check function
    let winXOne = (oneX && twoX && threeX); //Set variables for possible win conditions
    let winXTwo = (fourX && fiveX && sixX);
    let winXThree = (sevenX && eightX && nineX);
    let winXFour = (oneX && fourX && sevenX);
    let winXFive = (twoX && fiveX && eightX);
    let winXSix = (threeX && sixX && nineX);
    let winXSeven = (oneX && fiveX && nineX);
    let winXEight = (threeX && fiveX && sevenX);
    
    if (winXOne === true || //Check if any of the win conditions are true
        winXTwo === true ||
        winXThree === true ||
        winXFour === true ||
        winXFive === true ||
        winXSix === true ||
        winXSeven === true ||
        winXEight === true) {
        winX = true;
    }
    if (winX === true) { //If a win condition is true
        if (nameX !== "") { //If entered name
            document.getElementById("message").innerHTML = `${nameX.toUpperCase()} WINS` //Display NAME WINS
        } else { //If no name
            document.getElementById("message").innerHTML = "X WINS"; //Display X WINS
        }
        gameOver = true; //Set gameOver to true
    } else { //If a win condition is not true
        checkDraw(); //run check draw function
    }
} 

function checkO() {
    let winOOne = (oneO && twoO && threeO);
    let winOTwo = (fourO && fiveO && sixO);
    let winOThree = (sevenO && eightO && nineO);
    let winOFour = (oneO && fourO && sevenO);
    let winOFive = (twoO && fiveO && eightO);
    let winOSix = (threeO && sixO && nineO);
    let winOSeven = (oneO && fiveO && nineO);
    let winOEight = (threeO && fiveO && sevenO);
    
    if (winOOne ||
        winOTwo ||
        winOThree ||
        winOFour ||
        winOFive ||
        winOSix ||
        winOSeven ||
        winOEight) {
        winO = true;
    }

    if (winO === true) {
        if (nameO !== "") {
            document.getElementById("message").innerHTML = `${nameO.toUpperCase()} WINS`
        } else {
            document.getElementById("message").innerHTML = "O WINS";
        }
        gameOver = true;
    } else { 
        checkDraw();
    }
}


function checkDraw() {
    if ((oneX || oneO) && //If every button has been clicked
        (twoX || twoO) &&
        (threeX || threeO) &&
        (fourX || fourO) &&
        (fiveX || fiveO) &&
        (sixX || sixO) &&
        (sevenX || sevenO) &&
        (eightX || eightO) &&
        (nineX || nineO)) {
        draw = true; //set draw to true
    }

    if (draw === true) { //If draw true
        document.getElementById("message").innerHTML = "DRAW"; //Display DRAW
        gameOver = true; //set gameover to true
    }
}


document.getElementById("reset").addEventListener("click", reset); //RESET BUTTON

function reset () {
    oneX = false; //Set all the button boolean values back to false
    twoX = false;
    threeX = false;
    fourX = false;
    fiveX = false;
    sixX = false;
    sevenX = false;
    eightX = false;
    nineX = false;

    oneO = false;
    twoO = false;
    threeO = false;
    fourO = false;
    fiveO = false;
    sixO = false;
    sevenO = false;
    eightO = false;
    nineO = false;


    turnX = true;
    winX = false;
    winO = false;
    draw = false;
    gameOver = false;


    document.getElementById(`buttonOne`).innerHTML = "";//set the button display back to blank
    document.getElementById(`buttonTwo`).innerHTML = "";
    document.getElementById(`buttonThree`).innerHTML = "";
    document.getElementById(`buttonFour`).innerHTML = "";
    document.getElementById(`buttonFive`).innerHTML = "";
    document.getElementById(`buttonSix`).innerHTML = "";
    document.getElementById(`buttonSeven`).innerHTML = "";
    document.getElementById(`buttonEight`).innerHTML = "";
    document.getElementById(`buttonNine`).innerHTML = "";

    displayNameX(); //Display that it is X's turn
}



let styleCounter = 0; 

document.getElementById("style").addEventListener("click", style);

function style() {
    styleCounter++;

    if (styleCounter === 5) { //5 possible styles
        styleCounter = 0; //Go back to beginning
    }

    switch(styleCounter) {
        case 0: 
            document.getElementById("app").style.backgroundColor = "rgba(0, 255, 247, 0.5)";
            document.getElementById("app").style.boxShadow = "10px 10px 10px rgba(255, 105, 180, 0.5)";
            document.getElementById("app").style.borderColor = "rgba(255, 105, 180, 0.5)";
            document.querySelector('h1').style.textShadow = "2.5px 2.5px rgba(255, 105, 180, 0.5)";
            document.querySelector('#message').style.textShadow = "2.5px 2.5px rgba(255, 105, 180, 0.5)";
            document.querySelector('#reset').style.textShadow = "1px 1px rgba(255, 105, 180, 0.5)";
            document.querySelector('#style').style.textShadow = "1px 1px rgba(255, 105, 180, 0.5)";
            document.getElementById("app").style.backgroundImage = "none";
            break;
        case 1:
            document.getElementById("app").style.backgroundColor = "rgba(255, 105, 180, 0.5)";
            document.getElementById("app").style.boxShadow = "10px 10px 10px rgba(0, 255, 247, 0.5)";
            document.getElementById("app").style.borderColor = "rgba(0, 255, 247, 0.5)";
            document.querySelector('h1').style.textShadow = "2.5px 2.5px rgba(0, 255, 247, 0.5)";
            document.querySelector('#message').style.textShadow = "2.5px 2.5px rgba(0, 255, 247, 0.5)";
            document.querySelector('#reset').style.textShadow = "1px 1px rgba(0, 255, 247, 0.5)";
            document.querySelector('#style').style.textShadow = "1px 1px rgba(0, 255, 247, 0.5)";
            document.getElementById("app").style.backgroundImage = "none";
            break;
        case 2:
            document.getElementById("app").style.backgroundColor = "white";
            document.getElementById("app").style.boxShadow = "none";
            document.getElementById("app").style.borderColor = "black";
            document.querySelector('h1').style.textShadow = "none";
            document.querySelector('#message').style.textShadow = "none";
            document.querySelector('#reset').style.textShadow = "none";
            document.querySelector('#style').style.textShadow = "none";
            document.getElementById("app").style.backgroundImage = "none";
            break;
        case 3:
            document.getElementById("app").style.backgroundColor = "black";
            document.getElementById("app").style.boxShadow = "10px 10px 10px grey";
            document.getElementById("app").style.borderColor = "grey";
            document.querySelector('h1').style.textShadow = "2.5px 2.5px grey";
            document.querySelector('#message').style.textShadow = "2.5px 2.5px grey";
            document.querySelector('#reset').style.textShadow = "1px 1px grey";
            document.querySelector('#style').style.textShadow = "1px 1px grey";
            document.getElementById("app").style.backgroundImage = "none";
            break;
        case 4:
            document.getElementById("app").style.backgroundImage = "linear-gradient(#e66465, #9198e5)";
            document.getElementById("app").style.boxShadow = "10px 10px 10px rgba(255, 255, 60, 0.5)";
            document.getElementById("app").style.borderColor = "rgba(255, 255, 60, 0.5)";
            document.querySelector('h1').style.textShadow = "2.5px 2.5px rgba(250, 250, 250, 0.5)";
            document.querySelector('#message').style.textShadow = "2.5px 2.5px rgba(250, 250, 250, 0.5)";
            document.querySelector('#reset').style.textShadow = "1px 1px rgba(250, 250, 250, 0.5)";
            document.querySelector('#style').style.textShadow = "1px 1px rgba(250, 250, 250, 0.5)";
    }
}