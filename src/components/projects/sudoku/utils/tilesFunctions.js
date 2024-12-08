export function createErrors (rows, columns) {
    // Construct N empty sections
    const structure = new Array(rows * columns);
  
    // For each sections, construct N cells
    for (let i = 0; i < structure.length; i++) {
        structure[i] = new Array(rows * columns).fill(0);
    }

    return structure;
}

export function FindErrors(tiles, level) {

    const errors = createErrors(level.rows, level.cols);

    // Check sections
    tiles.forEach((element, idx) => {
        const section = [];
        for (let i = 0; i < element.length; i++) {
            const tile = element[i];
            section.push({
                value: tile.value,
                section: idx,
                idx: i,
            });
        }

        // For each section:
        const duplicates = section.filter(
            (item, index) => section.some(
                (elem, idx) => 
                    elem.value !== null &&
                    elem.value !== ' ' &&
                    elem.value === item.value &&
                    idx !== index
            )
        );

        // Save duplicates
        duplicates.forEach(item => errors[item.section][item.idx] = 1);
    });

    // Check rows
    for (let m = 0; m < level.cols; m++) {
        for (let k = 0; k < level.rows; k++) {

            // For each row:
            const row = [];

            for (let i = 0; i < level.rows; i++) {
                for (let j = 0; j < level.cols; j++) {
                    const tile = tiles[Math.floor(i / level.rows) * level.rows + i % level.rows + m * level.rows][j % level.cols + k * level.cols];
                    row.push({
                        value: tile.value,
                        section: Math.floor(i / level.rows) * level.rows + i % level.rows + m * level.rows,
                        idx: j % level.cols + k * level.cols,
                    });
                }
            }

            const duplicates = row.filter(
                (item, index) => row.some(
                    (elem, idx) => 
                        elem.value !== null &&
                        elem.value !== ' ' &&
                        elem.value === item.value &&
                        idx !== index
                )
            );

            // Save duplicates
            duplicates.forEach(item => errors[item.section][item.idx] = 1);
        }
    }

    // Check columns
    for (let m = 0; m < level.rows; m++) {
        for (let k = 0; k < level.cols; k++) {

            // For each column:
            const column = [];

            for (let i = 0; i < level.cols; i++) {
                for (let j = 0; j < level.rows; j++) {
                    const tile = tiles[Math.floor(i / level.cols) * level.cols + i % level.cols * level.rows + m][j * level.cols + k];
                    column.push({
                        value: tile.value,
                        section: Math.floor(i / level.cols) * level.cols + i % level.cols * level.rows + m,
                        idx: j * level.cols + k,
                    });
                }
            }

            const duplicates = column.filter(
                (item, index) => column.some(
                    (elem, idx) => 
                        elem.value !== null &&
                        elem.value !== ' ' &&
                        elem.value === item.value &&
                        idx !== index
                )
            );

            // Save duplicates
            duplicates.forEach(item => errors[item.section][item.idx] = 1);
        }
    }

    return errors;
}

export function FindEmptyTiles(tiles) {
    const found = tiles.findIndex(section =>
        section.findIndex(item =>
            item.value === null || item.value === ' '
        ) > -1
    );

    return found > -1;
}

export function CheckErrors(tiles) {
    const found = tiles.findIndex(section =>
        section.findIndex(item =>
            item === 1
        ) > -1
    );

    return found > -1;
}