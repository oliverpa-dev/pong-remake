// variables for the canvas

var canvas;
var canvasContext;

// defining our ball
var ballX = 50;

// when the pages loads
window.onload = function() {
    // get the html element with id of map
    canvas = document.getElementById('map');
    // context is for drawing graphics
    canvasContext = canvas.getContext('2d');
    // calling the function for drawing all the elements with interval of 1 seceond
    var framesPerSecond = 30;
    setInterval(drawAllElements, 1000/framesPerSecond);

}

// function for drawing all the elements
function drawAllElements() {

    ballX = ballX + 5;

    // filling the canvas with black color
    canvasContext.fillStyle = 'black';

    // 0,0 is for x,y coordinates - top left corner
    // canvas.width, canvas-height - bottom right corner
    canvasContext.fillRect(0,0, canvas.width, canvas.height);

    canvasContext.fillStyle = 'red';
    canvasContext.fillRect(300, 200, 400, 400);

    canvasContext.fillStyle = "blue";
    canvasContext.fillRect(ballX, 100, 10, 10);
}