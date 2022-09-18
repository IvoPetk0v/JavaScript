function solve(array, delimiter) {
    let result = array.join(delimiter, array);
    console.log(result);
}

solve(['One',
    'Two',
    'Three',
    'Four',
    'Five'],
    '-'
);  // expeceted output : "One-Two-Three-Four-Five"
solve(['How about no?',
    'I',
    'will',
    'not',
    'do',
    'it!'],
    '_'
);   // expected output :  "How about no?_I_will_not_do_it!"