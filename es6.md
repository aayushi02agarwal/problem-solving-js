### Table of Contents
1. [Array Destructuring](#1-array-destructuring)
2. [Template String/Template Literals](#2-template-stringtemplate-literals)
3. [let and const (Block Scope Variables)](#3-let-and-const-block-scope-variables)
4. [What is Bubbling and Capturing?](#4-what-is-bubbling-and-capturing)
5. [Difference between for of and for in?](#5-difference-between-for-of-and-for-in)
6. [Symbols](#6-symbols)
---

## 1. Array Destructuring
**Answer:**
- Syntax that allows you to unpack variables from an array into distinct elements in a concise and readable way

**1.1 Basic**
```javascript {cmd=true}
const numbers = [1,2,3];
const [a,b,c]=numbers;
console.log(a);//1
console.log(b);//2
console.log(c);//3
```
**1.2 Default values**
```javascript {cmd=true}
const numbers2 = [1,2];
const [a1,b1,c1=3] = numbers2;
console.log(a1);//1
console.log(b1);//2
console.log(c1);//3
```
**1.3 Rest Pattern**
```javascript {cmd=true}
const numbers3 = [1,2,3,4,5];
const [a2, ...rest] = numbers3;
console.log(a2);//1
console.log(rest);//[2,3,4,5]
```
**1.4 Swapping variables**
```javascript {cmd=true}
let x=1;
let y=2;
[x,y]=[y,x];
console.log(x);//2
console.log(y);//1
```
**1.5 Skipping Number**
```javascript {cmd=true}
const array=[1,2,3,4];
const [p,,r,s]=array;
console.log(p);//1
console.log(r);//3
console.log(s);//4
```
**1.6 Nested Array**
```javascript {cmd=true}
const nested = [1,[2,3],4];
const [l,[m,n],o] = nested;
console.log(l);//1
console.log(m);//2
console.log(n);//3
console.log(o);//4
```
---

## 2. Template String/Template Literals
**Answer:**
- Used to embed expressions/variables inside string using backticks

**2.1 String Interpolation**
```javascript {cmd=true}
const name = "Aayushi";
console.log(`My name is ${name}`);//My name is Aayushi
```
**2.2 Multi line**
```javascript {cmd=true}
console.log(`I'm Aayushi,
A software Developer!`);//I'm Aayushi,
//A software Developer!
```
**2.3 Expressions**
```javascript {cmd=true}
const var1 = 2;
const var2 = 3;
console.log(`The sum of ${var1} and ${var2} is ${var1+var2}`);//The sum of 1 and 2 is 3
```
**2.4 Function Calls**
```javascript {cmd=true}
function greet(name) {
return `Hello, ${name}!`;
}

console.log(`${greet("Aayushi")}, welcome to JavaScript!`); //Hello, Aayushi!, welcome to JavaScript!
```
**2.5 tagged template literals**
- Tagged templates allow processing a template literal with a function before returning the final output.
```javascript {cmd=true}
function fun(name,age) {
return `My name is ${name.toUpperCase()}. I'm ${age}`;
}
console.log(fun("aayushi",23)); //My name is AAYUSHI. I'm 23
```
---

## 3. let and const (Block Scope Variables)
**Answer:**
```javascript {cmd=true}
function xfun() {
if(true)
{
let var3=3;
const var4=4;
var3=4;
// var4=6; //can't re-assign const
}
console.log(var3); //var3 is not defined
console.log(var4); //var4 is not defined
}
xfun();
```
---

## 4. What is Bubbling and Capturing?
**Answer:**
- They are two ways of event propogation in the DOM tree. Let's say there are nested HTML elements. Each of them has a click event with corresponding functions.

**Event Bubling:**
- If we trigger an event of a child component; first the function of child is called, then it will move up to parent, then grand-parent's.

**Event Capturing/Trickling**
- If we trigger an event of a child component; first the function of grand-parent is called, then it will move down to parent, till it reaches the child.

- This can be achieved by adding a third argument to the eventListner - useCapture

**Example(Event Bubbling):**
```html 
<!DOCTYPE html>
<html>
<head>
  <title>Aayushi</title>
  <style>
    div {
      min-width: 100px;
      min-height: 100px;
      padding: 30px;
      border: 1px solid black;
      cursor: pointer;
    }
  </style>
</head>

<body>
  <div id="grandparent">
    <div id="parent">
      <div id="child">

      </div>
    </div>
  </div>
  <script>
    document.querySelector("#grandparent").addEventListener('click', () => { console.log("Grandparent clicked"); });
    document.querySelector("#parent").addEventListener('click', () => { console.log("Parent clicked"); });
    document.querySelector("#child").addEventListener('click', () => { console.log("Child clicked"); });
  </script>
</body>
</html>
```

- Here if we will click child the output will be:
```
Child clicked
Parent clicked
Grandparent clicked
```
- Here if we will click parent the output will be:
```
Parent clicked
Grandparent clicked
```
- Here if we will click grandparent the output will be:
```
Grandparent clicked
```
- If we don't pass any third argument, by default event bubling happens(useCapture is false)
```javascript
document.querySelector("#child").addEventListener('click', () => { console.log("Child clicked"); }, false);
```

**Example(Event Capturing/Trickling):**
```html 
<!DOCTYPE html>
<html>
<head>
  <title>Aayushi</title>
  <style>
    div {
      min-width: 100px;
      min-height: 100px;
      padding: 30px;
      border: 1px solid black;
      cursor: pointer;
    }
  </style>
</head>

<body>
  <div id="grandparent">
    <div id="parent">
      <div id="child">

      </div>
    </div>
  </div>
  <script>
    document.querySelector("#grandparent").addEventListener('click', () => { console.log("Grandparent clicked"); }, true);
    document.querySelector("#parent").addEventListener('click', () => { 
      console.log("Parent clicked");  
    }, true);
    document.querySelector("#child").addEventListener('click', () => { console.log("Child clicked"); }, true);
  </script>
</body>
</html>
```

- Here if we will click child the output will be:
```
Grandparent clicked
Parent clicked
Child clicked
```
- Here if we will click parent the output will be:
```
Grandparent clicked
Parent clicked
```
- Here if we will click grandparent the output will be:
```
Grandparent clicked
```

- These operations are very heavy and cause performane issue. Let's see how we can stop the propagation at a particular point of time

```js
document.querySelector("#grandparent").addEventListener('click', () => { console.log("Grandparent clicked"); }, true); //capturing
document.querySelector("#parent").addEventListener('click', () => { console.log("Parent clicked"); }, false); //bubbling
document.querySelector("#child").addEventListener('click', () => { console.log("Child clicked"); }, true); //capturing
```
- Here if we will click child the output will be:
```
Grandparent clicked
Child clicked
Parent clicked
```

- According to w3c, first capturing happens then bubbling out happens, and callback functions are called as per the useCapture value.
- First grandparent handler was called, then it went to parent. Here the flag is false so it won't be called, so it will move to child and because of true, capturing happens and the callback method was called.
- After the capturing cycle is completed, bubbling cycles start, so parent is called.

```js
document.querySelector("#grandparent").addEventListener('click', () => { console.log("Grandparent clicked"); }, true); //capturing
document.querySelector("#parent").addEventListener('click', () => { console.log("Parent clicked"); }, false); //bubbling
document.querySelector("#child").addEventListener('click', () => { console.log("Child clicked"); }, false); //bubbling
```
- Here if we will click child the output will be:
```
Grandparent clicked
Child clicked
Parent clicked
```
- First, grandparent will be called as event capturing happens first. Then it will go to parent and see the flag is false, so it will move to child. It again sees false.
- Once the target element is reached the events will be bubbled out. Now in the bubbling cycle, child will be called and then parent.
- Here if we will click parent the output will be:
```
Grandparent clicked
Parent clicked
```

**Stopping propagation: Event Bubbling**
- When we write callback() inside our event listeners, we have access to event object(e). This has a method called stopPropagation().
- e.stopPropagation() - It will stop the event propagation.
```js
document.querySelector("#grandparent").addEventListener('click', (e) => { console.log("Grandparent clicked"); }, false);
document.querySelector("#parent").addEventListener('click', (e) => { 
  console.log("Parent clicked"); 
  e.stopPropagation();
}, false); 
document.querySelector("#child").addEventListener('click', (e) => { console.log("Child clicked"); }, false); 
```
- Here if we will click child the output will be:
```
Child clicked
Parent clicked
```

```js
document.querySelector("#grandparent").addEventListener('click', (e) => { console.log("Grandparent clicked"); }, false);
document.querySelector("#parent").addEventListener('click', (e) => { 
  console.log("Parent clicked"); 
}, false); 
document.querySelector("#child").addEventListener('click', (e) => { 
  console.log("Child clicked"); 
  e.stopPropagation();
}, false); 
```
- Here if we will click child the output will be:
```
Child clicked
```

**Stopping propagation: Event Capturing**
```js
document.querySelector("#grandparent").addEventListener('click', (e) => { console.log("Grandparent clicked"); }, true);
document.querySelector("#parent").addEventListener('click', (e) => { 
  console.log("Parent clicked"); 
}, true); 
document.querySelector("#child").addEventListener('click', (e) => { 
  console.log("Child clicked");
   e.stopPropagation(); 
}, true); 
```
- Here if we will click child the output will be:
```
GrandParent clicked
Parent clicked
Child clicked
```

```js
document.querySelector("#grandparent").addEventListener('click', (e) => { 
  console.log("Grandparent clicked"); 
   e.stopPropagation(); 
}, true);
document.querySelector("#parent").addEventListener('click', (e) => { 
  console.log("Parent clicked"); 
}, true); 
document.querySelector("#child").addEventListener('click', (e) => { 
  console.log("Child clicked");
}, true); 
```
- Here if we will click child the output will be:
```
GrandParent clicked
```

### 5. Difference between for of and for in?
**Answer:**
Both the for..of and for..in commands iterate over lists, but the results they return are different: for..in returns a list of keys on the object being iterated, whereas for..of returns a list of values of the object's numeric attributes.
```js
let arr = [3, 4, 5];

for (let i in arr) {
   console.log(i); // "0", "1", "2",
}

for (let i of arr) {
   console.log(i); // "3", "4", "5"
}
```

## 6. Symbols
- Symbols are special primitive data type in js, introduced in ES6, which is used to make unique keys for objects to avoid name clashes
```js
const symbol = Symbol();
console.log(symbol); //Symbol();
```
- The symbols are unique even if we pass same description
```js
const sym1 = Symbol('id');
const sym2 = Symbol('id');
console.log(sym1 === sym2);//false
```
**Symbol keys vs string keys:**
- 1. Using keys as Strings
```js
const id1 = 'id';
const id2 = 'id';
const user = {
  name: "xyz",
  [id1]: 101
}
user[id2]=102;
console.log(user);//{name: 'xyz', id: 102}
```
- 2. Using keys as Symbols
```js
const id1 = Symbol('id');
const id2 = Symbol('id');
const user = {
  name: "xyz",
  [id1]: 101
}
user[id2]=102;
console.log(user); //{name: 'xyz', Symbol(id): 101, Symbol(id): 102}
```

**Symbol.for()**
- While Symbole() creates unique Symbol, Symbol.for() allows reuse
```js
const id1 = Symbol.for('id');
const id2 = Symbol.for('id');
console.log(id1 === id2);//true
```
returns An existing symbol with the given key if found; otherwise, a new symbol is created and returned.

**Private object properties**
- Symbols are used to create private properties for an object which can't be accessed/modified by direct iteration.
```js
const PASSWORD = Symbol('password');
const user = {
  name: "xyz",
  [PASSWORD]: "secretKey"
}
console.log(user.name);//xyz
console.log(user[PASSWORD]);//secretKey

for(let key in user)
{
  console.log(key);
}// name - it won't give Symbol key
```

**Advantages**
- 1. Avoid name clashes
- 2. Ensure Privacy - not accesssable via iteration
- 3. Prevent accidental property modification
