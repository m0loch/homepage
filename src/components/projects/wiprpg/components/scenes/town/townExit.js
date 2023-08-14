import Location from "../../abstract/_location";

class TownExit extends Location {
    constructor({x, y}) {
        super('orb', x, y, 'leaveTown', 'Leave', 0xBA7F49, { location: 'worldmap' });
    }
}

export default TownExit;