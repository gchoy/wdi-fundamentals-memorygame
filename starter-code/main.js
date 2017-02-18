var cards = ["queen","queen","king","king"];
var cardsInPlay = [];


//Solution to part 10 assignment
//var createCards = function(){
//	var gameBoard = document.getElementById("game-board");
//	for (var i=0; i<4 ;i++){
//		var div = document.createElement('div');
//		div.className = "card";
//		gameBoard.appendChild(div);
//	}
//}

//createCards();

//Creating the game board variable and node
var gameBoard = document.getElementById("game-board");

//Populating the game-board node with cards elements
//and including and event listner

var createBoard = function(){

	for (var=i; i<cards.length; i++){
		var cardElement = document.createElement("div");
		cardElement.className="card";
		cardElement.setAttribute("data-card", cards[i]);
		gameBoard.appendChild(cardElement);
		cardElement.addEventListener("click", isTwoCards);
	}
}

//Verifying that two cards are a match
var isMatch = function(cardsInPlay){
	
	if (cardsInPlay[0] === cardsInPlay[1]){
        alert("There's a match!");
	} else {
		alert("There's no match!");
	}
}


//Selecting two cards which are sent to isMatch for Validation
function isTwoCards(){

	cardsInPlay.push(this.getAttribute("data-card"));

	if (this.getAttribute("data-card")=== "queen"){
		this.innerHTML = "<img src='queen.png' alt='queen'/>";
	} else {
		this.innerHTML = "<img src ='king.png' alt='king'/>";
	}

	if (cardsInPlay.length === 2){
        isMatch(cardsInPlay);
        cardsInPlay = [];
	}
}

createBoard();