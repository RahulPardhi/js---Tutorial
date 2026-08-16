const marvel_heros = ["thor", "hulk", "spiderMan"]
const bollywood_heros = ["salmankhan", "sharukkhan", "akshaykumar"]

 // marvel_heros.push(bollywood_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(bollywood_heros) // merge the array
// console.log(allHeros);

const all_new_heros = [...marvel_heros,...bollywood_heros]

// console.log(all_new_heros); // merge the array

const another_array = [1, 1, 3, 4, [3,[ 4, 5, ], 4, 5, ], 5, 7, ]

const fixedanother_array = another_array.flat(Infinity)

console.log(fixedanother_array); // fixed the unstructured array

console.log(Array.isArray("Rahul")); // false
console.log(Array.from("Rahul"));//  ['R', 'a', 'h', 'u', 'l']
console.log(Array.from({name: "Rahul"})); // [] empty -- intresting array


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // [100, 200, 300]