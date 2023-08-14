import Location from "../../abstract/_location";

class Church extends Location {
    constructor({x, y}) {
        super('orb', x, y, 'enterChurch', 'Church', 0xAFF7FA);
    }
}

export default Church;