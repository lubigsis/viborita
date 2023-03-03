//---------------------------------------referencias-----------------------------
const board = document.getElementById('tablero');
const scoreBoard = document.getElementById('puntajeTablero');
const startButton = document.getElementById('inicio-btn');
const gameOverSign = document.getElementById('perdiste');

//--------------------------------------configuración juego----------------------
const boardSize = 10;
const gameSpeed = 100;
const squareTypes = {
    emptySquare: 0,
    snakeSquare: 1,
    foodSquare: 2
};

const directions = {
    ArrowUp: -10,
    ArrowDown: 10,
    ArrowRight: 1,
    ArrowLeft: -1,
};
 //---------------------------------valores variables-----------------------------------
let snake;
let score;
let direction;
let boardSquares;
let emptySquares;
let moveInterval;

//------------------------------------------------------FUNCIONES------------------------------------------
const startGame = () => {
    setGame();
    gameOverSign.style.display = 'none';
    startButton.disabled = true;
    drawSnake();
    updateScore();
    createRandomFood();
    document.addEventListener('keydown', directionEvent);
    moveInterval = setInterval( () => moveSnake(), gameSpeed);  //declarar todas estas funciones
}






//------------------------------------------------------------------------------------------------------------------
startButton.addEventListener('click', startGame); //para iniciar el juego