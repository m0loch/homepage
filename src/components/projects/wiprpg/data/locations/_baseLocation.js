export default class BaseLocation {
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