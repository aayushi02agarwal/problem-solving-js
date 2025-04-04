### Table of Contents
1. [Array Destructuring](#1-array-desctructuring)

---

## 1. Array Destructuring
***Answer:***
- Syntax that allows you to unpack variables from an array ito distinct elements in a concise and readable way

## 1.1 Basic
```javascript {cmd=true}
const numbers = [1,2,3];
const [a,b,c]=numbers;
console.log(a);//1
console.log(b);//2
console.log(c);//3
```
## 1.2 Default values
```javascript {cmd=true}
const numbers2 = [1,2]; 
const [a1,b1,c1=3] = numbers2;
console.log(a1);//1
console.log(b1);//2
console.log(c1);//3
```
## 1.3 Rest Pattern
```javascript {cmd=true}
const numbers3 = [1,2,3,4,5];
const [a2, ...rest] = numbers3;
console.log(a2);//1
console.log(rest);//[2,3,4,5]
```
## 1.4 Swapping variables
```javascript {cmd=true}
let x=1;
let y=2;
[x,y]=[y,x];
console.log(x);//2
console.log(y);//1
```
## 1.5 Skipping Number
```javascript {cmd=true}
const array=[1,2,3,4];
const [p,,r,s]=array;
console.log(p);//1
console.log(r);//3
console.log(s);//4
```
## Nested Array
```javascript {cmd=true}
const nested = [1,[2,3],4];
const [l,[m,n],o] = nested;
console.log(l);//1
console.log(m);//2
console.log(n);//3
console.log(o);//4
```
---