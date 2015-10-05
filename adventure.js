
function Adventure(yCoord, xCoord, endX, endY, bound){
	this.yCoord = yCoord;
	this.xCoord = xCoord;
	this.endX = endX;
	this.endY = endY;
	this.bound = bound;
};


Adventure.prototype.makeGrid = function(){
	for (var i = 0; i <= this.bound; i++){
		document.write("<div class=\"row\">");
		for (var k = 0; k <= this.bound; k++){
			document.write("<div id="+"\""+i.toString()+k.toString()+"\""+"class=\"col-xs-3 cell\"></div>");
		};
		document.write("</div>");
	};
	this.movAbe();
	this.target();
}


Adventure.prototype.killAbe = function () {
		document.getElementById(this.endY.toString() + 
			this.endX.toString()).innerHTML = "<img src='dead.jpg' class='img'></img>";
};

Adventure.prototype.target = function(){
		document.getElementById(this.endY.toString() + 
			this.endX.toString()).innerHTML = "<img src='retire.png' class='img'></img>";
};

Adventure.prototype.movAbe = function(){
		document.getElementById(this.yCoord.toString() + 
			this.xCoord.toString()).innerHTML = "<img src='small_abe.png' class='img'></img>";
};

Adventure.prototype.hideAbe = function (xChange, yChange) {
		document.getElementById((this.yCoord + 
			yChange).toString() + (this.xCoord + xChange).toString()).innerHTML = "";
};




