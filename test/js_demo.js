//Uncomment the code to run 
alert("Hello! This is JS Demo. Please check console.")


/*
//Var declaration

var myName = "Sushant Desaur";
console.log(myName);
*/

/*
//Basic If-else statement 

const sLimit = 50;
const carspeed = 100;
if (carspeed<sLimit) {
    console.log("Safe driving");
} 
else {
    console.log("Unsafe driving");
} 
*/

/*
//Advanced if-else statement

const upperLimit = 100;
const lowerLimit = 30;
const carSpeed = 10;
if (carSpeed<upperLimit && carSpeed>lowerLimit) {
    console.log("Safe driving");
} 
else if (carSpeed<lowerLimit){
    console.log("Increase Speed");
} 
else {
    console.log("Lower your speed")
}
*/

/*
//Type Conversion

console.log(typeof "Sushant Desaur");
console.log(typeof (new Date()));
console.log(typeof (23));
const x=5;
console.log(typeof x);
console.log(typeof String(x)); //Type conversion of number to string
*/

/*
//Type Coersion

console.log(typeof +('34')) //Convert a string to number using Type Coersion
*/

/*
//Truthy
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
*/

/*
//Equality Operator

//LOOSE Equality "=="

if (23=="23") {
 console.log("They are equal");
}

//STRICT Equality "==="
if (23==="23") {
    console.log("They are equal");
   }
else {
    console.log("They are unequal");
}
*/

//Switch Statement

const character = '';
switch(character) {
    case 'A':
        console.log('Selected A.');
        break;
    case 'B':
        console.log('Selected B.');
        break;
    case 'c':
        console.log('Selected C.');
        break;
    default:
        console.log("No match found.")   
    }