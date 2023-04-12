function GetTalk(value) {
    let chapterModules = [];

    // Reads all the .js files in the appropriate subfolders as modules
    if (value === 0) {
        chapterModules = require.context(`./data/dragon`, true, /\.js$/);
    } else {
        chapterModules = require.context(`./data/bugchars`, true, /\.js$/);
    }

    // Retrieves the default export for each module
    return chapterModules.keys().map(chapter => chapterModules(chapter).default);
}

export default GetTalk;