//console.log("JS file is connected to HTML! Woo!")

//var cardOne = "queen";
//var cardTwo = "king";
//var cardThree = "queen";
//var cardFour = "king";

var createCards = function(){
	var gameBoard = document.getElementById("game-board");
	for (var i=0; i<4 ;i++){
		var div = document.createElement('div');
		div.className = "card";
		gameBoard.appendChild(div);
	}
}

createCards();