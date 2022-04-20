"use strict"; //Global declaration of strict mode

//Strict mode only functions when var, const, let is assigned

/*
const nameOfIndividual = "Yo! Bitches";
console.log(nameOfIndividual);
*/
/*
function description() {
    "use strict"
    var nameOfIndividual = "Yo! Bitches";
    return {Name: "Sushant Desaur", Age:25}
}

console.log(description);
*/
/*
function description(a,b) {
    "use strict"; //Strict mode can be used inside a function
    return a+b
}

console.log(description(3,5));
*/
function description(firstname,lastname){
    console.log('I am ${firstname} ${lastname}.');
}
description('Sushant','Desaur');