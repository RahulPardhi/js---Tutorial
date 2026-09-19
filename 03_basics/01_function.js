function sayMyName(){
    console.log("R");
    console.log("A");
    console.log("H");
    console.log("U");
    console.log("L");

}

// sayMyName()

function addTwoNumbers(number1, number2){
  // let result = number1 + number2
  // return result
  return number1 + number2
}
 const result = addTwoNumbers(3, 70)
 // console.log("Result:", result);


 function loginUserMessage(username){
  return `${username} just logged in`
 }
 // console.log(loginUserMessage("Rahul"))

 function loginUserMessage(username = "rahul"){
  if(!username){
    console.log("please enter your username");
    return
  }
  return `${usename} just logged in`
 }

 // console.log(loginUserMessage())


 function calculateCarPrice(num1){
  return num1
 }
 // console.log(calculateCarPrice(2))

 const user ={
  username: "rahul",
  price:200 
 }

 function handleObject(anyObject){
  console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
 }

 // handleObject(user)

//  handleObject({
// username: "RAhul",
// price:400})


const myNewArray = [200, 400, 600, 500]

function returnSecondValue(getArray){
  return getArray[3]
}
console.log(returnSecondValue(myNewArray));