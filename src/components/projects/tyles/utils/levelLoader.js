const minMovesRegEx = /minNumberOfMoves:\n([0-9+])/;
const solutionsRegEx = /moves:([0-9\s\n]*)/;
const fieldRegEx = /level:([.X+$!*\d\s\n]*)/;

function interpretSolutions(rawSolutions) {
    const possibleSolutions = rawSolutions.split('\n\n\n') // splits different solutions
        .map(solution =>
            solution.split('\n') // splits to rows
                .filter(row => row.length > 0) // empty lines removal
                .map(row => row
                    .split(' ')
                    .filter(item => item.length > 0)
                    .map(elem => parseInt(elem))
                )
        );

    return possibleSolutions;
}

function interpretField(rawField) {
    return rawField
        .split('\n')
        .filter(row => row.length > 0)
        .map(row => row.split(' ').filter(item => item.length > 0));
}

function readLevel(data, levelSetter) {

    /* LOAD MIN NUMBER OF MOVES */
    const minMoves = parseInt(data.match(minMovesRegEx)[1]);

    /* LOAD POSSIBLE SOLUTIONS */
    const solutions = interpretSolutions(data.match(solutionsRegEx)[1]);

    /* LOAD INITIAL CONFIG */
    const field = data.match(fieldRegEx)[1];
    const tiles = interpretField(field);

    /* LOAD TYPES OF TYLES FOR CURRENT LEVEL */
    const types = [];
    [...'*$+X'].forEach(char => { if (field.indexOf(char) > -1) types.push(char) });

    // return callback
    levelSetter({
        moves: 0,
        minMoves,
        solutions,
        tiles,
        rows: tiles.length,
        columns: tiles[0].length,
        types
    });
}

function LevelLoader(folder, levelIndex, levelSetter) {
    fetch(`${folder}/level${levelIndex}.txt`)
        .then(response => response.text())
        .then(text => readLevel(text, levelSetter));
}

export default LevelLoader;