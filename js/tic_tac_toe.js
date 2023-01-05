'use strict';

let gameParameters = {playerTurn: 'X', numberOfMoves:0, gameOver:false}
const gameBoard = [[null,null,null],[null,null,null],[null,null,null]];

// function uses global variable for gameboard. maybe update this later
function updateGameBoard(cell, shape) {
    if (cell === 'top_left') {
        gameBoard[0][0] = shape
    } else if (cell === 'top_middle') {
        gameBoard[0][1] = shape
    } else if (cell === 'top_right') {
        gameBoard[0][2] = shape

    } else if (cell === 'middle_left') {
        gameBoard[1][0] = shape
    } else if (cell === 'middle_middle') {
        gameBoard[1][1] = shape
    } else if (cell === 'middle_right') {
        gameBoard[1][2] = shape

    } else if (cell === 'bottom_left') {
        gameBoard[2][0] = shape
    } else if (cell === 'bottom_middle') {
        gameBoard[2][1] = shape
    } else if (cell === 'bottom_right') {
        gameBoard[2][2] = shape
    }
}


// function ends the game
function endGame () {
    gameParameters.gameOver = true;
}

// this function uses global variable. should probably change it
function checkWinCondition (parameters) {
    // 3 across
    
    for (let row of gameBoard) {
        if (row.every(square => square === 'X')) {
            window.alert('X player has won!');
            endGame();
            break;
        }
        else if (row.every(square => square === 'O')) {
            window.alert('O player has won!');
            endGame();
            break;
        }
    }

    // 3 down

    for (let i = 0; i < 3; i++) {
        const temp_arr = [];
        for (let row of gameBoard) {
            temp_arr.push(row[i])
        }
    
        if (temp_arr.every(square => square === 'X')) {
            window.alert('X player has won!');
                endGame();
                break;
        }
        else if (temp_arr.every(square => square === 'O')) {
            window.alert('O player has won!');
            endGame();
            break;
        }
    }

    // 2 diagonals
    // it's fine to hardcode these for now but a dynamic solution would be interesting
    if (gameBoard[0][0]==='X' && gameBoard[1][1]==='X' && gameBoard[2][2]==='X') {
        window.alert('X player has won!');
        endGame();
    }
    if (gameBoard[0][0]==='O' && gameBoard[1][1]==='O' && gameBoard[2][2]==='O') {
        window.alert('O player has won!');
        endGame();
    }
    if (gameBoard[0][2]==='X' && gameBoard[1][1]==='X' && gameBoard[2][0]==='X') {
        window.alert('X player has won!');
        endGame();
    }
    if (gameBoard[0][2]==='O' && gameBoard[1][1]==='O' && gameBoard[2][0]==='O') {
        window.alert('O player has won!');
        endGame();
    }

    // draw
    if (parameters.numberOfMoves === 9 && !gameParameters.gameOver) {
        window.alert('Game has ended in a draw! Please play again.')
        endGame();
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
    updateGameBoard(element.id, 'X');
}

function addO (element) {
    const newO = document.createElement('img');
    newO.src = '../images/circle.png';
    element.appendChild(newO);
    updateGameBoard(element.id, 'O');
}


/**
 * Validates whether the chosen square is available as a valid move for the 
 * player.
 * Returns a boolean based on validity, and alerts user if the move is not valid.
 * 
 * @param   {HTMLElement}   element     element represents a square selected by the player
 * @returns {boolean}                   boolean indicating whether the move is valid
 */
function locationValidator(element) {
    if (element.firstElementChild === null) {
        return true;
    }
    else {
        window.alert('Location is occupied! Choose another location.');
        return false;
    }
}


/**
 * Add a marker to the game board where the player has chosen to make a move.
 * Updates the DOM to show the gameboard to the player.
 * Calls additional functions to validate the move and place the correct player's piece.
 * 
 * @param {HTMLElement} element         html element representing a tile on the board
 * @param {object} gameParameters       parameters tracking gamestate
 */
function addMarker (element, gameParameters) {
    if (gameParameters.gameOver) {
        window.alert('Game is over. Please play again.');
        return;
    }
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


/**
 * Restarts the game by refreshing the page.
 * If cookies are added to maintain game state, this will need to be updated as well.
 */
function restartGame () {
    window.alert('Restarting game!')
    location.reload();
}


