// Functions

/*
Functions are a way of packaging functionality that you wish to reuse.
 It's possible to define a body of code as a function that executes when you call the function name in your code. 
 This is a good alternative to repeatedly writing the same code. You have already seen some uses of functions. 
*/

// document.querySelector and alert, are built into the browser.

let myVariable = document.querySelector("h1");

alert("hello!");

// User-defined functions

// Traditional Function

function multiply(num1, num2) {
  let result = num1 * num2;
  return result;
}

// Arrow Function

const divide = (num1, num2) => {
  let result = num1 / num2;
  return result;
};

console.log(divide(10, 2));





console.log(multiply(4, 7));
// multiply(20, 20);
// multiply(0.5, 3);
