const InitialState = {
    darkMode: false,
    fifteen: { size: 4 },
    mosaic: { imgName: 'ff7remake', img: '/assets/mosaic/ff7remake.jpg', rows: 5, cols: 10 },
    wordle: { difficulty: 1 },
    tetris: { },
    mastermind: { difficulty: 0 },
    tyles: { level: 0, scores: Array.apply(0, { length: 120 }).map(() => { return { bestScore: 0, isBest: false }}) },
    minesweeper: { difficulty: 1, sectionsState: [true, false, true, false] },
    talks: { selectedTalk: 0 },
    simon: { level: 8, reverseMode: false },
    sudoku: {
        level: 0,
        rows: 3,
        cols: 3,
        values: "   27  90  9 4 5817   3     5    7 9123   4 12 8  1  35  4  65 1  4    32 679 1 91     38",
     },
};

export default InitialState;