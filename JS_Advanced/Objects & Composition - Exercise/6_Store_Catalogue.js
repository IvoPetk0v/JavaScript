function solve(input) {
    let catalog = [];
    for (const iterator of input) {
        let [product, price] = iterator.split(' : ');
        price = Number(price);
        catalog.push({ name: product, price: price })
        catalog[product] = price;
    }
    catalog = catalog.sort((a, b) => a.name.localeCompare(b.name));

    let groupLetter = catalog[0].name.charAt(0);
    console.log(groupLetter);
    for (const element of catalog) {
        if (groupLetter !== element.name.charAt(0)) {
            groupLetter = element.name.charAt(0);
            console.log(groupLetter)
            console.log(`  ${element.name}: ${[element.price]}`)
        } else {

            console.log(`  ${element.name}: ${[element.price]}`)
        }
    }
}

solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
);
