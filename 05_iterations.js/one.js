//all these are array specific loop

// for off loop
const arr = [1,2,3,4,5]

for (const e of arr) {
    console.log(e); 
}


//Maps
const map = new Map() 
map.set("IN", "India") //this create an object with key value pairs
map.set("USA", "America")
map.set('Fr', "France")

//console.log(map);

for (const [key, value] of map){ //syntax for destructing 
    console.log(key, value);
    
}

//now for of loop does not work for objects such as below
const myObject = {
    js: "JavaScript",
    cpp: "C++",
    rb: "Ruby",
    swift: "Swift"
}

//so here is the solution for in loop

for (const key in myObject) {
   console.log(key); //prints keys
   console.log(`${myObject[key]}`); //this will print values
}


const abc = ["a", "b", "c"]

abc.forEach((e, index, arr) => {
    console.log(e, index, arr);
    
})

//the below is very common practice

const langs = [
    {
        name: "javascript",
        ext: "js"
    },
    {
        name: "java",
        ext: "java"
    },
    {
        name: "python",
        ext: "python"
    },
]

langs.forEach((e) => {
    console.log(e.name);
})