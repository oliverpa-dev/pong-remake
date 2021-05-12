// variables for the canvas

var canvas;
var canvasContext;

// when the pages loads
window.onload = function() {
    // get the html element with id of map
    canvas = document.getElementById('map');
    // context is for drawing graphics
    canvasContext = canvas.getContext('2d');

    // filling the canvas with black color
    canvasContext.fillStyle = 'black';

    // 0,0 is for x,y coordinates - top left corner
    // canvas.width, canvas-height - bottom right corner
    canvasContext.fillRect(0,0, canvas.width, canvas.height);

    canvasContext.fillStyle = 'red';
    canvasContext.fillRect(300, 200, 400, 400);

    canvasContext.fillStyle = "blue";
    canvasContext.fillRect(250, 150, 100, 100);
}