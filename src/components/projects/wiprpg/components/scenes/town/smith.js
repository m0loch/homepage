import Location from "../../abstract/_location";

class Smith extends Location {
    constructor({x, y}) {
        super('orb', x, y, 'enterSmith', 'Blacksmith', 0xFF3300);
    }
}

export default Smith;