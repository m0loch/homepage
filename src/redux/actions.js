const clamp = (value, min, max) => { 
    const res = Math.min(Math.max(value, min), max);
//    console.log(res);
    return res;
};

// Fifteen
export function fifteenSetSize(value) {
    return {
        type: 'FIFTEEN_SET_SIZE',
        size: parseInt(value),
    }
}

// Mosaic
export function mosaicSetImage(value) {
    return {
        type: 'MOSAIC_SET_IMAGE',
        img: value,
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
