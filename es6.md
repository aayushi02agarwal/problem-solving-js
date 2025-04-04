### Table of Contents
1. [Array Destructuring](#1-array-desctructuring)
2. [Template String/Template Literals](#2-template-strings-template-literals)
3. [let and const (Block Scope Variables)](#3-let-and-const-block-scope-variables)
---

## 1. Array Destructuring
**Answer:**
- Syntax that allows you to unpack variables from an array ito distinct elements in a concise and readable way

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
console.log(`The sum of ${a} and ${b} is ${a+b}`);//The sum of 1 and 2 is 3
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