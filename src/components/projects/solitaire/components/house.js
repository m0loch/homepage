import CardInteractableDocker from './abstract/cardInteractableDocker';

class House extends CardInteractableDocker {

    AcceptsCardDock = (card) => {
        if (card.linkedDownCard) {
            return false;
        }
        
        if (this.cards.length === 0) {
            return card.cardValue === 1;
        }

        let topCard = this.getTopCard();

        return (topCard.cardValue === card.cardValue - 1)
            && (topCard.cardSuit === card.cardSuit);
    }

    isEmpty = () => this.cards.length === 0;

    getTopCard = () => this.cards.length === 0 ? undefined : this.cards[this.cards.length-1];

}

export default House;
