function solve(input) {
    let productList = {};
    for (const iteraror of input) {
        let [town, product, price] = iteraror.split(' | ');
        price = Number(price);
        if (productList[product] !== undefined) {
            if (productList[product].price <= price) {
                continue;
            } else {
                productList[product].price = Number(price);
                productList[product].town = town;
            }
        } else {
            productList[product] = { town: town, price: Number(price) };
        }
    }
    for (const key in productList) {
        console.log(`${key} -> ${productList[key].price} (${productList[key].town})`)
    }
}
solve(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
);