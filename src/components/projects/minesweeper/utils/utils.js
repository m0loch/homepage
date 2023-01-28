export function DiscoverTile(field, x, y, settings) {

    if (field[y][x][1] === ''        // cell already discovered
        || field[y][x][1] === '!') { // flag set
        return;
    }

    // Discover cell
    field[y][x][1] = '';

    if (field[y][x][0] !== 0) { return; }

    // If the revea,
    if (x > 0 && y > 0) { DiscoverTile(field, x-1, y-1, settings); }
    if (y > 0) { DiscoverTile(field, x, y-1, settings); }
    if (x < settings.cols - 1 && y > 0) { DiscoverTile(field, x+1, y-1, settings); }
    if (x > 0) { DiscoverTile(field, x-1, y, settings); }
    if (x < settings.cols - 1) { DiscoverTile(field, x+1, y, settings); }
    if (x > 0 && y < settings.rows - 1) { DiscoverTile(field, x-1, y+1, settings); }
    if (y < settings.rows - 1) { DiscoverTile(field, x, y+1, settings); }
    if (x < settings.cols - 1 && y < settings.rows - 1) { DiscoverTile(field, x+1, y+1, settings); }
}

export function CheckVictory(field) {
    for (let y = 0; y < field.length; y++) {

        const row = field[y];
        for (let x = 0; x < row.length; x++) {

            if (row[x][0] !== 'X' && row[x][1] !== '') {
                // Found a tile that still needs to be clicked
                return false;
            }

        }
    }

    // No undiscovered blank space found: victory!
    return true;
}
