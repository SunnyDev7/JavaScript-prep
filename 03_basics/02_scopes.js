// let a = 10
// const b = 20
// var c = 30

// console.log(a,b,c);

// the above all let, var , and const are working in same manner no difference os there among
//but the main difference comes when there is block or scope defined with these {}

//var c = 300
//golbal scope
let a = 300;

if (true) {
  //block scope
  let a = 10;
  const b = 20;
  var c = 30;
  console.log("Inner", a);
}

//console.log(a); //this will give o/p as a is undefined
//console.log(b); //this will give o/p as b is undefined
console.log("Outer", a); //but this will print the value of c which is a problem

//note: Global scope in web browser is Window object, and in node env is empty object {}.

//+++++++++++++++++++++++++++++++++++ Scope two ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function one() {
  const username = "Sunny";

  function two() {
    const website = "youtube";
    console.log(username);
  }

  //console.log(website);

  two();
}

one();


// below is interesting topic
// there are two ways you can define function, one is simple and other is inside a const or let or var

//1

console.log(addOne(5)) // this will just return the valeu and nothing else, even if called before func declaration
function addOne(num){
    return num + 1;
}


//2
addTwo(5) // but this calling before declaration will give error 
const addTwo = function(num){
    return num + 2;
}

// the above phenomena is called Hoisting


