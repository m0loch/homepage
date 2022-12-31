const InitialState = {
    darkMode: false,
    fifteen: { size: 4 },
    mosaic: { imgName: 'ff7remake', img: '/assets/mosaic/ff7remake.jpg', rows: 5, cols: 10 },
    wordle: { difficulty: 1 },
    tetris: { },
    mastermind: { difficulty: 0 },
    tyles: { level: 0, scores: Array.apply(0, { length: 120 }).map(() => 0) }
};

export default InitialState;