const loadSections = (source, rows, columns) => {

    const tiles = new Array(rows * columns);
    for (let a = 0; a < tiles.length; a++) tiles[a] = [];

    // EXAMPLE:
    // The rows x column format applies to the section structure
    // rows = 2
    // columns = 3

    let iterator = 0;
    for (let i = 0; i < columns; i++) {
      // Cycle on the vertical number of sections
      for (let j = 0; j < rows; j++) {
        // Cycle on the number of "section rows"
        for (let k = 0; k < columns * rows; k++) {
          // Cycle on actual columns
          tiles[i * rows + Math.floor(k / columns)]
            .push({ value: source[iterator] !== 0 ? source[iterator] : null, base: source[iterator] !== " " });
          iterator++;
        }
      }
    }

    return tiles;
}

const createNotes = (rows, columns) => {
    // Construct N empty sections
    const notes = new Array(rows * columns);
  
    // For each sections, construct N cells
    for (let i = 0; i < notes.length; i++) {
      notes[i] = new Array(rows * columns);
  
      // For each cell, construct N flags
      for (let j = 0; j < notes[i].length; j++) {
        notes[i][j] = new Array(rows * columns).fill(0);
      }
    }
  
    return notes;
}

function LevelLoader(rows, cols, values, levelSetter) {
    levelSetter ({
        rows,
        cols,
        tiles: loadSections(values, rows, cols),
        notes: createNotes(rows, cols),
    });
}

export default LevelLoader;