/**
 * Q: What is a Closure?
 * A: A function along with the reference to its outer env forms a closure. In other words it is the combination 
 * of function along with its lexical scope.
 * Each and every function in JS have access to its outer env means it has acess to variables and functions present
 * in the env of its parent. So if the function is executed in some other scope, it shall remember its outer layer's
 * lexical scope where it was originally present.
 */


//Data Hiding
function counter(){
    var counterVar = 0;
    function incrementCounter() {
        counterVar++;
        console.log(counterVar)
    }
    return incrementCounter;
}
// console.log(counterVar); //error
//using closure we can use the counterVar, incrementCounter() will remember counterVar as it's present in its lexical scope
var counter1 = counter();
counter1(); //1
counter1(); //2

//Making the above code scalable using constructor function

function counterFun () {
    var countervar=0;
    this.incrementCounter = function() {
        countervar++;
        console.log(countervar);
    }
    this.decrementCounter = function() {
        countervar--;
        console.log(countervar);
    }
}

let counter2 = new counterFun();
counter2.incrementCounter() //1
counter2.incrementCounter(); //2 
counter2.decrementCounter(); //1
