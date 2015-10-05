
function Adventure(startX, startY, endX, endY, bound){
	this.coord = new Thing(startX, startY);
	this.beginning = new Thing(startX, startY);
	this.end = new Thing(endX, endY);
	this.bound = bound;
	this.burns = new Thing(2,5);

};

function Thing(x, y) {
	this.x = x;
	this.y = y;
};


Adventure.prototype.mov = function(xDel, yDel, x, y, bound) {
	
	if(this.coord.x === (this.end.x + xDel) && this.coord.y === (this.end.y + yDel)) {
        this.coord.x += x;
        this.coord.y += y;
        this.hideAbe(xDel, yDel);	
        this.killAbe();
        dead.play();
        alert("Whuuthaa!!??");
	}
	else if (this.coord.y === bound && yDel != 0) {
        holdon.play();
        alert("D'oh!!!");
    }
    else if (this.coord.x === bound && xDel != 0) {
        coon.play();
        alert("D'oh!!!");
    }
    else {
        this.coord.x += x;
        this.coord.y += y;
        this.hideAbe(xDel, yDel);
		this.setPlayer();
	};
}

Adventure.prototype.makeGrid = function(){
	for (var i = 0; i <= this.bound; i++){
		document.write("<div class=\"row\">");
		for (var k = 0; k <= this.bound; k++){
			document.write("<div id="+"\""+i+k+"\""+"class=\"col-xs-3 cell\"></div>");
		};
		document.write("</div>");
	};
	this.updateDisplay();
}

Adventure.prototype.updateDisplay = function(){
	this.setPlayer();
	this.target();
	this.setBurns();
}

Adventure.prototype.killAbe = function () {
		document.getElementById(this.end.y.toString() + 
			this.end.x.toString()).innerHTML = "<img src='dead.jpg' class='img'></img>";
};

Adventure.prototype.target = function(){
		document.getElementById(this.end.y.toString() + 
			this.end.x.toString()).innerHTML = "<img src='retire.png' class='img'></img>";
};

Adventure.prototype.setPlayer = function(){
		document.getElementById(this.coord.y.toString() + 
			this.coord.x.toString()).innerHTML = "<img src='small_abe.png' class='img'></img>";
};

Adventure.prototype.setBurns = function(){
		document.getElementById(adventure.burns.y.toString() + 
			adventure.burns.x.toString()).innerHTML = "<img src='burns.png' class='img'></img>";
};

Adventure.prototype.hideAbe = function (xChange, yChange) {
		document.getElementById((this.coord.y + 
			yChange).toString() + (this.coord.x + xChange).toString()).innerHTML = "";
};




