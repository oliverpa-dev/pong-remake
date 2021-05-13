console.log("PongRemake Hurray!");

// variables for canvas
var canvas;
var canvasContext;

// defining our ball starting position leftX 
var ballX = 50;
var ballY = 50;

// speed of the ball
var ballSpeedX = 10;
var ballSpeedY = 4;

// players paddle
var paddle1Y = 250;
const paddleHeight = 100;

// function that caluclates the position of our mouse 
function calculateMousePosition(evt) {
    // this the area of black rectangle
    var rect = canvas.getBoundingClientRect();
    // this is the html document
    var root = document.documentElement;
    // checks where the rectangle is positioned in the browser
    var mouseX = evt.clientX - rect.left - root.scrollLeft;
    var mouseY = evt.clientY - rect.top - root.scrollTop;
    return {
        x:mouseX,
        y:mouseY
    }
}

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

    // adding event listener for mousemove
    canvas.addEventListener('mousemove', function(evt) {
        var mousePos = calculateMousePosition(evt);
        // assignes the position of the paddle to the
        // position of the mouse
        paddle1Y = mousePos.y - paddleHeight/2;
    })

}

//function for moving the ball
function moveEverything() {
    ballX = ballX + ballSpeedX;
    ballY = ballY + ballSpeedY;
    // if it exits the canvas width - flip the direction
    if(ballX > canvas.width) {
        ballSpeedX = -ballSpeedX;
    }
    if(ballY > canvas.height) {
        ballSpeedY = -ballSpeedY;
    }
    // if it exits the canvas width - flip the direction
    if(ballX < 0) {
        ballSpeedX = -ballSpeedX;
    }
    if(ballY < 0) {
        ballSpeedY = -ballSpeedY;
    }
}

// function for drawing all the elements
function drawAllElements() {
    // 0,0 is for x,y coordinates - top left corner
    // canvas.width, canvas-height - bottom right corner
    colorRect(0,0, canvas.width, canvas.height, 'black');
    colorRect(0, paddle1Y, 10 , paddleHeight, 'white');
    // drawing the ball
    colorCircle(ballX, ballY, 10, 'white');
}

// function that simplifies the code for rect
function colorRect(leftX, topY, width, height, drawColor) {
    canvasContext.fillStyle = drawColor;
    canvasContext.fillRect(leftX, topY, width, height);
}

// function that simplifies the code for arc (ball)
function colorCircle(centerX, centerY, radius, drawColor) {
    canvasContext.fillStyle = drawColor;
    canvasContext.beginPath();
    canvasContext.arc(centerX, centerY, radius, 0, Math.PI*2, true);
    canvasContext.fill();
}

