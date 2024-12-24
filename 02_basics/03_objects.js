//Singelton
//Object.create

//Symbol
const mySym = Symbol("key1");

// object literals
const jsUser = {
  name: "Sunny", // on the back the system take each key as a string, e.g, "name"
  fullName: "Sunny Dev",
  [mySym]: "Key3",
  age: 18,
  location: "Berlin",
  email: "sunny@ibm.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

//one way to access the data
console.log(jsUser.email);
console.log(jsUser.fullName);

//second way
console.log(jsUser["email"]); //when each key is a string so we need to put these " "

console.log(jsUser[mySym]);

//edit the values
jsUser.email = "sunny@google.com";
//Object.freeze(jsUser) // this locks the object and prevents from happening any changes

jsUser.greeting = function () {
  console.log("Hello JS user");
};

jsUser.greetingTwo = function () {
  console.log(`Hello JS user, ${this.name}`); //this keyword give access to everything that is in the object
};

console.log(jsUser.greeting());
//console.log(jsUser.greeting); // this will not execute the function, it will just give a reference

console.log(jsUser.greetingTwo());
