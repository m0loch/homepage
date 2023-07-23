export default class BaseLocation {
    constructor(name, poi) {
        this.name = name;
        this.poi = poi;
        this.registeredEvents = {}
    }

    getTriggeredEvent = (trigger) => {
        return this.registeredEvents[trigger];
    }

    setTriggered = (trigger) => {
        this.registeredEvents[trigger].visited = true;
    }
}