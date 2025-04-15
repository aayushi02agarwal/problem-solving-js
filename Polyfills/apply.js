//the diff b/w call() and apply() is that apply() accepts arguments as array
function print(city,state) {
    console.log(`My name is ${this.firstName} ${this.lastName}. I'm from ${city}, ${state}.`);
};
let name1 = {
    firstName: "Aayushi",
    lastName: "Agarwal",
}
let name2 = {
    firstName: "abc",
    lastName: "xyz"
}
// print.apply(name1,["Bhilwara", "Rajasthan"]); //My name is Aayushi Agarwal. I'm from Bhilwara, Rajasthan.
// print.apply(name2,["Bangalore", "Karnataka"]); //My name is abc xyz. I'm from Bangalore, Karnataka.

Function.prototype.myApply = function(obj={},args=[]){
    obj.fn = this;
    obj.fn(...args);
    delete obj.fn;
}
print.myApply(name1,["Bhilwara", "Rajasthan"]); //My name is Aayushi Agarwal. I'm from Bhilwara, Rajasthan.
print.myApply(name2,["Bangalore", "Karnataka"]); //My name is abc xyz. I'm from Bangalore, Karnataka.