const arr = [1, 2, 3, 4];
//map() accepts a function as parameter and returns a new array
// const arr2 = arr.map((item,index,arr) => item);
// console.log(arr2);
Array.prototype.myMap = function(fun) {
    let arr = this;
    let ans = [];
    for(let i=0;i<this.length;i++)
    {
        ans.push(fun(arr[i],i,arr));
    }
    return ans;
}
const arr2 = arr.myMap((item,index,arr) => item);
console.log(arr2);