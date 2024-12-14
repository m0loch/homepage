function getPosts() {
    // Reads all the .js files in the ./posts subfolder as modules
    const posts = require.context("./posts", true, /\.js$/);

    // Retrieves the default export for each module
    return posts.keys().map(post => posts(post).default);
}

export default getPosts();
