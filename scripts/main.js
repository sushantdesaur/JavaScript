// Document.querySelector()

/* 
The Document method querySelector() returns the first Element within the document that matches the specified selector, or group of selectors.
If no matches are found, null is returned.
*/

const myHeading = document.querySelector('h1')

//  The code set the value of the myHeading variable's textContent property (which represents the content of the heading) to Hello world!.
myHeading.textContent = "Hello World"  //  The code set the value of the myHeading variable's textContent property (which represents the content of the heading) to Hello world!.




function multiply(num1, num2) {
  let result = num1 * num2;
  return result;
}

console.log(multiply(4, 7));
// multiply(20, 20);
// multiply(0.5, 3);
