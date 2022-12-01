'use strict';

let playerTurn = ['X'];
let numberOfMoves = 0;
const gameBoard = [[null,null,null],[null,null,null],[null,null,null]];

        
// function checkWinCondition (gameboard) {
//     // 3 across
//     for (let row in gameBoard) {
//         for (let square in row) {
//             if square === 
//         }
//     }

//     // 3 down

//     // 2 diagonals
// }

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


function addMarker (element, turnIndicator) {
    if (locationValidator(element)) {
        if (turnIndicator[0] === 'X') {
            addX(element);
            turnIndicator[0] = 'O';
            document.getElementById('player_indicator').innerHTML = "Player's Turn: O";
            numberOfMoves ++;
        }
        else {
            addO(element);
            turnIndicator[0] = 'X';
            document.getElementById('player_indicator').innerHTML = "Player's Turn: X";
            numberOfMoves ++;
        }
    }
}