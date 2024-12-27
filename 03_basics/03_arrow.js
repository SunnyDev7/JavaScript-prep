
//this key word is used to refer the current context
// the current context is variables or anything of a scope

const user = {
    username: "Sunny",
    price: 99,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);
        console.log(this); // this keyword refers to the this local context of user object
        
    }
}

// user.welcomeMessage() //here the current context is the above object and its nested function

user.username = "Sam";
user.welcomeMessage(); //now here the current context referes to this one Sam on global scope level,
// hence, this will print Sam

console.log(this); //this keyword refers to the global object which is for now empty {}


// function chai(){
//     let username = "Sunny"
//     console.log(this.userame); //now you would think that this would work, but such usage of this
//     // keyword does not work inside a function 
    
// }

// chai() //this keyword used inside function give a lot of data in an object



// const chai = function (){
//     let username = "Sunny"
//     console.log(this.username);
// }

// chai()


//arrow function
const chai = () => {
    let username = "Sunny"
    console.log(this.username);
}

chai()


// const addTwo = (num1, num2) => { //such type of arrow functions require to write a return keyword
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2  this is  single line approach to avoid return keyword
// console.log(addTwo(2, 2));

// const addTwo = (num1, num2) => (num1 + num2) //this is multi-line apprach to avoid return 
// console.log(addTwo(2, 2));

//now how to return an object from arrow function

// const addTwo = (num1, num2) => ({username: "Sunny"})
// console.log(addTwo(2, 2)); 

const addTwo = (num1, num2) => ({username: "Sunny"})
console.log(addTwo(2, 2)); 




