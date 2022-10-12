let { assert } = require("chai");
const { isOddOrEven } = require("./02.Even or Odd");


describe("test is checking isOddorEven func work properly", () => {
    it("Result should be undefine when input is not type String", () => {
        assert.equal(isOddOrEven(Number(1), undefined));
    });
    it("Even lenght of input string should return Even ",()=>{
        assert.equal(isOddOrEven(""),"even");
    });
    it("Odd lenght of input string should return odd",()=>{
        assert.equal(isOddOrEven(" "),"odd");
    })
})