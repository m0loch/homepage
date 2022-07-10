function moveLeft(tiles, size) {

    const empty = tiles.findIndex(el => el === 0);

    if ((empty % size) === (size - 1)) {
        return { tiles };
    }

    let retValue = tiles.filter(el => el !== 0);
    retValue.splice(empty + 1, 0, 0);

    return {
        tiles: retValue,
        idx: empty,
        dir: 'Left',
    }
}

function moveRight(tiles, size) {

    const empty = tiles.findIndex(el => el === 0);

    if ((empty % size) === 0) {
        return { tiles };
    }

    let retValue = tiles.filter(el => el !== 0);
    retValue.splice(empty - 1, 0, 0);

    return {
        tiles: retValue,
        idx: empty,
        dir: 'Right',
    }
}

function moveUp(tiles, size) {

    const empty = tiles.findIndex(el => el === 0);

    if (empty >= (size * (size - 1))) {
        return { tiles };
    }

    let retValue = [...tiles];
    retValue[empty] = retValue.splice(empty + size, 1, retValue[empty])[0];
    return {
        tiles: retValue,
        idx: empty,
        dir: 'Up',
    }

}

function moveDown(tiles, size) {

    const empty = tiles.findIndex(el => el === 0);

    if (empty < size) {
        return { tiles };
    }

    let retValue = [...tiles];
    retValue[empty] = retValue.splice(empty - size, 1, retValue[empty])[0];
    return {
        tiles: retValue,
        idx: empty,
        dir: 'Down',
    }

}

function moveTile(tiles, tile, size) {

    const empty = tiles.findIndex(el => el === 0);
    const relativePos = tile - empty;

    switch (relativePos) {
        case 1: return moveLeft(tiles, size);
        case -1: return moveRight(tiles, size);
        case size: return moveUp(tiles, size);
        case -size: return moveDown(tiles, size);

        default: break;
    }

    return { tiles };
}

export { moveLeft, moveRight, moveUp, moveDown, moveTile };