export function GenerateCode(digits, colorsNumber) {
    return Array.apply(
        0,
        { length: digits }
    ).map(() => Math.floor(Math.random() * colorsNumber));
}

export function CheckCode(test, solution) {
    const wrongGuesses = [], missingFromSolution = [];
    let correct = 0, wrongPos = 0;

    // Scan for right color in right place
    for (let i = 0; i < solution.length; i++) {
        if (test[i] === solution[i]) {
            correct++;
        } else {
            wrongGuesses.push(test[i]);
            missingFromSolution.push(solution[i]);
        }
    }

    // Scan for colors in the wrong places
    while (missingFromSolution.length) {
        const value = missingFromSolution.pop();
        const wrongHit = wrongGuesses.findIndex(item => item === value);

        if (wrongHit > -1) {
            wrongGuesses.splice(wrongHit, 1);
            wrongPos++;
        }
    }

    return { correct, wrongPos };
}