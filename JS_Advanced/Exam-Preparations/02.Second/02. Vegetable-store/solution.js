class VegetableStore {

    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }

    loadingVegetables(vegetables) {
        let result = new Set();
        vegetables.forEach(element => {
            let [type, quantity, price] = element.split(" ");
            if (!this.availableProducts.find(e => e.type === type)) {
                let currVege = { type, quantity: Number(quantity), price: Number(price) }
                this.availableProducts.push(currVege);
                result.add(type);
            } else {
                let storedVege = this.availableProducts.find(e => e.type === type);
                let currVege = { type, quantity: Number(quantity), price: Number(price) };
                storedVege.quantity += currVege.quantity;
                if (storedVege.price < currVege.price) {
                    storedVege.price = currVege.price;
                }
                result.add(type);
            }
        });
        return `Successfully added ${Array.from(result).join(", ")}`
    }

    buyingVegetables(selectedProducts) {
        let totalPrice = 0.00;
        selectedProducts.forEach(element => {
            let [typeProduct, qtyProduct] = element.split(" ");
            qtyProduct = Number(qtyProduct);
            if (!this.availableProducts.find(e => e.type === typeProduct)) {
                throw new Error(`${typeProduct} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            } else {
                let storedVege = this.availableProducts.find(e => e.type === typeProduct);
                if (storedVege.quantity < qtyProduct) {
                    throw new Error(`The quantity ${qtyProduct} for the vegetable ${typeProduct} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
                }
                storedVege.quantity -= qtyProduct;
                totalPrice += qtyProduct * storedVege.price;
            }
        });
        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`
    }

    rottingVegetable(type, quantity) {
        if (!this.availableProducts.find(e => e.type === type)) {
            throw new Error(`${type} is not available in the store.`);
        } else {
            let storedVege = this.availableProducts.find(e => e.type === type);
            if (storedVege.quantity < quantity) {
                storedVege.quantity = 0;
                return `The entire quantity of the ${type} has been removed.`
            } else {
                storedVege.quantity -= quantity;
                return `Some quantity of the ${type} has been removed.`;
            }
        }
    }

    revision() {
        let result = "Available vegetables:\n";
       let sorted= this.availableProducts.sort((a, b) => a.price - b.price);
        let secRowString = "";
        sorted.forEach(element => {
            secRowString += `${element.type}-${element.quantity}-$${element.price}\n`;
        });
        result += secRowString;
        result += `The owner of the store is ${this.owner}, and the location is ${this.location}.`
        return result;
    }
}

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());
