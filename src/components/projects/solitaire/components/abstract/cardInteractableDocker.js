import CardDocker from './cardDocker';

class CardInteractableDocker extends CardDocker {

    CheckDockableArea = (position) => {

        var dockableSlot;

        if (this.cards.length === 0) {
            dockableSlot = this.shadow;
        } else {
            dockableSlot = this.cards[this.cards.length - 1];
        }

        return dockableSlot.containsPoint(position);
    }

    AddCard(card) {
        super.AddCard(card);
    }
}

export default CardInteractableDocker;
