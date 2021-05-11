console.log("Kocham Cie Moja Bajaderko!");

// We are creating map for the pong game
// It is going to be consist of rows and columns
// 1 = wall, 2 = side of first player
// 3 = side of second player, 4=tiles
var map = [
    [1, 1, 1, 1, 1, 1, 1],
    [1, 2, 4, 4, 4, 3, 1],
    [1, 2, 4, 4, 4, 3, 1],
    [1, 2, 4, 4, 4, 3, 1],
    [1, 2, 4, 4, 4, 3, 1],
    [1, 2, 4, 4, 4, 3, 1],
    [1, 2, 4, 4, 4, 3, 1],
    [1, 1, 1, 1, 1, 1, 1],
]

// function for drawing the board

function drawBoard() {
    var htmlBoard = document.getElementById("map");
    htmlBoard.innerHTML = "";
    for(let y = 0; y < map.length; y++) {
        for(let x = 0; x < map[y].length; x++) {
            if(map[y][x] === 1) {
                htmlBoard.innerHTML += "<div class='tile border'></div>"
            }
            if(map[y][x] === 2) {
                htmlBoard.innerHTML += "<div class='tile first-side'></div>"
            }
            if(map[y][x] === 4) {
                htmlBoard.innerHTML += "<div class='tile map-tile'></div>"
            }
            if(map[y][x] === 3) {
                htmlBoard.innerHTML += "<div class='tile second-side'></div>"
            }
        }
        htmlBoard.innerHTML += "<br>"
    }
}

drawBoard();