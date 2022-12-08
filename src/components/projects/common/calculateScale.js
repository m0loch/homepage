export function CalculateScaleWithTiles(
    baseWidth,
    baseHeight,
    horizontalTiles,
    verticalTiles,
) {
    const horizontalFit = baseWidth / horizontalTiles;
    const verticalFit = baseHeight / verticalTiles;

    if (horizontalFit < verticalFit) {
        return {
            width: baseWidth,
            height: baseWidth * (verticalTiles / horizontalTiles),
            scale: horizontalFit / horizontalTiles,
        }
    } else {
        return {
            width: baseHeight * (horizontalTiles / verticalTiles),
            height: baseHeight,
            scale: verticalFit / horizontalTiles,
        }
    }
}

export function CalculateFullscreenScale(renderer, texture) {
    let horizontalFit = renderer.width / texture.width;
    let verticalFit = renderer.height / texture.height;

    // Given the input, calculates how to fit the texture in the component by adapting to the "longest" side
    if (horizontalFit < verticalFit) {
        return {
            x: 0,
            y: (renderer.height - (texture.height * horizontalFit)) * 0.5 / window.devicePixelRatio,
            scale: horizontalFit / window.devicePixelRatio,
        }

    } else {
        return {
            x: (renderer.width - (texture.width * verticalFit)) * 0.5 / window.devicePixelRatio,
            y: 0,
            scale: verticalFit / window.devicePixelRatio,
        }
    }
}