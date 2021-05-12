console.log("PongRemake Hurray!");

// variables for canvas
var canvas;
var canvasContext;

// defining our ball starting position leftX 
var ballX = 50;

// speed of the ball
var ballSpeedX = 10;

// when the pages loads
window.onload = function() {
    // get the html element with id of map
    canvas = document.getElementById('map');
    // context is for drawing graphics
    canvasContext = canvas.getContext('2d');
    // calling the function for drawing all the elements with interval of 1 seceond
    // divided  by framesPerSecond
    var framesPerSecond = 30;
    setInterval(function() {
        drawAllElements();
        moveEverything();
    }, 1000/framesPerSecond);

}

//function for moving the ball
function moveEverything() {
    ballX = ballX + ballSpeedX;
    // if it exits the canvas width - flip the direction
    if(ballX > canvas.width) {
        ballSpeedX = -ballSpeedX;
    }
    // if it exits the canvas width - flip the direction
    if(ballX < 0) {
        ballSpeedX = -ballSpeedX
    }
}

// function for drawing all the elements
function drawAllElements() {
    
    // 0,0 is for x,y coordinates - top left corner
    // canvas.width, canvas-height - bottom right corner
    colorRect(0,0, canvas.width, canvas.height, 'black');
    colorRect(0, 200, 10 , 80, 'white');
    colorRect(ballX, 100, 10, 10, 'white');
}

// function that simplifies the code
function colorRect(leftX, topY, width, height, drawColor) {
    canvasContext.fillStyle = drawColor;
    canvasContext.fillRect(leftX, topY, width, height);
}