import CardInteractableDocker from './abstract/cardInteractableDocker';

class CardColumn extends CardInteractableDocker {

    GetLandingPosition = () => {
        let i = this.cards.length;

        return({
            x: 0,
            y: i * 14,   
        });
    }

    RevealLastCard = () => {
        this.cards[this.cards.length - 1]?.SetFaceDown(false);
    }

    AcceptsCardDock = (card) => {
        if (this.cards.length === 0) {
            return card.cardValue === 13;           
        }

        let topCard = this.cards[this.cards.length-1];

        if (topCard.isFaceDown) {
            return false;
        }

        return (topCard.cardValue === card.cardValue + 1)
            && (topCard.cardColor !== card.cardColor);
    }

    AddCard(card) {
        if (this.cards.length > 0) {
            let topCard = this.cards[this.cards.length-1];
            if (!topCard.isFaceDown) {
                topCard.linkedDownCard = card;
                card.linkedUpCard = topCard;
            }
        }
        super.AddCard(card);
    }

    onCardClicked = (sender) => {
        let topCard = this.cards[this.cards.length-1];

        if (topCard === sender && sender.isFaceDown) {
            sender.SetFaceDown(false);
        }
    }
}

export default CardColumn;
