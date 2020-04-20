// Dynamically create a deck of playing cards
const deckOfCards = {
    // Need to hold new cards in variable
    deck: [],
    // Hold the data of a card in different arrays
    suits: ['hearts', 'diamonds', 'spades', 'clubs'],
    // Using a string for the values because it was faster to write
    values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
    // Need to hold drawn cards since the deck will lose the card
    drawnCards: [],
    makeDeck() {
        const { suits, values, deck } = this;
        // Use split method on the string to separate from commas and return with array
        // Iterate thru the values
        for (let value of values.split(',')) {
            // for each value you want to iterate thru the suits to add the value to each
            for (let suit of suits) {
                // In each iteration you want to add the card object to the deck
                deck.push({ value, suit });
            }
        }
        return deck;
    },

    drawCard() {
        // Hold the card from the deck pop  and add it to the drawn cards array
        const card = this.deck.pop();
        this.drawnCards.push(card);
        // Also return the card
        return card;
    },
    drawCards(numberOfCards) {
        // Need to hold the drawn cards
        const cards = [];
        // Iterate thru the number of cards
        for (let card = 0; card < numberOfCards; card++) {
            // In each iteration place the card in to the drawn card pile
            cards.push(this.drawCard());
        }
        return cards;

        // After iterating return the drawn cards
    },
    shuffleDeck() {
        //deconstructing
        const { deck, getRandom } = this;

        for (let i = 0; i < deck.length; i++) {
            let random1 = getRandom(deck.length);
            let random2 = getRandom(deck.length);
            while (random2 == random1) {
                random2 = getRandom(deck.length);
            }
            //swaping
            [deck[random1], deck[random2]] = [deck[random2], deck[random1]];
        }
    },
    getRandom(num) {
        return Math.floor(Math.random() * num);
    }
};