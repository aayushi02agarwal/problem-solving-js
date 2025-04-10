Functions which creates an object and returns them.
```js
function factoryFuntion() {
    return {...};
}
```
**Why factory functions over objects**
They solves the problmen of dealing with multiple objects which share almost same properties with a slight variation.

**Perks:**
- Using normal object
```js
const firendOne = {
    name: "John",
    talk() {
        return `Hello, I am ${this.name}`
    }
}
const firendTwo = {
    name: "Marry",
    talk() {
        return `Hello, I am ${this.name}`
    }
}
console.log(friendOne.talk()); //Hello, I an John
console.log(friendTwo.talk()); //Hello, I an Marry
```
- 1. Since are objects are mutable, the keys are exposed and available to overwrite.
```js
firendOne.name = "xyz";
```
- 2. code repeatation 

- Using factory function
```js 
function factoryFunction(friendName) {
    return {
        friendName: friendName,
        talk() {
            console.log(`Hello, I am ${friendName}`);
        } 
    }
}
let friendOne = factoryFunction('John');
let friendTwo = factoryFunction('Marry');
friendOne.talk(); //Hello, I an John
friendTwo.talk(); //Hello, I an Marry
```

**Optimizing:**
- When we make a friend object, JS sets aside some memory space to store these objects. We can avoid repeating the memory space for talk() in every new object.
```js 
function factoryFunction(friendName) {
    return {
        friendName: friendName, 
    }
}
let friendTalk = {
    talk() {
     console.log(`Hello, I am ${this.friendName}`);
    } 
} 
let friendOne = factoryFunction('John');
let friendTwo = factoryFunction('Marry');
friendOne.talk = friendTalk.talk; 
friendTwo.talk = friendTalk.talk; 
friendOne.talk();//Hello, I an John
friendTwo.talk();//Hello, I an Marry
```