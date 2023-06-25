import Location from "./_location";

class TownExit extends Location {
    constructor(x, y) {
        super('orb', x, y, 'leaveTown', 'Leave', 0xBA7F49);
    }
}

export default TownExit;