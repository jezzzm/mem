const cards = [
	{
		rank: "queen",
		suit: "hearts",
		image: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		image: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		image: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		image: "images/king-of-diamonds.png"
	}
];

var cardsInPlay = [];
var board = document.getElementById('game-board');
var score = document.getElementById('score');

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log('Match found!');		
		score.innerHTML = parseInt(score.innerHTML) + 1;
	} else {
		alert('No match');
	}
}

function flipCard() {
	if (cardsInPlay.length === 2) {
		alert('Two cards already flipped. Please try again.');
		return;
	}

	var cardId = this.getAttribute('data-id');

	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].image);
	console.log(cards[cardId].suit);

	cardsInPlay.push(cards[cardId].rank);

	this.setAttribute('src', cards[cardId].image);

	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
}

function createBoard() {
	for (var i in cards) {
		var card = document.createElement('img');

		card.setAttribute('src', 'images/back.png');
		card.setAttribute('data-id', i)
		card.addEventListener('click', flipCard);

		board.appendChild(card);
	}
}

function doReset() {
	//clear log of cards played
	cardsInPlay = [];

	//update visual appearance
	var images = board.childNodes;
	for (j in images) {
		//alternative attribute assignment
		images[j]['src'] = 'images/back.png';
	}

	console.log('Game has been reset');
}

function startOver() {
	doReset();
	score.innerHTML = 0;
}

createBoard();
document.getElementById('tryAgain').addEventListener('click', doReset);
document.getElementById('startOver').addEventListener('click', startOver);
