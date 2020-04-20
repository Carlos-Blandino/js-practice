// Dynamically create a deck of playing cards

function makeDeck() {
    // Need to hold new cards in variable
    const deck = [];
    // Hold the data of a card in different arrays
    const suits = ['hearts', 'diamonds', 'spades', 'clubs'];
    // Using a string for the values because it was faster to write

    const values = '2,3,4,5,6,7,8,9,10,J,Q,K,A';
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
}