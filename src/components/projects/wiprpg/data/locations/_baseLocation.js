export default class BaseLocation {

    // TODO: define basic things
    constructor(name, poi) {
        this.name = name;
        this.poi = poi;
    }

    onEnter = () => {
        console.log(`Player entered ${this.name}`)
    }


    onLeave = () => {
        console.log(`Player entered ${this.name}`)
    }
}