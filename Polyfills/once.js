var _ = require('lodash');
function greet(data) {
    console.log(`Hello, ${data}`);
}

// var initialize = _.once(greet);
// initialize();
// initialize();
// => `greet` is invoked once

//Our implementation - closure
function once(fn, context) {
    let ran;
    return function () {
        if (fn) {
            ran = fn.apply(context || this, arguments);
            fn = null;
        }
        return ran;
    }
}
var initialize = once(greet);
initialize(1); //Hello, 1
initialize(2);