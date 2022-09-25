function solve(array, rotation) {
    let currElement = '';
    for (let index = 1; index <= rotation; index++) {
        currElement = array.pop()
        array.unshift(currElement);
    }
    let result = array.join(' ');
    console.log(result);
}

solve(['1',
    '2',
    '3',
    '4'],
    2
); // expected output: "3 4 1 2"

solve(['Banana',
    'Orange',
    'Coconut',
    'Apple'],
    15
); //  "Orange Coconut Apple Banana"
