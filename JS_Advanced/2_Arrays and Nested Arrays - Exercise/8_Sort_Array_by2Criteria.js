function solve(array) {
    let sortArray = array.sort((a, b) => {
        if (a.length !== b.length) {
            return a.length - b.length
        } else {
            return a.localeCompare(b)
        }
    });
    for (const element of sortArray) {
        console.log(element);
    }
}

solve(['alpha',
    'beta',
    'gamma']
);
solve(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']
);
solve(['test',
    'Deny',
    'omen',
    'Default']
);