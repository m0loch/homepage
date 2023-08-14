import BaseLocation from "./_baseLocation";

export default class BanditsCamp extends BaseLocation {
    constructor() {
        super('banditsCamp', {
            townExit: { x: 200, y: 850 },
        });
    }
}