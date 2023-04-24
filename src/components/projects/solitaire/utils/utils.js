export function RandomizeStart(CardsNumber) {
    // Creates an ordered array of cards
    let cards = [];
    for (let i = 0; i < CardsNumber; i++) {
        cards.push(i);
    }

    let result = [];

    // "Shuffles" the deck
    for (; cards.length > 0;) {        
        const card = cards.splice(Math.floor(Math.random() * cards.length), 1)[0];
        result.push(card);
    }

    return result;
}
