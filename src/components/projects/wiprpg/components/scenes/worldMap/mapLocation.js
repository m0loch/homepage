import Location from "../../abstract/_location";

class MapLocation extends Location {
    constructor({x, y, name, location}) {
        super('orb', x, y, 'enterLocation', name, 0x30B030, { location });
    }
}

export default MapLocation;