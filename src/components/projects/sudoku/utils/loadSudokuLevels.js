function LoadSudokuLevels(folder) {
    // Reads all the .txt files in the data subfolders
    const levels = require.context('../data/levels', true, /\.js$/);

    // Retrieves the default export for each module
    return levels.keys().map(item => levels(item).default);
}

export default LoadSudokuLevels;