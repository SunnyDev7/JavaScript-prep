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