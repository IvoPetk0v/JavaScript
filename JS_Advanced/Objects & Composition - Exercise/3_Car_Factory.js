function solve(carOrder) {
    let newCar = {
        model: '',
        engine: {},
        carriage: {},
        wheels: [],
    };
    newCar.model = carOrder.model;
    newCar.engine = setupEngine();
    newCar.carriage = setupCarriage();
    function setupEngine() {
        let engine = {};
        if (carOrder.power <= 90) {
            engine = { power: 90, volume: 1800 };
        } else if (carOrder.power <= 120) {
            engine = { power: 120, volume: 2400 };
        } else if (carOrder.power <= 200) {
            engine = { power: 200, volume: 3500 };
        }
        return engine;
    };
    function setupCarriage() {
        let carriage = {
            type: carOrder.carriage,
            color: carOrder.color
        };
        return carriage;
    };

    if (carOrder.wheelsize % 2 === 0) {
        let wheelSize = carOrder.wheelsize - 1;
        newCar.wheels = [wheelSize, wheelSize, wheelSize, wheelSize];
    } else {
        let wheelSize = carOrder.wheelsize;
        newCar.wheels = [wheelSize, wheelSize, wheelSize, wheelSize];
    };
    return newCar;
}
console.log(solve({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));
console.log(solve({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}
));