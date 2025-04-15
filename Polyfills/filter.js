const arr = [1, 2, 3, 4, 5];
// const arr2 = arr.filter((item,idx,arr) => item % 2 !== 0 );
// console.log(arr2);

Array.prototype.myFilter = function (cb) {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this))
            arr.push(this[i]);
    }
    return arr;
}
const arr2 = arr.myFilter((item,idx,arr) => item % 2 !== 0 );
console.log(arr2);