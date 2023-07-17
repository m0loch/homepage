import BaseLocation from "./_baseLocation";

export default class Vekstad extends BaseLocation {
    constructor() {
        super('vekstad', {
            church: { x: 30, y: 260 },
            merchant: { x: 220, y: 260 },
            smith: { x: 690, y: 260 },
            tavern: { x: 430, y: 260 },
            townExit: { x: 900, y: 470 },
        });
    }
}