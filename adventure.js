

var adventure = {
	yCoord:0,
	xCoord:0,
	endX:8,
	endY:8,
	


};

adventure.killAbe = function () {
		document.getElementById(this.endY.toString() + 
			this.endX.toString()).innerHTML = "<img src='dead.jpg' class='img'></img>";
};

adventure.movAbe = function(){
		document.getElementById(this.yCoord.toString() + 
			this.xCoord.toString()).innerHTML = "<img src='small_abe.png' class='img'></img>";
};

adventure.target = function(){
		document.getElementById(this.endY.toString() + 
			this.endX.toString()).innerHTML = "<img src='retire.png' class='img'></img>";
};

adventure.hideAbe = function (xChange, yChange) {
		document.getElementById((this.yCoord + 
			yChange).toString() + (this.xCoord + xChange).toString()).innerHTML = "";
};


