const score = 100

const balance = new Number(100)
// console.log(balance); // output with the datatypes

// console.log(balance.toString().length); // 100 //3

// console.log(balance.toFixed(2)); // 100.00

const otherNumber = 123.8965
// console.log(otherNumber.toPrecision(4)); // 123.9

const hundreds = 1000000
console.log(hundreds.toLocaleString(`en-IN`)); // 10,00,000


//************** Maths *****************//

// console.log(Math)
// console.log(Math.abs(-4)); // 4
// console.log(Math.round(4.6)); // 5
// console.log(Math.min(4, 3, 6, 8)); // 3
// console.log(Math.max(4, 3, 6, 8)); // 8

console.log(Math.random());
console.log((Math.random()*10) +1);
console.log(Math.floor(Math.random()*10) +1);

const min = 10
const max = 20

console.log(Math.floor(Math.random()* (max - min + 1))+ min)

