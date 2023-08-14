import Location from "../../abstract/_location";

class Merchant extends Location {
    constructor({x, y}) {
        super('orb', x, y, 'enterMerchant', 'Merchant', 0x11FC00);
    }
}

export default Merchant;