function readLevel(data, levelSetter) {
    const lvl = JSON.parse(data);

    // LOAD TYPES OF TYLES FOR CURRENT LEVEL
    const field = JSON.stringify(lvl.level);
    const types = [];
    [...'*$+X'].forEach(char => { if (field.indexOf(char) > -1) types.push(char) });

    // return callback
    levelSetter({
        moves: 0,
        minMoves: lvl.minNumberOfMoves,
        solutions: lvl.moves,
        tiles: lvl.level,
        rows: lvl.level.length,
        columns: lvl.level[0].length,
        types
    });
}

function LevelLoader(folder, levelIndex, levelSetter) {
    fetch(`${folder}/level${levelIndex}.json`)
        .then(response => response.text())
        .then(text => readLevel(text, levelSetter));
}

export default LevelLoader;