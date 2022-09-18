function print(array, step) {
    let resultArray = [];
    for (let i = 0; i < array.length; i += step) {
        resultArray.push(array[i]);
    }
    return resultArray;
}

print(['5',
    '20',
    '31',
    '4',
    '20'],
    2
);               // expected output: return an array == ['5', '31', '20']
print(['dsa',
    'asd',
    'test',
    'tset'],
    2
);               // ['dsa', 'test']
print(['1',
    '2',
    '3',
    '4',
    '5'],
    6
);                   // ['1']