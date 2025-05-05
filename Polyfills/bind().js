const name = {
    firstName: "Aayushi",
    lastName: "Agarwal"
}

let printName = function (city, state) {
    console.log(this.firstName + " " + this.lastName + ", " + city + ", " + state);
}

//How we use build()

let printMyName = printName.bind(name, "Bhilwara");
printMyName("Rajasthan");

//Our implementation - using apply

Function.prototype.mybind = function (...args) {
    let obj = this;
    let params = args.splice(1);
    return function (...args2) {
        obj.apply(args[0], [...params, ...args2]);
    }
}

// let printMyName2 = printName.mybind(name, "Bhilwara");
// printMyName2("Rajasthan");


//Our implementation - another way
Function.prototype.myBind2 = function (obj = {}, ...args) {
    obj.fn = this;
    return function(...newArgs) {
        return obj.fn(...args,...newArgs)
    }
}
let printMyName3 = printName.myBind2(name, "Bhilwara");
printMyName3("Rajasthan");// Aayushi Agarwal, Bhilwara, Rajasthan