function solve(number) {
    let numberToString = number + '';
    let firstDigit = numberToString[0];
    let sumOfDigits = Number(firstDigit);
    let isAllTheSame = true;
    for (let i = 1; i < numberToString.length; i++) {
        if (numberToString[i] !== firstDigit) {
            isAllTheSame = false;
        }
        sumOfDigits += Number(numberToString[i]);
    }
    console.log(isAllTheSame);
    console.log(sumOfDigits);
}

solve(2222222);
solve(1234);