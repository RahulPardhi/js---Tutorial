// singelton
// object create

// object literals

 const mySym = Symbol("Key1")


const jsUser ={
    name: "Rahul",
    "full name": "Rahul pardhi",
    [mySym]: "myKey1",
    age: 23,
    location: "Gondia",
    email: "rahul@gmail.com",
    isLoggedIn: false

}

console.log(jsUser.email)
console.log(jsUser["email"])
console.log(jsUser["full name"])
console.log(jsUser[mySym])

jsUser.email = "rahul@gogle.com"
// Object.freeze(jsUser)// loct the object after the lock object you cannot chnge the information
jsUser.email = "rahul@chatgpt.com"
console.log(jsUser)

jsUser.greeting = function() {
    console.log("Hello World");
}

jsUser.greetingTwo = function() {
    console.log(`hwllo JS user,${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
