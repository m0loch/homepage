function getPosts() {
    // Reads all the .js files in the ./posts subfolder as modules
    const posts = require.context("./posts", false, /\.js$/);

    // Retrieves the default export for each module
    return posts.keys().map((post, idx) => { return {...posts(post).default, id: idx}; });
}

export default getPosts();
