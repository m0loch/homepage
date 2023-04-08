// Reads all the .js files in the ./data subfolders as modules
const chapterModules = require.context("./data", true, /\.js$/);

// Retrieves the default export for each module
const Adventure = chapterModules.keys().map(chapter => chapterModules(chapter).default);

export default Adventure;