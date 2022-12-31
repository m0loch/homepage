const minMovesRegEx = /minNumberOfMoves:\n([0-9+])/;
const solutionsRegEx = /moves:([0-9\s\n]*)/;
const fieldRegEx = /level:([.X+$!*\d\s\n]*)/;

function interpretSolutions(rawSolutions) {
    const possibleSolutions = rawSolutions.split('\n\n\n') // splits different solutions
        .map(solution =>
            solution.split('\n') // splits to rows
                .filter(row => row.length > 0) // empty lines removal
                .map(row => row.split(' ').map(elem => parseInt(elem)))
        );

    return possibleSolutions;
}

function interpretField(rawField) {
    /* MODIFIERS:
    !   hole (no tile should be painted)
    0   tile is off
    1   tile is on

    .   standard tile   (flips adjacent ones)
    *   power tile      (flips also diagonal ones)
    $   diagonal tile   (flips ALSO diagonally adjacent tiles)
    +   rook tile       (flips every tile on the same line and column)

    X   frozen tile     (can't be clicked)
    */

    return rawField
        .split('\n')
        .filter(row => row.length > 0)
        .map(row => row.split(' '));
}

function readLevel(data, levelSetter) {

    /* LOAD MIN NUMBER OF MOVES */
    const minMoves = data.match(minMovesRegEx)[1];

    /* LOAD POSSIBLE SOLUTIONS */
    const solutions = interpretSolutions(data.match(solutionsRegEx)[1]);

    /* LOAD INITIAL CONFIG */
    const tiles = interpretField(data.match(fieldRegEx)[1]);

    // return callback
    levelSetter({ minMoves, solutions, tiles, rows: tiles.length, columns: tiles[0].length });
}

function LevelLoader(folder, levelIndex, levelSetter) {
    fetch(`${folder}/level${levelIndex}.txt`)
        .then(response => response.text())
        .then(text => readLevel(text, levelSetter));
}

export default LevelLoader;