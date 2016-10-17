
/*function deck(){
	this.names = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
	this.suits = ['Hearts','Diamonds','Spades','Clubs'];
	var cards = [];
    
    for( var s = 0; s < this.suits.length; s++ ) {
        for( var n = 0; n < this.names.length; n++ ) {
            cards.push( new card( n+1, this.names[n], this.suits[s] ) );
        }
    }

    return cards;

}*/
/*var cardsInDeck=new Array();
var numberOfCardsInDeck=52;
cardsInDeck[0]=""cardsInDeck[1]=""cardsInDeck[2]=""cardsInDeck[3]=""cardsInDeck[4]=""cardsInDeck[5]=""cardsInDeck[0]=""cardsInDeck[0]=""
cardsInDeck[0]=""cardsInDeck[0]=""cardsInDeck[0]=""cardsInDeck[0]=""cardsInDeck[0]=""cardsInDeck[0]=""cardsInDeck[0]=""cardsInDeck[0]=""cardsInDeck[0]=""
cardsInDeck[0]=""cardsInDeck[0]=""cardsInDeck[0]=""cardsInDeck[0]=""cardsInDeck[0]=""cardsInDeck[0]=""cardsInDeck[0]=""cardsInDeck[0]=""cardsInDeck[0]=""
cardsInDeck[0]=""cardsInDeck[0]=""cardsInDeck[0]=""cardsInDeck[0]=""cardsInDeck[0]=""cardsInDeck[0]=""cardsInDeck[0]=""cardsInDeck[0]=""cardsInDeck[0]=""
cardsInDeck[0]=""cardsInDeck[0]=""cardsInDeck[0]=""cardsInDeck[0]=""cardsInDeck[0]=""cardsInDeck[0]=""cardsInDeck[0]=""cardsInDeck[0]=""cardsInDeck[0]=""
cardsInDeck[0]=""cardsInDeck[0]=""cardsInDeck[0]=""cardsInDeck[0]=""cardsInDeck[0]=""cardsInDeck[0]=""cardsInDeck[0]=""cardsInDeck[0]=""
*/



/*function shuffle(n) {

  var i, j, k;
  var temp;

  // Shuffle the stack 'n' times.

  for (i = 0; i < n; i++)
    for (j = 0; j < this.cards.length; j++) {
      k = Math.floor(Math.random() * this.cards.length);
      temp = this.cards[j];
      this.cards[j] = this.cards[k];
      this.cards[k] = temp;
    }
}*/



/*

function sort() {
    img.sort();
    document.getElementById("div2").innerHTML = ;
}
*/

function draw (){
	console.log("1");
	dealCard(randomCard());

};
var cardsInDeck=new Array();
var numberOfCardsInDeck=52;
cardsInDeck[0]="AceHearts"; 
cardsInDeck[1]="Clubs2";
cardsInDeck[2]="ClubsAce";
cardsInDeck[3]="DiamondsKing";
cardsInDeck[4]="SpadesJack";

function dealCard(i){

	if (numberOfCardsInDeck==0)return
		false;
	var img = document.createElement("img");
	img.src="sp"+i+1+".png";
	document.getElementById('div1').appendChild(img);
	console.log(img);
	removeCard(i);
}

function randomCard(){
	return Math.floor(Math.random() * (51-0+1)) + 0;


}
function removeCard(c)
{
	//simply make higher numbered card move down 1
	for(j=c; j<= numberOfCardsInDeck-2;
		j++)
	{
		cardsInDeck[j]=cardsInDeck[j+1];
	}
	numberOfCardsInDeck--;


}

function changeImage(){


}














































/*
// Create a function for shuffling the elements in an array
Array.prototype.shuffle = function(repeat) {

	repeat = (repeat === undefined) ? 1 : repeat;

	for (var i = 0; i < repeat; i++) {

		// Implement the Fisher-Yates Shuffle
		var currentIndex = this.length, temporaryValue, randomIndex;

		// While there remains elements to shuffle...
		while (0 !== currentIndex) {

			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			// And swap it with the current element.
			temporaryValue = this[currentIndex];
			this[currentIndex] = this[randomIndex];
			this[randomIndex] = temporaryValue;

		}

	}

	return this;

};

*/



