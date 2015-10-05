


function Adventure(startX, startY, endX, endY, bound){
	this.coord = new Thing(startX, startY);
	this.beginning = new Thing(startX, startY);
	this.end = new Thing(endX, endY);
	this.bound = bound;
};

function Thing(x, y) {
	this.x = x;
	this.y = y;
};




Adventure.prototype.makeGrid = function(){
	for (var i = 0; i <= this.bound; i++){
		document.write("<div class=\"row\">");
		for (var k = 0; k <= this.bound; k++){
			document.write("<div id="+"\""+i+k+"\""+"class=\"col-xs-3 cell\"></div>");
		};
		document.write("</div>");
	};
	this.setPlayer();
	this.target();
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

Adventure.prototype.hideAbe = function (xChange, yChange) {
		document.getElementById((this.coord.y + 
			yChange).toString() + (this.coord.x + xChange).toString()).innerHTML = "";
};




