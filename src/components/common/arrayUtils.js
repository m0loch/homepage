export function CloneArray(array) {
    if (!array) return null;
    return JSON.parse(JSON.stringify(array));
}