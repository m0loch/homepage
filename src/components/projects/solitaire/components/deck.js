import CardDocker from './abstract/cardDocker'

function onClick(sender) {

    if (!sender.cards) {
        // This shouldn't happen, but there's no reason to run any risk.
        return;
    }
    
    if (sender.cards.length === 0) {
        sender.emit('emptydeckclicked');
    } else {
        sender.cards[sender.cards.length-1].Click()
    }

}

class Deck extends CardDocker {
    constructor(props, cardClickedCallback) {
        super(props, onClick);

        this.onCardClickedCallback = cardClickedCallback;
    }

    onCardClicked = () => {
        if (!this.isWaiting) {
            let topCard = this.cards.pop();
            this.onCardClickedCallback(topCard);
        }
    }
}

export default Deck;
