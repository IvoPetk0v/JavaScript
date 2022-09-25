function solve(matrix) {
    let isMagic = true;

    for (let row = 0; row < matrix.length - 1; row++) {
        let sumCurrRow = matrix[row].reduce((sum, el) => sum + el);
        let sumNextRow = matrix[row + 1].reduce((sum, el) => sum + el);
        let sumCurrCol = 0;
        let sumNextCol = 0;

        for (let col = 0; col < matrix.length; col++) {
            sumCurrCol += matrix[row][col];
            sumNextCol += matrix[row + 1][col];
        }
        if (sumCurrRow !== sumNextRow || sumCurrCol !== sumNextCol) {
            isMagic = false;
            return isMagic;
        }
    }
    return isMagic;
}

console.log(solve([
[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]
)); // expected ouput : true

console.log(solve([
[11, 32, 45],
[21, 0, 1],
[21, 1, 1]]
)); // false 

console.log(solve([
[1, 0, 0],
[0, 0, 1],
[0, 1, 0]]
)); // true