function solve(array) {
    array.sort((a, b) => a.localeCompare(b));
    for (let i = 0; i < array.length; i++) {
        console.log((i + 1).toString() + '.' + array[i]);
    }
}

solve(["John", "Bob", "Christina", "Ema"]);  
// expected output: 
// 1.Bob
// 2.Christina
// 3.Ema
// 4.John

