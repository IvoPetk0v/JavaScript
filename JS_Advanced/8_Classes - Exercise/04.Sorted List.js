class List {
    constructor() {
        this._list = [];
        this.size = this._list.length
    }
    get(index) {
        if (this.validateIndex(index)) {
            return Number(this._list[index]);
        };
    }
    add(num) {
        this._list.push(Number(num));
        this._list;
        this.sorting(this._list);
        this.size++;
    }
    remove(index) {
        if (this.validateIndex(index)) {
            this._list.splice(index, 1);
            this.sorting(this._list);
            this.size--;
        }
    }
    validateIndex(index) {
        if (index >= this._list.length || index < 0) {
            throw new Error("Index out of range!");
        }
        return true;
    }
    sorting(array) {
        array.sort((a, b) => a - b);
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
