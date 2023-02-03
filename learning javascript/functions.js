// functions in js

// function declaration

function sayHello() {
    console.log("Hello");
}

sayHello();

// function with arguments

function sayHelloTo(name) {
    console.log("Hello " + name);
}

sayHelloTo("Ashutosh");

function add(a,b) {
    console.log(a+b);
}

add(2,5);

// function with return statement

function add(a, b) {
    return a + b;
}

console.log(add(2, 3));

// global scope and functions

var myGlobal = 10;

function fun1() {
    oopsGlobal = 5;
}

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}

fun1();
fun2();

// local scope and functions