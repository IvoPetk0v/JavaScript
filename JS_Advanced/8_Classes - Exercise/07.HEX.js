class Hex {
    constructor(value) {
        this.value = Number(value);
    }
    valueOf() {
        return this.value;
    }
    toString() {
        return `0x${this.value.toString(16).toLocaleUpperCase()}`;
    }
    plus(number) {
        let newValue = this.value + number.valueOf();
        return new Hex(newValue);
    }
    minus(number) {
        let newValue = this.value - number.valueOf();
        return new Hex(newValue);
    }
    parse(hexString) {
        let number = parseInt(hexString, 16);
        return number;
    }
}

let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString() === '0xF');
console.log(FF.parse('AAA'));
//expected output:
// 0XFF
// 0XF
// true
// 2730
