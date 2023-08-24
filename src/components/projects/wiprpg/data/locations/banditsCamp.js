import BaseLocation from "./_baseLocation";

export default class BanditsCamp extends BaseLocation {
    constructor() {
        super('banditscamp', {
            townExit: { x: 200, y: 850 },
        });
    }
}