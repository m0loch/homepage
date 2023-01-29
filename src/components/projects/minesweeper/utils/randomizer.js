// Support for PlaceMine()
function Increment(field, y, x) {
    if (field[y][x][0] !== 'X') {
        field[y][x][0]++;
    }
}

// Places a mine and updates the adjacent cells' counter
function PlaceMine(field, { x, y }) {
    field[y][x][0] = 'X';
    if (y > 0 && x > 0) {
        Increment(field, y-1, x-1);
    }
    if (y > 0) {
        Increment(field, y-1, x);
    }
    if (y > 0 && x < field[0].length-1) {
        Increment(field, y-1, x+1);
    }
    if (x > 0) {
        Increment(field, y, x-1);
    }
    if (x < field[0].length-1) {
        Increment(field, y, x+1);
    }
    if (y < field.length-1&& x > 0) {
        Increment(field, y+1, x-1);
    }
    if (y < field.length-1) {
        Increment(field, y+1, x);
    }
    if (y < field.length-1 && x < field[0].length-1) {
        Increment(field, y+1, x+1);
    }
}

function Randomizer(x, y, { rows, cols, mines }, field) {

    // 1. generate a shuffle bag with every available cell
    let candidates = [];
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            // (without the one that has been pressed, obviously)
            if (i !== x && y !== j) {
                candidates.push({x: i, y: j});
            }
        }
    }

    // 2. randomize the mines' placement
    let minesToPlace = [];
    for (let k = 0; k < mines; k++) {
        let mine = candidates.splice(Math.floor(Math.random() * candidates.length), 1)[0];
        minesToPlace.push(mine);
    }

    // 3. place mines and update
    minesToPlace.forEach((mine) => {
        PlaceMine(field, mine);
    });
}

export default Randomizer;