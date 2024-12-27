// let a = 10
// const b = 20
// var c = 30

// console.log(a,b,c);

// the above all let, var , and const are working in same manner no difference os there among
//but the main difference comes when there is block or scope defined with these {}

//var c = 300
//golbal scope
let a = 300

if (true) { //block scope
  let a = 10;
  const b = 20;
  var c = 30;
  console.log("Inner", a);
  
}

//console.log(a); //this will give o/p as a is undefined
//console.log(b); //this will give o/p as b is undefined
console.log("Outer", a); //but this will print the value of c which is a problem


//note: Global scope in web browser is Window, and in node env is different. 