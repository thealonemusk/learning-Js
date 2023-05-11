// 2634. Filter Elements from Array
// Easy
// 249
// 12
// Companies
// Given an integer array arr and a filtering function fn, return a new array with a fewer or equal number of elements.

// The returned array should only contain elements where fn(arr[i], i) evaluated to a truthy value.

// Please solve it without the built-in Array.filter method.



/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    var fA= [];
    for (var i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            fA.push(arr[i]);
        }
    }
    return fA;
};