const arr = [1, 2, 3, 4, 5];
// const res = arr.reduce(
//     function (acc, curr) {
//         acc += curr;
//         return acc;
//     }, 0);

Array.prototype.myReduce = function(cb,val) {
    let accumulator = val;
    for(let i=0;i<this.length;i++)
    {
        accumulator = accumulator ? cb(val,this[i],i,this) : this[i];
    }
    return val;
}
const res = arr.reduce(
    function (acc, curr, idx, arr) {
        acc += curr;
        return acc;
    }, 0);
console.log(res);