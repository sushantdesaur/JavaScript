// Document.querySelector()

/* 
The Document method querySelector() returns the first Element within the document that matches the specified selector, or group of selectors.
If no matches are found, null is returned.
*/

const myHeading = document.querySelector('h1')

//  The code set the value of the myHeading variable's textContent property (which represents the content of the heading) to Hello world!.
myHeading.textContent = "Hello World"  //  The code set the value of the myHeading variable's textContent property (which represents the content of the heading) to Hello world!.



let shoppingDone = false;
let childsAllowance;

if (shoppingDone === true) {
  childsAllowance = 10;
  console.log(childsAllowance)
} else {
  childsAllowance = 5;
  console.log(childsAllowance);
}

