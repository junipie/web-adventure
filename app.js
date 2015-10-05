var holdon = new Audio('holdon.wav');
var coon = new Audio('racoon.wav');
var dead = new Audio('dead.wav');

function mov(xDel, yDel, x, y, bound) {
	
	if(adventure.coord.x === (adventure.end.x + xDel) && adventure.coord.y === (adventure.end.y + yDel)) {
        adventure.coord.x += x;
        adventure.coord.y += y;
        adventure.hideAbe(xDel, yDel);	
        adventure.killAbe();
        dead.play();
        alert("Whuuthaa!!??");
	}
	else if (adventure.coord.y === bound && yDel != 0) {
        holdon.play();
        alert("D'oh!!!");
    }
    else if (adventure.coord.x === bound && xDel != 0) {
        coon.play();
        alert("D'oh!!!");
    }
    else {
        adventure.coord.x += x;
        adventure.coord.y += y;
        adventure.hideAbe(xDel, yDel);
		adventure.setPlayer();
	};
}


var adventure = new Adventure(0,0,7,7,7);
// var anotherAdventure = new Adventure(0,0,6,6,6);

function movDown() {
	mov(0, -1, 0, 1, adventure.bound);
}; 
function movUp() {
	mov(0, 1, 0, -1, 0);
}; 
function movLeft() {
	mov(1, 0, -1, 0, 0);
}; 
function movRight() {
	mov(-1, 0, 1, 0, adventure.bound);
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


