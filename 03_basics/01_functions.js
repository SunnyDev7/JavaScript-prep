//normal syntax
function sayMyName(){
    // something
}

sayMyName();

// function addTwoNumbers(n1, n2){
//     console.log(n1 + n2);
    
// }
// const result = addTwoNumbers(3, 4)
// console.log(result); // this give a output of underfined, meaning the function return an udefined value
 

function addTwoNumbers(n1, n2){
    
    // let result = n1 + n2;
    // return result  // a return is must in a function, and any code after the return in fun will not execute

    //a better way
    return n1 + n2
    
}
const result = addTwoNumbers(3, 4)

console.log("r", result);


function loginUserMessage(username){
    return `${username} just logged in`
}

console.log(loginUserMessage("Sunny"))

//to give default value to a paramter do the below
function nameOfFunction(paramter = "default value") {
    //
}



// =================================Functions part 2 ===================================================

function calculateCartPrice(...num1){ //rest operator is always used as function paramter
    return num1
}

console.log(calculateCartPrice(200, 400, 500))


//how to pass an object into function
const user = {
    username: "Sunny",
    price: 199
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username}, and price is ${anyObject.price}`);
}

handleObject(user);

//also this is possible to pass an object
// handleObject({
//     username: "Sam",
//     price: 399
// })


//for arrays
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));

//also could be done
//returnSecondValue([200, 400, 100, 600]);