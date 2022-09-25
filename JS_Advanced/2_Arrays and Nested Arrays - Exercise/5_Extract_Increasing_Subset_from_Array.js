function extract(array) {
    let currElement = array[0];
    let result = [currElement];

    for (let i = 1; i < array.length; i++) {
        if (array[i] >= currElement) {
            currElement = array[i];
            result.push(currElement);
        } else {
            continue;
        }
    }
    return result;
}

extract([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
); // expected array : [ 1, 3, 8, 10, 12, 24 ]
extract([1,
    2,
    3,
    4]
); // [ 1, 2, 3, 4 ]
extract([20,
    3,
    2,
    15,
    6,
    1]
); // [ 20 ] 