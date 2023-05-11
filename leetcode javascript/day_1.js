// 2667. Create Hello World Function
// Easy
// 357
// 36
// Companies
// Write a function createHelloWorld. It should return a new function that always returns "Hello World".
 
 /**
 * @return {Function}
 */
var createHelloWorld = function() {
    return function(...args) {
      return "Hello World"  
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */