import CardDocker from './abstract/cardDocker';

class DiscardPile extends CardDocker {

    GetCard = () => {
        let removedCard = this.cards.pop();
        this.removeChild(removedCard);
        return removedCard;
    }

    AddCard(card) {
        let where = this.GetLandingPosition();

        // DEBUG //
        // const from = {x: card.x, y: card.y};
        // console.log(`from (${from.x}, ${from.y}) to (${where.x}, ${where.y})`)
        // /DEBUG //

        card.x = where.x;
        card.y = where.y;

        this.cards.push(card);

        this.addChild(card);
    }
}

export default DiscardPile;
