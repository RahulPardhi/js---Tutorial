const name = "rahul"
const repoCount = 50

// console.log(name + repoCount + "value");  // old version writing coode

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String('rahul')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(2)); // we have checking the word for 2 index

console.log(gameName.indexOf('h')); // we have checking then index for h word

 const newString = gameName.substring(0,4)
console.log(newString); // rahu

const anotherString = gameName.slice(-4,1)
console.log(anotherString); 

const newStringOne = " Rahul  "
console.log(newStringOne);
console.log(newStringOne.trim()); //remove extra spacesssss

const url = "https://rahul.com/rahul10pardhi"

console.log(url.replace(`10`, `_`)) // replace words

console.log(url.includes('rahul')) // we have to check the word for this url/ or any passages.