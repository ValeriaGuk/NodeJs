export default class MyArray {
    constructor(array) {
        this._array = array || [];
    }

    get array() {
        return this._array;
    }

    set array(newArray) {
        this._array = newArray;
    }

    print() {
        console.log(this._array);
    }

    findMin() {
        return Math.min(...this._array);
    }

    findMax() {
        return Math.max(...this._array);
    }

    findSum() {
        return this._array.reduce((acc, curr) => acc + curr, 0);
    }

    bubbleSort() {
        let arr = this._array.slice(); 
        let len = arr.length;
        for (let i = 0; i < len - 1; i++) {
            for (let j = 0; j < len - 1 - i; j++) {
                if (arr[j] > arr[j + 1]) {
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        return arr;
    }
}

// module.exports = MyArray;
