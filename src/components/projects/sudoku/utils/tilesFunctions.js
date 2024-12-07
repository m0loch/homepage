export function FindDoubles(tiles) {
    return [];
}

export function FindEmptyTiles(tiles) {
    const found = tiles.findIndex(section =>
        section.findIndex(item =>
            item.value === null || item.value === ' '
        ) > -1
    );

    return found > -1;
}
