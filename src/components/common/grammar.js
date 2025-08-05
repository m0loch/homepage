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

export function listToString(list) {
    if (!list || list.length === 0) {
        return "";
    }
    if (list.length === 1) {
        return list[0];
    }
    if (list.length === 2) {
        return `${list[0]} and ${list[1]}`;
    }
    return `${list.slice(0, -1).join(', ')}, and ${list[list.length - 1]}`;
}