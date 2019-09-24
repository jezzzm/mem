const cards = [
	{
		rank: "queen",
		suit: "hearts",
		image: "images/queen-of-hearts.jpg"
	},
	{
		rank: "queen",
		suit: "diamonds",
		image: "images/queen-of-diamonds.jpg"
	},
	{
		rank: "king",
		suit: "hearts",
		image: "images/king-of-hearts.jpg"
	},
	{
		rank: "king",
		suit: "diamonds",
		image: "images/king-of-diamonds.jpg"
	}
];

var cardsInPlay = [];

function flipCard(cardId) {
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].image);
	console.log(cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
}

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log('Match found!');
	} else {
		console.log('No match');
	}
}

flipCard(0);
flipCard(2);

