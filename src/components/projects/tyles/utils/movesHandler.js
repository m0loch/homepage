function toggleTyle(tyle) {
    return tyle[0] === '!' ? tyle
        : (tyle[0] === '0' ? '1' : '0') + tyle[1];
}

function standardTyleMove(tiles, x, y) {

    const tylesToFlip = [{ x, y }];
    if (x > 0) { tylesToFlip.push({ x: x - 1, y }) }
    if (y > 0) { tylesToFlip.push({ x, y: y - 1 }) }
    if (x < tiles[0].length - 1) { tylesToFlip.push({ x: x + 1, y }) }
    if (y < tiles.length - 1) { tylesToFlip.push({ x, y: y + 1 }) }

    tylesToFlip.forEach(({ x, y }) => tiles[y][x] = toggleTyle(tiles[y][x]));
    return tiles;
}

function powerTyleMove(tiles, x, y) {
    const tylesToFlip = [{ x, y }];
    if (x > 0) { tylesToFlip.push({ x: x - 1, y }) }
    if (y > 0) { tylesToFlip.push({ x, y: y - 1 }) }
    if (x < tiles[0].length - 1) { tylesToFlip.push({ x: x + 1, y }) }
    if (y < tiles.length - 1) { tylesToFlip.push({ x, y: y + 1 }) }
    if (x > 0 && y > 0) { tylesToFlip.push({ x: x - 1, y: y - 1 }) }
    if (x > 0 && y < tiles.length - 1) { tylesToFlip.push({ x: x - 1, y: y + 1 }) }
    if (x < tiles[0].length - 1 && y > 0) { tylesToFlip.push({ x: x + 1, y: y - 1 }) }
    if (x < tiles[0].length - 1 && y < tiles.length - 1) { tylesToFlip.push({ x: x + 1, y: y + 1 }) }

    tylesToFlip.forEach(({ x, y }) => tiles[y][x] = toggleTyle(tiles[y][x]));
    return tiles;
}

function diagonalTyleMove(tiles, x, y) {
    const tylesToFlip = [{ x, y }];
    if (x > 0 && y > 0) { tylesToFlip.push({ x: x - 1, y: y - 1 }) }
    if (x > 0 && y < tiles.length - 1) { tylesToFlip.push({ x: x - 1, y: y + 1 }) }
    if (x < tiles[0].length - 1 && y > 0) { tylesToFlip.push({ x: x + 1, y: y - 1 }) }
    if (x < tiles[0].length - 1 && y < tiles.length - 1) { tylesToFlip.push({ x: x + 1, y: y + 1 }) }

    tylesToFlip.forEach(({ x, y }) => tiles[y][x] = toggleTyle(tiles[y][x]));
    return tiles;
}

function rookTyleMove(tiles, x, y) {
    const tylesToFlip = [];

    tiles.forEach((row, rowIdx) => 
        row.forEach((item, colIdx) => {
            if (x === colIdx || y === rowIdx) {
                tylesToFlip.push({x: colIdx, y: rowIdx});
            }
        }
    ));

    tylesToFlip.forEach(({ x, y }) => tiles[y][x] = toggleTyle(tiles[y][x]));
    return tiles;
}

function PerformMove(tiles, x, y, value, modifier) {

    // Clicks on frozen tyles and holes will be ignored
    if (modifier === 'X' || value === '!') {
        return tiles;
    }

    switch (modifier) {
        case '*':
            return powerTyleMove(tiles, x, y, value, modifier);

        case '$':
            return diagonalTyleMove(tiles, x, y, value, modifier);

        case '+':
            return rookTyleMove(tiles, x, y, value, modifier);

        default:
            return standardTyleMove(tiles, x, y, value, modifier);
    }
}

export default PerformMove;