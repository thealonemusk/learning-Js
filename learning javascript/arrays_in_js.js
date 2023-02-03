// arrays in js 

var ourArray= ["john", 23];

var myArray = ["quinty" , "pusssy"];
console.log(ourArray);
console.log(myArray);

// nested array 

var ourArray = [["the universe", 42], ["everything", 101010]];
console.log(ourArray);

// access array data with indexes

var ourArray = [50,60,70];
var ourData = ourArray[0]; // equals 50

console.log(ourData);

// modifying the array 

var ourArray = [18,64,99];
ourArray[1] = 45; // ourArray now equals [18,45,99].

console.log(ourArray);

// accessing multi-dimensional arrays with indexes

var ourArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
var ourData = ourArray[2][1]; // equals 8

console.log(ourData);

// push function

var ourArray = ["Stimpson", "J", "cat"];
ourArray.push(["happy", "joy"]);
console.log(ourArray);

// pop function

var ourArray = [1,2,3];
var removedFromOurArray = ourArray.pop();
console.log(ourArray);

// shift function

var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();
console.log(ourArray);

// unshift function

var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift();
ourArray.unshift("Happy");
console.log(ourArray);

// shopping list 

var mylist = [["cereal",3] , ["condoms", 6]];
console.log(mylist);
