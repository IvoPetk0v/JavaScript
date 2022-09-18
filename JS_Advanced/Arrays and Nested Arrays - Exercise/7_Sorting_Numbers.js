function solve(array) {
    let length = array.length;
    array.sort((a, b) => a - b);
    let reversedArray = array.slice().reverse();
    let result = [];
    for (let i = 0; i < length; i++) {
        if (i % 2 === 0) {
            result.push(array.shift());
        } else {
            result.push(reversedArray.shift());
        }
    }
    return result;
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]); //[-3, 65, 1, 63, 3, 56, 18, 52, 31, 48]
