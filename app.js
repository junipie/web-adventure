var holdon = new Audio('holdon.wav');
var coon = new Audio('racoon.wav');
var dead = new Audio('dead.wav');




var adventure = new Adventure(3,3,8,8,8);
//var anotherAdventure = new Adventure(4,2,7,7,7);

function movDown() {
	adventure.mov(0, -1, 0, 1, adventure.bound);
}; 
function movUp() {
	adventure.mov(0, 1, 0, -1, 0);
}; 
function movLeft() {
	adventure.mov(1, 0, -1, 0, 0);
}; 
function movRight() {
	adventure.mov(-1, 0, 1, 0, adventure.bound);
};

function reset() {
    adventure.hideAbe(0,0);
    adventure.coord.x = adventure.beginning.x;
    adventure.coord.y = adventure.beginning.y;
    adventure.setPlayer();
    adventure.target();
}

document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
            movLeft();
            break;
        case 38:
            movUp();
            break;
        case 39:
            movRight();
            break;
        case 40:
            movDown();
            break;
        case 32:
            reset();
            break;
   }
};


