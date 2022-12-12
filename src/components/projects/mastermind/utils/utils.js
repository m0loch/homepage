export function GenerateCode(digits, colorsNumber) {
    return Array.apply(
        0,
        { length: digits }
    ).map(() => Math.floor(Math.random() * colorsNumber));
}