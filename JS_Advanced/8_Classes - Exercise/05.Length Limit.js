class Stringer {
    constructor(string, length) {
        this.innerString = string;
        this.innerLength = length;
    }
    get innerLength() {
        return this._innerLength;
    }
    set innerLength(value) {
        if (value < 0) {
            this._innerLength = 0;
        } else {
            this._innerLength = value;
        }
    }
    increase(length) {
        this.innerLength += length;
    }
    decrease(length) {
        this.innerLength -= length;
    }
    toString() {
        let stringState = this.innerString.slice(0, this.innerLength);
        if (this.innerString.length >this.innerLength) {
            stringState += "...";
        }
        return stringState;
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test
