//call() is used in function borrowing. We can borrow function from one object and 
// use it with the data of some other object

// let name1 = {
//     fistName: "Aayushi",
//     lastName: "Agarwal",
//     print() {
//         console.log(`My name is ${this.firstName} ${this.lastName}`);
//     }
// }
// let name2 = {
//     firstName: "abc",
//     lastName: "xyz"
// }

// name1.print.call(name2); //My name is abc xyz

// we can create a normal function and reuse it with all the objects
function print(city) {
    console.log(`My name is ${this.firstName} ${this.lastName}. I'm from ${city}`);
};
let name1 = {
    firstName: "Aayushi",
    lastName: "Agarwal",
}
let name2 = {
    firstName: "abc",
    lastName: "xyz"
}
// print.call(name1); //My name is Aayushi Agarwal
// print.call(name2); //My name is abc xyz

Function.prototype.myCall = function (obj = {}, ...args) {
    obj.fn = this;
    obj.fn(...args);
    delete obj.fn;
}
print.myCall(name1, "Delhi"); 
print.myCall(name2, "Bangalore");
// My name is Aayushi Agarwal. I'm from Delhi
// My name is abc xyz. I'm from Bangalore