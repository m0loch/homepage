function Locations() {
    // Reads all the .js files in the ./data subfolders as modules
    const locs = require.context("./locations", true, /\.js$/);

    // Retrieves the default export for each module
    return locs.keys().map(loc => locs(loc).default);
}

export default Locations();
