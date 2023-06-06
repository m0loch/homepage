import CardDocker from './abstract/cardDocker';

class DiscardPile extends CardDocker {

    GetCard = () => {
        let removedCard = this.cards.pop();
        this.removeChild(removedCard);
        return removedCard;
    }
}

export default DiscardPile;
