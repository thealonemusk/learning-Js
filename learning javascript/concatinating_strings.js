// concatinating strings with + operatoer ;

var myStr = "This is the start. " + "This is the end."; // Change this line
console.log(myStr);


// concatinating string with += operator ; 

var myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";

console.log(myStr);

// comcating strings with variables 

var myName = "Ashutosh";
var myStr = "My name is " + myName + " and I am well!";

console.log(myStr);

// appending variables to strings

var someAdjective = "awesome!";
var myStr = "Learning to code is ";
myStr += someAdjective;

console.log(myStr);

// find the length of a string

var lastNameLength = 0;
var lastName = "Lovelace";

lastNameLength = lastName.length;

console.log(lastNameLength);
