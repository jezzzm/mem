

const cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];
var cardOne = cards[0];
var cardTwo = cards[2];

cardsInPlay.push(cardOne, cardTwo);

console.log(cardsInPlay);
console.log("User flipped " + cardOne);

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert('Match found!');
	} else {
		alert('No match');
	}
}
