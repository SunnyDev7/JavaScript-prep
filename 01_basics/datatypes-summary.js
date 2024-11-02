// Primitive datatype (all primitives are call by value types)

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt.

const score = 100
const scoreVlaue = 100.3

const isLoggedI = false
const outsideTemp = null
let userEmail   //we can explictly put the vlaue as = underfined, but this is the implicity way.

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id);
console.log(anotherId);

console.log(id === anotherId);


// Non-premitive or Reference type (all non-premitives are call by reference tyeps)
//NOTE: return type of all the non-premitve types are always object

// Array, Objects, Functions

const heros = ["shaktimann", "spiderman", "batman"]

let myObj = {
    name: "xyz",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myFunction);


// NOTE: JS is a dynamically typed language, which means the type of data are defined at teh run time.
// where as TypeScript is statically typed.

// NOTE: if you want to master JS, just master the Objects and web events or browser events of browser. 


// NOTE:
//Return type of variables in JavaScript
// 1) Primitive Datatypes
// Number => number
// String  => string
// Boolean  => boolean
// null  => object
// undefined  =>  undefined
// Symbol  =>  symbol
// BigInt  =>  bigint

// 2) Non-primitive Datatypes
// Arrays  =>  object
// Function  =>  function
// Object  =>  object

