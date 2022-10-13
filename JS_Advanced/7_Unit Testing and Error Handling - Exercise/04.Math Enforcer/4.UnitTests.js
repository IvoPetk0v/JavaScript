const { assert } = require('chai');
let { mathEnforcer } = require("./4.Math Enforcer");

describe("functionality of mathEnforcer obj", () => {
    describe("functionality of addFive property", () => {
        it("if param isn`t number type return undefine", () => {
            assert.equal(mathEnforcer.addFive("nope"), undefined);
            assert.equal(mathEnforcer.addFive(false), undefined);
            assert.equal(mathEnforcer.addFive({}), undefined);
            assert.equal(mathEnforcer.addFive(),undefined);
        });
        it("if param is valid should return correct value", () => {
            assert.equal(mathEnforcer.addFive(1), 6);
            assert.equal(mathEnforcer.addFive(0.1), 5.1);
            assert.equal(mathEnforcer.addFive(0), 5);
            assert.equal(mathEnforcer.addFive(-1),4);
            assert.equal(mathEnforcer.addFive(-0.1),4.9);
        });
    });
    describe("functionality of subtractTen property", () => {
        it("if param isn`t number type return undefine", () => {
            assert.equal(mathEnforcer.subtractTen("nope"), undefined);
            assert.equal(mathEnforcer.subtractTen(false), undefined);
            assert.equal(mathEnforcer.subtractTen({}), undefined);
            assert.equal(mathEnforcer.subtractTen(),undefined);
        });
        it("if param is valid should return correct value", () => {
            assert.equal(mathEnforcer.subtractTen(10), 0);
            assert.equal(mathEnforcer.subtractTen(10.1), 0.09999999999999964);
            assert.equal(mathEnforcer.subtractTen(0), -10);
            assert.equal(mathEnforcer.subtractTen(-1),-11);
            assert.equal(mathEnforcer.subtractTen(-0.1),-10.1);
        });
    });
    describe("functionality of sum property", () => {
        it("if any of input 2 params are not number must return undefined", () => {
            assert.equal(mathEnforcer.sum("nope", 3), undefined);
            assert.equal(mathEnforcer.sum(1, "nope"), undefined);
            assert.equal(mathEnforcer.sum(), undefined);
        });
        it("if input params are valid should return sum of them", () => {
            assert.equal(mathEnforcer.sum(0, 0), 0);
            assert.equal(mathEnforcer.sum(1, 2), 3);
            assert.equal(mathEnforcer.sum(0.1, 1), 1.1);
            assert.equal(mathEnforcer.sum(100, -5), 95);
            assert.equal(mathEnforcer.sum(-5,-1),-6);
            assert.equal(mathEnforcer.sum(-0.1,-0.2),-0.30000000000000004);
        });
    });
});