const name = "Sunny"
const repoCount = 50

// this syntax is outdated, so nowadays no one uses it,   console.log(name + repoCount + "Value");

//this is the new syntax called String Interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

//the below String is internally an Object
const gameName = new String('SunnyDev');
//the below console.log will five the zeroth element which is 'S'
console.log(gameName[0]);

console.log(gameName.__proto__)

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(1));
console.log(gameName.indexOf('y'));


const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-1, 2)
console.log(anotherString);

const newStringOne = "    Sunny      "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://sunny.com/sunny%20dev"

console.log(url.replace('%20', '-'));

console.log(url.includes('max'));





