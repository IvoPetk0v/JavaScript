function solve(array) {
    let carRegister = new Map();
    array.forEach(element => {
        let [brand, model, number] = element.split(" | ");
        if (!carRegister.has(brand)) {
            carRegister.set(brand, {});
            carRegister.get(brand)[`${model}`] = Number(number);
        } else {
            if (!carRegister.get(brand).hasOwnProperty(model)) {
                carRegister.get(brand)[model] = Number(number);
            } else {
                carRegister.get(brand)[model] += Number(number)
            }
        }
    });
    for (const brand of carRegister) {
        let res = [];
        console.log(brand[0]);
        for (const key in brand[1]) {
            res.push(`###${key} -> ${brand[1][key]}`);
        }
        res = res.join("\n");
        console.log(res);
    }
}
solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
);
//expected output
// Audi
// ###Q7 -> 1000
// ###Q6 -> 100
// BMW
// ###X5 -> 1000
// ###X6 -> 100
// Citroen
// ###C4 -> 145
// ###C5 -> 10
// Volga
// ###GAZ-24 -> 1000000
// Lada
// ###Niva -> 1000000
// ###Jigula -> 1000000
