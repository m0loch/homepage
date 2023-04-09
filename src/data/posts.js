function getPosts() {
    // Reads all the .js files in the ./data subfolders as modules
    const chapterModules = require.context("./posts", true, /\.js$/);

    // Retrieves the default export for each module
    return chapterModules.keys().map(chapter => chapterModules(chapter).default);
}

export default getPosts();
