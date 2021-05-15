console.log("PongRemake Hurray!");

// variables for canvas
var canvas;
var canvasContext;

// defining our ball starting position leftX 
var ballX = 50;
var ballY = 50;

// speed of the ball
var ballSpeedX = 15;
var ballSpeedY = 10;

// players paddle
var paddle1Y = 250;
var paddle2Y = 250;
const paddleHeight = 150;
const paddleThickness = 10;

// player score
var player1Score = 0;
var player2Score = 0;
const winningScore = 3;
var showWinningScreen = false;

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

// function that resets the ball if it hits one of the sides
function resetBall() {
    if(player1Score >= winningScore || player2Score >= winningScore) {
        player1Score = 0;
        player2Score = 0;
        showWinningScreen = true;
    }
    ballSpeedX = -ballSpeedX;
    ballX = canvas.width / 2;
    ballY = canvas.width / 2;
}

// function for the computer paddle
function computerMovement() {
    // finding center of the right paddle
    var paddle2YCenter = paddle2Y + (paddleHeight/2);
    if(paddle2YCenter < ballY - 10) {
        paddle2Y += 9;
    } else if(paddle2YCenter > ballY + 10) {
        paddle2Y -= 9;
    }
}

// function for reseting the game
function handleMouseClick(evt) {
    if(showWinningScreen) {
        player1Score = 0;
        player2Score = 0;
        showWinningScreen = false;
    }
}

// when the pages loads
window.onload = function() {
    if(showWinningScreen) {
        return
    }
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

    // event listener for mouseclik that resets the game
    canvas.addEventListener('mousedown', handleMouseClick);

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
    computerMovement();
    ballX = ballX + ballSpeedX;
    ballY = ballY + ballSpeedY;
    // if it exits the canvas width - flip the direction
    if(ballX > canvas.width) {
        // if it is above of the bottom of the paddle
        // and bellow of the top of the battle, hit the ball
        if(ballY > paddle2Y && ballY < paddle2Y + paddleHeight) {
            ballSpeedX = -ballSpeedX;
            // After it hits the paddle
            // the horizontal direction changes regarding the hit marker on the paddle
            // If it hits close to the edge, the ball reflects faster
            var deltaY = ballY - (paddle2Y + paddleHeight/2);
            ballSpeedY = deltaY * 0.35;
        } else {
            // else reset
            player1Score++;
            resetBall();
        }
    }
    if(ballY > canvas.height) {
        ballSpeedY = -ballSpeedY;
    }
    // if it exits the canvas width - flip the direction
    if(ballX < 0) {
        // if it is above of the bottom of the paddle
        // and bellow of the top of the battle, hit the ball
        if(ballY > paddle1Y && ballY < paddle1Y + paddleHeight) {
            ballSpeedX = -ballSpeedX;
            var deltaY = ballY - (paddle1Y + paddleHeight/2);
            ballSpeedY = deltaY * 0.35;
        } else  {
            // else reset
            player2Score++;
            resetBall();
        }
        // else {
        //     console.log("Player two has won the game");
        //     player2Score = 0;
        //     resetBall();
        // }
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
    if(showWinningScreen) {
        canvasContext.fillStyle = 'white';
        if(player1Score = winningScore) {
            canvasContext.fillText('Player 1 has won the game',450, 100);
        } else if(player2Score = winningScore) {
            canvasContext.fillText('Player 2 has won the game',450, 100);
        }
        canvasContext.fillText('Click in order to continue', 450, 400);
        return;
    }
    // first paddle
    colorRect(0, paddle1Y, paddleThickness , paddleHeight, 'white');
    // second paddle
    colorRect(canvas.width - 10, paddle2Y, paddleThickness, paddleHeight, 'white');
    // drawing the ball
    colorCircle(ballX, ballY, 10, 'white');
    // create the text that will be displayed 
    canvasContext.fillText(player1Score, 200, 100);
    canvasContext.fillText(player2Score, canvas.width - 200, 100);
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