function solve(array) {
    let juiceList = new Map();
    let bottleList = new Map();

    array.forEach(element => {
        [flavour, qty] = element.split(" => ")
        if (juiceList.has(flavour)) {
            let sumValue = juiceList.get(flavour) + Number(qty);
            fillBottles(sumValue, flavour);
        } else {
            let sumValue = Number(qty);
            fillBottles(sumValue, flavour);
        }
        function fillBottles(sumValue, flavour) {
            if (sumValue >= 1000) {
                let value = parseInt(sumValue / 1000);
                sumValue -= value * 1000;
                if (bottleList.has(flavour)) {
                    let bottleValue = bottleList.get(flavour) + value;
                    bottleList.set(flavour, bottleValue);
                } else {
                    bottleList.set(flavour, value);
                }
            }
            juiceList.set(flavour, sumValue);
        }
    });
    for (const kvp of bottleList) {
        console.log(kvp.join(" => "));
    }
}

solve(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']
);
// expected output: 
// Orange => 2
// Peach => 2

solve(
    ['Kiwi => 234',
        'Pear => 2345',
        'Watermelon => 3456',
        'Kiwi => 4567',
        'Pear => 5678',
        'Watermelon => 6789']
);
// expected output: 
// Pear => 8
// Watermelon => 10
// Kiwi => 4
