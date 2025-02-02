// the below score will give number as an output during runtime
const score = 400;
console.log(score);

// But if you really want to declare a variable as number explicitly then do the below
const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNumber = 23.8966;

console.log("hey" + otherNumber.toPrecision(2));

const hundreds = 100000;
console.log(hundreds.toLocaleString("en-IN"));



// ++++++++++++++++++++++++++++++++++ Math ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.6));
// console.log(Math.min(4,3,6,8));
// console.log(Math.max(4,3,6,8));

console.log(Math.random()); //value of this random would always be between 0 and 1
console.log((Math.random()*10) + 1);

const max = 20;
const min = 10;

console.log(Math.floor(Math.random() * (max - min +1)) + min);







