export function ordinal(value) {
    let digit = value % 10;

    if ((value % 100) <= 10 || (value % 100) >= 14) {
        if (digit === 1) {
            return `${value}st`;
        }

        if (digit === 2) {
            return `${value}nd`;
        }

        if (digit === 3) {
            return `${value}rd`;
        }
    }
    return `${value}th`;
}