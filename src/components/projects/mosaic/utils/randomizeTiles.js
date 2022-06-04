function RandomizeTiles(tilesNumber, isDebug = false) {
    // Builds the initial shufflebag
    let bag = [];
    for (let i = 0; i < tilesNumber; i++) {
        bag.push(i);
    }

    let result = [];

    // Random picking
    while (bag.length > 0) {
        if (isDebug) {
            result.push(
                bag.splice(bag.length === 2 ? 1 : 0, 1)[0]
            );
            continue;
        }

        result.push(
            bag.splice(Math.floor(Math.random() * bag.length), 1)[0]
        );
    }

    return result;
}

export default RandomizeTiles;