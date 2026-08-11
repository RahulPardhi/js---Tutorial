// primitive 

// 7 types : string, Number, Boolean, null, undefined, symbol, bigInt. {call by value data types}

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const  id = Symbol('123')
const anotherId = Symbol('123')

console.log( id === anotherId )

// const bigNumber = 653234258787328n // bigInt

// Non  primitive {reference data types }

// Array, Objects, Functions

const heros = ["spiderman", "thanos", "batman"];

  const myObj = {
    name: "Rahul",
    agr: 22,  
}

const myFunction = function() {
console.log("hello world");
}
 
console.log(typeof bigNumber);

// +++++++++++++++++++++++++++++++++=
// +++++++++++++++++++++++++++++++++

// stack (primitive),  Heap (Non-Primitive)

let myYoutubeName = "RahulPardhi.com"

let anotherName = myYoutubeName 
anotherName = "Akashwarte"
 
console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email: "rahul@gmail.com",
    age: 22,
}

let userTwo = userOne

userTwo.email = "akash@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);


