let { assert } = require('chai');
const { lookupChar } = require("./3.Char Lookup");

describe("checking for expected return with wrong input types params", () => {
    it("must return undefined if first param is not string type", () => {
        assert.equal(lookupChar(false, 1), undefined)
    });
    it("must return undefined if second param is not number type", () => {
        assert.equal(lookupChar("1", "1"), undefined);
    });
    it("must return undefined if called without any param", () => {
        assert.equal(lookupChar(), undefined);
    });
    it("must return undefined if second param is decimal number", () => {
        assert.equal(lookupChar("GetOut", 0.1), undefined);
    })

});

describe("checking for correctly index boundaries ", () => {
    it('If index is out of range in string`s length, must return "Incorrect index"', () => {
        assert.equal(lookupChar("123", 3), "Incorrect index");
        assert.equal(lookupChar("", 0), "Incorrect index");
    });
    it('If index is out of range in string`s length, must return "Incorrect index"', () => {
        assert.equal(lookupChar("123", 5), "Incorrect index");
    });
    it('If index is negative number, must return "Incorrect index"', () => {
        assert.equal(lookupChar("123", -1), "Incorrect index");
    });
});

describe("checking for return proper char by index", () => {
    it("it should return correct char by index from string", () => {
        assert.equal(lookupChar("123", 0), '1');
        assert.equal(lookupChar("123", 1), '2');
        assert.equal(lookupChar("123", 2), '3');
    });
});