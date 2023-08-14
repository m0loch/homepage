import BaseLocation from "./_baseLocation";

export default class WorldMap extends BaseLocation {
    constructor() {
        super('worldmap', {
            vekstad: { name: 'Vekstad', x: 300, y: 580 },
            banditsCamp: { name: "Bandit's camp", x: 955, y: 730 },
        });
    }
}