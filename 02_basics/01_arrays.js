// Array

const myArr = [0, 1, 2, 3, 4, 5] 
const myHeros = ["Rahul", "Harshal", "shresh"]

const myArr2 = new Array(1, 2, 3, 4)

// console.log(myArr[0]);

// Array Methods

myArr.push(6) // add the value on array
// console.log(myArr);

myArr.pop() // delete the value on array

myArr.unshift(9) // add the value on starting to the array list

myArr.shift() // remove the number of array list /starting value

// console.log(myArr.includes(9)); // false

const newArr = myArr.join()

// console.log(newArr);

// slice, splice 

console.log("A", myArr);

const myn1 = myArr.slice(1, 3)
console.log(myn1); // 

console.log("B", myArr);

const myn2 = myArr.splice(1, 4)
console.log("c", myArr);
console.log(myn2) // [0, 5] // [1, 2, 3, 4]



