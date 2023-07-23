function getLocationsList() {
    // Reads all the .js files in the ./locations subfolders as modules
    const locs = require.context("./locations", false, /\.js$/);

    // Retrieves the default export for each module
    return locs.keys().map(loc => locs(loc).default);
}

function getPlotPoints(location, plotPoint) {

    // Reads a list of the .js files containing location events for the specific plot point
    const events = require.context("./plot", true, /\.js$/);

    // Retrieves the events for the specified location at the current time
    return events.keys()
        .filter(ev => ev.includes(plotPoint) && ev.includes(location.toLowerCase()))
        .map(ev => events(ev).default);
}

class LocationsManager {
    constructor() {
        this.list = getLocationsList();
    }

    getLocation = (locName, plotPoint) => {
        const location = new (this.list.find(item => item.name === locName))();

        const events = getPlotPoints(locName, plotPoint);
        events.map(ev => location.registeredEvents[ev.trigger] = ev);

        return location;
    }
}

export default LocationsManager;
