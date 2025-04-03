## 1. What is a Lexical Scoping?
**Answer:**
- Lexical scoping means a function's scope is determined by where it is stored in the code. Any inner function have access to variables and functions present in it's outer/parent function.
- If an inner function needs a variable, it first looks in its own scope.
If it’s not found, it looks in the outer scope, and this continues up to the global scope.

**Example:**
```js
function outer() {
    const temp = 2;
    function inner() {
        console.log(temp);  //it can access the temp variable present in outer()
    }
    return inner;
}

outer()(); //2


/**
 * Q: Lexical Scoping and closure?
 * A: Lexical scoping is the foundation of closure. Closure is a function along with reference to its outer env. 
 *    together forms a closure. (combination of function along with its lexical scope).
 *    It allows a function to remember variables present in it's outer scope even after the outer() execution 
 *    is over.
 * Example:
 */
