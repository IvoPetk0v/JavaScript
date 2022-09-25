function solve(fruitType,weightInGrams,pricePerKilo) {
    let weightInKilograms=weightInGrams/1000;
    console.log(`I need $${(pricePerKilo*weightInKilograms).toFixed(2)} to buy ${weightInKilograms.toFixed(2)} kilograms ${fruitType}.`);
}
solve('orange', 2500, 1.80);
solve('apple', 1563, 2.35);