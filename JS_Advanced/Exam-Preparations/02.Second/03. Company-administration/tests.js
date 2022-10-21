let { assert } = require("chai");
let { companyAdministration } = require("./companyAdministration");

describe("tests for hiringEmployee func", () => {
    it("position should throw error if != Programmer", () => {
        assert.throw(() => {
            companyAdministration.hiringEmployee("GoSho", "Artist", 3),
                new Error(`We are not looking for workers for this position.`)
        });
        assert.throw(() => {
            companyAdministration.hiringEmployee("GoSho", "IT", 3),
                new Error(`We are not looking for workers for this position.`)
        });
    });
    it("exp == 3 should return hire", () => {
        assert.equal(companyAdministration.hiringEmployee("ToSho", "Programmer", 3),
            `ToSho was successfully hired for the position Programmer.`);
    });
    it("exp > 3 should return hire", () => {
        assert.equal(companyAdministration.hiringEmployee("ToSho", "Programmer", 10),
            `ToSho was successfully hired for the position Programmer.`);
    });
    it("exp < 3 should return not approve", () => {
        assert.equal(companyAdministration.hiringEmployee("ToSho", "Programmer", 2),
            `ToSho is not approved for this position.`);
    });
    it("exp < 3 should return not approve", () => {
        assert.equal(companyAdministration.hiringEmployee("ToSho", "Programmer", 0),
            `ToSho is not approved for this position.`);
    });

});

describe("tests for calculateSalary func", () => {
    it("input must be number type or should throw error", () => {
        assert.throw(() => {
            companyAdministration.calculateSalary("NOPE"),
                new Error("Invalid hours");
        });
        assert.throw(() => {
            companyAdministration.calculateSalary([]),
                new Error("Invalid hours");
        });
        assert.throw(() => {
            companyAdministration.calculateSalary({}),
                new Error("Invalid hours");
        });
    });
    it("input mustn`t be negative number or should throw error", () => {
        assert.throw(() => {
            companyAdministration.calculateSalary(-1),
                new Error("Invalid hours");
        });
    });
    it("should return correctly salary", () => {
        assert.equal(companyAdministration.calculateSalary(10), 150);
        assert.equal(companyAdministration.calculateSalary(1), 15);
        assert.equal(companyAdministration.calculateSalary(0), 0);
        assert.equal(companyAdministration.calculateSalary(1.4), 21);
    });
    it("should return correctly salary with bonus after 160hour", () => {
        assert.equal(companyAdministration.calculateSalary(160), 2400);
        assert.equal(companyAdministration.calculateSalary(161), 3415);
        assert.equal(companyAdministration.calculateSalary(322), 5830);

    });
});

describe("test firedEmployee func", () => {
    it("should throw error if first param is not array", () => {
        assert.throw(() => {
            companyAdministration.firedEmployee("array", 0), new Error("Invalid input")
        });
        assert.throw(() => {
            companyAdministration.firedEmployee({}, 0), new Error("Invalid input")
        });
        assert.throw(() => {
            companyAdministration.firedEmployee(10, 0), new Error("Invalid input")
        });
    });
    it("should throw error if second param is not number", () => {
        assert.throw(() => {
            companyAdministration.firedEmployee(["1", "2", "3"], "0"), new Error("Invalid input")
        });
        assert.throw(() => {
            companyAdministration.firedEmployee(["1", "2", "3"], {}), new Error("Invalid input")
        });
        assert.throw(() => {
            companyAdministration.firedEmployee(["1", "2", "3"], [1, 2, 3]), new Error("Invalid input")
        });
    });
    it("should throw error if second param is index out of range of first param", () => {
        assert.throw(() => {
            companyAdministration.firedEmployee([], 0), new Error("Invalid input")
        });
        assert.throw(() => {
            companyAdministration.firedEmployee(["1", "2", "3"], -1), new Error("Invalid input")
        });
        assert.throw(() => {
            companyAdministration.firedEmployee(["1", "2", "3"], 3), new Error("Invalid input")
        });
    });
    it("should remove corectly by index and return string result join by , ", () => {
        assert.equal(companyAdministration.firedEmployee(["1", "2", "3"], 2),
            "1, 2");
        assert.equal(companyAdministration.firedEmployee(["1", "2", "3"], 0),
            "2, 3");
        assert.equal(companyAdministration.firedEmployee(["1", "2", "3"], 1),
            "1, 3");
    });
    it("should remove corectly by index and return empty string if no more elements", () => {
        assert.equal(companyAdministration.firedEmployee(["1"], 0), "");
    });
    
});