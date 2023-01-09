const clamp = (value, min, max) => { 
    return Math.min(Math.max(value, min), max);
};

// Common
export function mainSetDarkMode(value) {
    return {
        type: 'MAIN_SET_DARK_MODE',
        value: value,
    }
}

// Fifteen
export function fifteenSetSize(value) {
    return {
        type: 'FIFTEEN_SET_SIZE',
        size: parseInt(value),
    }
}

// Mosaic
export function mosaicSetImage(value) {
    const tokz = value.split('/');
    return {
        type: 'MOSAIC_SET_IMAGE',
        img: value,
        imgName: tokz[tokz.length - 1].split('.')[0],
    }
}

export function mosaicSetRows(value) {
    return {
        type: 'MOSAIC_SET_ROWS',
        rows: clamp(parseInt(value), 2, 7),
    }
}

export function mosaicSetCols(value) {
    return {
        type: 'MOSAIC_SET_COLS',
        cols: clamp(parseInt(value), 3, 15),
    }
}

// Wordle
export function wordleSetDifficulty(value) {
    return {
        type: 'WORDLE_SET_DIFFICULTY',
        difficulty: parseInt(value),
    }
}

// Mastermind
export function mastermindSetDifficulty(value) {
    return {
        type: 'MASTERMIND_SET_DIFFICULTY',
        difficulty: parseInt(value),
    }
}

// Tyles
export function tylesSetLevel(value) {
    return {
        type: 'TYLES_SET_LEVEL',
        level: parseInt(value),
    }
}

export function tylesSetLevelBestScore(levelIdx, value) {
    return {
        type: 'TYLES_SET_LEVEL_BEST_SCORE',
        level: levelIdx,
        score: value,
    }
}

// Minesweeper
export function minesweeperSetDifficulty(value) {
    return {
        type: 'MINESWEEPER_SET_DIFFICULTY',
        difficulty: parseInt(value),
    }
}
