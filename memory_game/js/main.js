
//console.log("User flipped " + cardOne);
//console.log("User flipped " + cardTwo);

var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

var checkForMatch = function() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    console.log("You found a match!");
  } else {
    alert("Sorry, try again.");
  }
}

var flipCard = function(cardId) {
  console.log("User flipped " + cards[cardId])
  cardsInPlay.push(cards[cardId]);
  if (cardsInPlay.length === 2) {
    checkForMatch();
  }
};


flipCard(0);
flipCard(2);




/* var cardOne = cards[0];

cardsInPlay.push(cardOne);

console.log("User flipped " + cardsInPlay);

var cardTwo = cards[3]

cardsInPlay.push(cardTwo);

console.log("User flipped " + cardTwo);

if (cardsInPlay.length === 2) {
  if (cardsInPlay[0] === cardsInPlay[1]) {
  	alert("You found a match!");
  }
  else {
  	alert("Sorry, try again.")
  }
}; */