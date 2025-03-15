//prototype example
const myObject = {
    city: "Madrid",
    greet() {
        console.log(this.city);
    }
}
console.log(myObject); //{city: 'Madrid', greet: ƒ}
myObject.greet(); //Madrid
console.log(myObject.toString());//[object Object]

//<--------->//

//How to find protoytpe of an object
// Object.getPrototypeOf();
console.log(Object.getPrototypeOf(myObject)); // has all the built in properties - Object.prototype
console.log(Object.prototype);

//<--------->//

//Prototype of new Date() - All ojects does not have protytype as Object.prototype always
const date = new Date();
console.log(Object.getPrototypeOf(date)); //Date.prototype
console.log(Date.prototype);

//<--------->//

//Shadowing Properties 
const myDate = new Date();
console.log(myDate.getTime()); // Current time in ms
myDate.getTime = function() {
    console.log("Something else");
}
myDate.getTime(); // Something else

//<--------->//

//Setting prototype
 //1) Using Object.create()
 const personPrototype = {
    greet() {
        console.log("Hello");
    }
 }
 const newObj = Object.create(personPrototype);
 newObj.greet(); //Hello
  //newObj has its prototype as personPrototype

  //2) Using Constructor
  function Person(name) {
    this.name = name;
  }
  Object.assign(Person.prototype, personPrototype);
  const aayu = new Person("Aayushi"); 
  // Here object aayu has a property protytype of Person constructor -> Person.prototype = personPrototype
  console.log(Object.getPrototypeOf(aayu)); //Person.prototype -> {greet: ƒ}
  console.log(Person.prototype);//{greet: ƒ}
  aayu.greet(); //Hello

//<--------->//

//Own Properties
  console.log(Object.hasOwn(aayu,"name")); //true
  console.log(Object.hasOwn(aayu,"greet"));//false

