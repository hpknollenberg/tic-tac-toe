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
    displayNameX();
})

document.getElementById("o-player").addEventListener("input", (e) => {
    nameO = e.target.value;
})



document.getElementById("buttonOne").addEventListener("click", () => {//When button is clicked...
    if (turnX === true) {
        if (oneX === false && oneO === false) {
            oneX = display(oneX, "buttonOne");
            checkX();
        }
    } else {
        if (oneX === false && oneO === false) {
            oneO = display(oneO, "buttonOne");
            checkO();
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
    if (gameOver !== true) {
        if (turnX === true) { //X
            document.getElementById(`${id}`).innerHTML = "X";//display X
            turnX = false;
            displayNameO();
            return true;
        } else {
            document.getElementById(`${id}`).innerHTML = "O";//display X
            turnX = true;
            displayNameX();
            return true;
        }   
    } 
}


function displayNameO() {
    if (nameO !== "") {
        document.getElementById("message").innerHTML = `${nameO}'s Turn (O)`
    } else {
        document.getElementById("message").innerHTML = "O's Turn";
    }
}

function displayNameX() {
    if (nameX !== "") {
        document.getElementById("message").innerHTML = `${nameX}'s Turn (X)`
    } else {
        document.getElementById("message").innerHTML = "X's Turn";
    }
}


function checkX() {
    let winXOne = (oneX && twoX && threeX);
    let winXTwo = (fourX && fiveX && sixX);
    let winXThree = (sevenX && eightX && nineX);
    let winXFour = (oneX && fourX && sevenX);
    let winXFive = (twoX && fiveX && eightX);
    let winXSix = (threeX && sixX && nineX);
    let winXSeven = (oneX && fiveX && nineX);
    let winXEight = (threeX && fiveX && sevenX);
    
    if (winXOne === true ||
        winXTwo === true ||
        winXThree === true ||
        winXFour === true ||
        winXFive === true ||
        winXSix === true ||
        winXSeven === true ||
        winXEight === true) {
        winX = true;
    }
    if (winX === true) {
        if (nameX !== "") {
            document.getElementById("message").innerHTML = `${nameX.toUpperCase()} WINS`
        } else {
            document.getElementById("message").innerHTML = "X WINS";
        }
        gameOver = true;
    } else {
        checkDraw();
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
    if ((oneX || oneO) &&
        (twoX || twoO) &&
        (threeX || threeO) &&
        (fourX || fourO) &&
        (fiveX || fiveO) &&
        (sixX || sixO) &&
        (sevenX || sevenO) &&
        (eightX || eightO) &&
        (nineX || nineO)) {
        draw = true;
    }

    if (draw === true) {
        document.getElementById("message").innerHTML = "DRAW";
        gameOver = true;
    }
}


document.getElementById("reset").addEventListener("click", reset);

function reset () {
    oneX = false;
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


    document.getElementById(`buttonOne`).innerHTML = "";//display X
    document.getElementById(`buttonTwo`).innerHTML = "";//display X
    document.getElementById(`buttonThree`).innerHTML = "";//display X
    document.getElementById(`buttonFour`).innerHTML = "";//display X
    document.getElementById(`buttonFive`).innerHTML = "";//display X
    document.getElementById(`buttonSix`).innerHTML = "";//display X
    document.getElementById(`buttonSeven`).innerHTML = "";//display X
    document.getElementById(`buttonEight`).innerHTML = "";//display X
    document.getElementById(`buttonNine`).innerHTML = "";//display X

    displayNameX();
}
