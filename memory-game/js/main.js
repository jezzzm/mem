

const cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

function flipCard(cardId) {
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
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

