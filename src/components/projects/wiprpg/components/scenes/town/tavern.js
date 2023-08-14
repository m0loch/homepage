import Location from "../../abstract/_location";

class Tavern extends Location {
    constructor({x, y}) {
        super('orb', x, y, 'enterTavern', 'Tavern', 0xCC00FF);
    }
}

export default Tavern;