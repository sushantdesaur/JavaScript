// Events

/*
Real interactivity on a website requires event handlers. 
These are code structures that listen for activity in the browser, and run code in response. 
The most obvious example is handling the click event, which is fired by the browser when you click on something with your mouse. 
To demonstrate this, enter the following into your console, then click on the current webpage:
*/

document.querySelector("html").addEventListener("click", function () {
  alert("Ouch! Stop poking me!");
});
