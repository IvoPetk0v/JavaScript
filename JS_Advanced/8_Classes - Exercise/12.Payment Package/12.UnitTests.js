let { assert } = require("chai");
let { PaymentPackage } = require("./12.Payment Package");

describe("Testing constructor", () => {

    it("should throw new error when took empty string for name", () => {
        assert.throw(() => {
            new PaymentPackage("", 4), 'Name must be a non-empty string'
        })
    });
    it("should throw new error when took invalid type of first param", () => {
        assert.throw(() => {
            new PaymentPackage(4, 4), 'Name must be a non-empty string'
        })
    });
    it("should throw new error when took negative number for value", () => {
        assert.throw(() => {
            new PaymentPackage("TeamBuilding", -4), 'Value must be a non-negative number'
        });
    });
    it("should throw new error when took wrong type of second param", () => {
        assert.throw(() => {
            new PaymentPackage("TeamBuilding", "4"), 'Value must be a non-negative number'
        });
        assert.throw(() => {
            new PaymentPackage("TeamBuilding", {}), 'Value must be a non-negative number'
        });
    });
    it("should make instance correctly by input params and with default values for", () => {
        let myPP = new PaymentPackage("TeamBuilding", 10);
        assert.equal(myPP.name, "TeamBuilding");
        assert.equal(myPP.value, 10);
        assert.equal(myPP.VAT, 20);
        assert.equal(myPP.active, true);
    });
    describe("Test setters", () => {

        it("should set correctly name", () => {
            let myPP = new PaymentPackage("TeamBuilding", 10);
            myPP.name = "TrueName";
            assert.equal(myPP.name, "TrueName")
        });
        it("should set correctly value", () => {
            let myPP = new PaymentPackage("TeamBuilding", 10);
            myPP.value = 15.1;
            assert.equal(myPP.value, 15.1);
            myPP.value=0;
            assert.equal(myPP.value,0);
        });
        it("should set correctly VAT", () => {
            let myPP = new PaymentPackage("TeamBuilding", 10);
            myPP.VAT = 25.5;
            assert.equal(myPP.VAT, 25.5);
            myPP.VAT=0;
            assert.equal(myPP.VAT,0);
        });
        it("VAT must be non negative number", () => {
            let myPP = new PaymentPackage("TeamBuilding", 10);
            assert.throws(() => {
                myPP.VAT = -25, 'VAT must be a non-negative number';
            });
        })
        it("VAT must be number type", () => {
            let myPP = new PaymentPackage("TeamBuilding", 10);
            assert.throws(() => {
                myPP.VAT = "25", 'VAT must be a non-negative number';
            });
            assert.throws(() => {
                myPP.VAT = {}, 'VAT must be a non-negative number';
            });
        })
        it("should set correctly active", () => {
            let myPP = new PaymentPackage("TeamBuilding", 10);
            myPP.active = false;
            assert.isFalse(myPP.active);
            myPP.active=true;
            assert.isTrue(myPP.active);
        });
        it("active status must be boolean ", () => {
            let myPP = new PaymentPackage("TeamBuilding", 10);

            assert.throw(() => {
                myPP.active = "1", 'Active status must be a boolean';
            });
            assert.throw(() => {
                myPP.active = "1", 'Active status must be a boolean';
            });
        })
        describe("test function toString()", () => {
            it('return a string, containing an overview of the instance; if it`s active', () => {
                let testHR = new PaymentPackage('HR Services', 1500);
                assert.equal(testHR.toString(),
                    "Package: HR Services\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800");
            });
            it('return a string, containing an overview of the instance; if it`s active', () => {
                let testHR = new PaymentPackage('HR Services', 1500);
                let testTB = new PaymentPackage('Team Building', 1500);
                let both=[testHR,testTB];
                assert.equal(both.join("\n").toString(),
                    "Package: HR Services\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800\nPackage: Team Building\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800");
            });

            it("return a string if it`s not active, append the label '(inactive)' to the printed name", () => {
                let testNonActive = new PaymentPackage('HR Services', 1500);
                testNonActive.active = false;
                assert.equal(testNonActive.toString(), "Package: HR Services (inactive)\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800");
            });
        });
    });
})