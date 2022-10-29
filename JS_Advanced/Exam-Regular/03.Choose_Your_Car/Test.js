let { assert } = require("chai");
let { chooseYourCar } = require("./chooseYourCar");

describe("testing choosingType func", () => {
    it("should throw error if year is less than 1900", () => {

        assert.throw(() => chooseYourCar.choosingType("Sedan", "black", 1899), "Invalid Year!")

    });
    it("should throw error if year is less than 1900", () => {

        assert.throw(() => chooseYourCar.choosingType("Sedan", "black", 1700), "Invalid Year!")

    });
    it("should throw error if year is more than 2022", () => {

        assert.throw(() => chooseYourCar.choosingType("Sedan", "black", 2023), "Invalid Year!")

    });
    it("should throw error if year is more than 2022", () => {

        assert.throw(() => chooseYourCar.choosingType("Sedan", "black", 2023), "Invalid Year!")

    });
    it("should throw error if type is not Sedan", () => {

        assert.throw(() => chooseYourCar.choosingType("NotSedan", "black", 2022),
            "This type of car is not what you are looking for.")

    });
    it("If the year  is greater or equal to 2010, return the string for picking car", () => {
        assert.equal(chooseYourCar.choosingType("Sedan", "black", 2010),
            `This black Sedan meets the requirements, that you have.`);
    });
    it("If the year  is greater or equal to 2010, return the string for picking car", () => {
        assert.equal(chooseYourCar.choosingType("Sedan", "black", 2011),
            `This black Sedan meets the requirements, that you have.`);
    });
    it("If the year  is Not greater or equal to 2010, return the string for Not picking car", () => {
        assert.equal(chooseYourCar.choosingType("Sedan", "black", 2009),
            `This Sedan is too old for you, especially with that black color.`);
    });
    it("If the year  is Not greater or equal to 2010, return the string for Not picking car", () => {
        assert.equal(chooseYourCar.choosingType("Sedan", "black", 2000),
            `This Sedan is too old for you, especially with that black color.`);
    });
    it("if type is not Sedan", () => {
        assert.equal(chooseYourCar.choosingType("Sedan", "black", 2000),
            `This Sedan is too old for you, especially with that black color.`);
    });
});

describe("tests for brandName func", () => {
    it("input first param must be array or throw error", () => {

        assert.throw(() => chooseYourCar.brandName({}, 0),
            "Invalid Information!")

    });
    it("input second param must be valid index of first param or throw error", () => {
        assert.throw(() => chooseYourCar.brandName([], 0),
            "Invalid Information!");
    });
    it("input second param must be valid index of first param or throw error", () => {
        assert.throw(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 3),
            "Invalid Information!");
    });
    it("input second param must be valid index of first param or throw error", () => {
        assert.throw(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], -1),
            "Invalid Information!");
    });
    it("should return array without element on pointed index", () => {

        assert.equal(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 0),
            "Toyota, Peugeot");

    });
    it("should return array without element on pointed index", () => {
        () => {
            assert.equal(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 2),
                "BMW, Toyota");
        }
    });
    it("should return array without element on pointed index", () => {
        () => {
            assert.equal(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 1),
                "BMW, Peugeot");
        }
    });
    it("should return array without element on pointed index", () => {
        () => {
            assert.equal(chooseYourCar.brandName(["BMW"], 0),
                "");
        }
    });
});

describe("tests for CarFuelConsumption func", () => {
    it("input params must be numbers or throw error", () => {

        assert.throw(() => chooseYourCar.carFuelConsumption(2, {}),
            "Invalid Information!");

    });
    it("input params must be numbers or throw error", () => {

        assert.throw(() => chooseYourCar.carFuelConsumption(3, "2"),
            "Invalid Information!");

    });
    it("input params must be numbers or throw error", () => {

        assert.throw(() => chooseYourCar.carFuelConsumption([], 2),
            "Invalid Information!");
    });
    it("input params mustn`t be negative numbers or throw error", () => {

        assert.throw(() => chooseYourCar.carFuelConsumption(-1, 2),
            "Invalid Information!")

    });
    it("input params mustn`t be negative numbers or throw error", () => {

        assert.throw(() => chooseYourCar.carFuelConsumption(2, -2),
            "Invalid Information!")

    });
    it("if consumpt is below or equal to 7 return string for efficient", () => {
        assert.equal(chooseYourCar.carFuelConsumption(100, 7),
            "The car is efficient enough, it burns 7.00 liters/100 km.")
    });
    it("if consumpt is below or equal to 7 return string for efficient", () => {
        assert.equal(chooseYourCar.carFuelConsumption(100, 6),
            "The car is efficient enough, it burns 6.00 liters/100 km.")
    });
    it("if consumpt is below or equal to 7 return string for efficient", () => {
        assert.equal(chooseYourCar.carFuelConsumption(100, 6.5),
            "The car is efficient enough, it burns 6.50 liters/100 km.")
    });
    it("if consumpt is below or equal to 7 return string for efficient", () => {
        assert.equal(chooseYourCar.carFuelConsumption(100.5, 6.5),
            "The car is efficient enough, it burns 6.47 liters/100 km.")
    });
    it("if consumpt is more than 7 return string for Not efficient", () => {
        assert.equal(chooseYourCar.carFuelConsumption(100, 8),
            "The car burns too much fuel - 8.00 liters!")
    });
    it("if consumpt is more than 7 return string for Not efficient", () => {
        assert.equal(chooseYourCar.carFuelConsumption(100, 7.01),
            "The car burns too much fuel - 7.01 liters!")
    });
    it("if consumpt is more than 7 return string for Not efficient", () => {
        assert.equal(chooseYourCar.carFuelConsumption(100.5, 7.5),
            "The car burns too much fuel - 7.46 liters!")
    });
});