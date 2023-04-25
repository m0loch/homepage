import CardDocker from './cardDocker';
import { GetCardSize } from '../card';

class CardInteractableDocker extends CardDocker {
    constructor(props) {
        super(props);

        this.cardSize = GetCardSize();
    }

    CheckDockableArea = (position) => {
        let bounds = this.GetDockableArea();

        return (bounds.x <= position.x)
            && (bounds.y <= position.y)
            && (bounds.x + bounds.width >= position.x)
            && (bounds.y + bounds.height >= position.y);
    }

    GetDockableArea = () => {
        let baseDockableArea;
        if (this.cards.length === 0) {
            baseDockableArea = this.shadow.getBounds();
        } else {
            baseDockableArea = this.cards[this.cards.length - 1].getBounds();
        }

        // Since we're trying to dock cards, we need to check a wider area than just the pointer
        const extendedDockableArea = {
            x: baseDockableArea.x - (this.cardSize.width * .5),
            y: baseDockableArea.y - (this.cardSize.height * .5),
            width: baseDockableArea.width + this.cardSize.width,
            height: baseDockableArea.height + this.cardSize.height,
        }

        return extendedDockableArea;
    }

    AddCard(card) {
        super.AddCard(card);
    }
}

export default CardInteractableDocker;
