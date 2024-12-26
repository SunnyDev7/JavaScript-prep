//const tinderUser = new Object() //this is a singelton object
const tinderUser = {}; //and this is non-singelton object

tinderUser.id ="123abc"
tinderUser.name = "sam"
tinderUser.isLoggedIn = false

console.log(tinderUser);


const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstName: "Sunny",
            lastName: "Dev"
        }
    }

}

console.log(regularUser.fullname.userfullname.firstName); //accessing data for nested objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2} //this is not a good practice
//const obj3 = Object.assign({}, obj1, obj2) //this is a better practice

const obj3 = {...obj1, ...obj2} //this is the best practice
console.log(obj3);


//the below example is how data comes from a database

const users = [
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 2,
        email: "s@gmail.com"
    },
    {
        id: 3,
        email: "s@gmail.com"
    }
]

users[1].email //simple syntax to access the data
console.log(tinderUser);

console.log(Object.keys(tinderUser)); 
console.log(Object.values(tinderUser)); 
//this converts each object into array and this makes it easier to loop through on it and access data 
// this is very very important to use for effective code writing
console.log(Object.entries(tinderUser)); //this is not often used

console.log(tinderUser.hasOwnProperty("isLoggedIn")); //this give true if property exists









