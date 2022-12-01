'use strict';


let gameParameters = {playerTurn: 'X', numberOfMoves:0}
const gameBoard = [[null,null,null],[null,null,null],[null,null,null]];


// this function uses global variable. should probably change it
function checkWinCondition (parameters) {
    // 3 across
    // for (let row in gameBoard) {
    //     for (let square in row) {
    //         if square === 
    //     }
    // }

    // 3 down

    // 2 diagonals

    // draw
    if (parameters.numberOfMoves === 9) {
        window.alert('Game has ended in a draw! Please play again.')
    }
}

window.onload = () => {
    const restartButton = document.getElementById('restart_button');
    restartButton.addEventListener('click', restartGame);
}

function addX (element) {
    const newX = document.createElement('img');
    newX.src = '../images/x.png';
    element.appendChild(newX);
}

function addO (element) {
    const newO = document.createElement('img');
    newO.src = '../images/circle.png';
    element.appendChild(newO);
}

function locationValidator(element) {
    if (element.firstElementChild === null) {
        return true;
    }
    else {
        window.alert('Location is occupied! Choose another location.');
        return false;
    }
}

// function updateGameBoard (gameBoard, targetSquare) {

// }


function addMarker (element, gameParameters) {
    if (locationValidator(element)) {
        if (gameParameters.playerTurn === 'X') {
            addX(element);
            gameParameters.playerTurn = 'O';
            document.getElementById('player_indicator').innerHTML = "Player's Turn: O";
            gameParameters.numberOfMoves ++;
        }
        else {
            addO(element);
            gameParameters.playerTurn = 'X';
            document.getElementById('player_indicator').innerHTML = "Player's Turn: X";
            gameParameters.numberOfMoves ++;
        }
    // fix this so that the alert comes after the DOM is updated
    checkWinCondition(gameParameters);
    }
    
}

function restartGame () {
    window.alert('Restarting game!')
    location.reload();
}


