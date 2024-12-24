const myArr = [0, 1, 2, 3, 4, 5,];

console.log(myArr[0]);

// const newArr = new Array(1, 2, 3, 4) a different way to initialize the array

const cities = ["Berlin", "Magdeburg", "Hamburg", "Hannover", "Munich"];


//Array Methods

// cities.push("Potsdam");
// console.log(cities);

// cities.pop(); //removes last value
// console.log(cities);

// cities.unshift("Dortmund") 
// this add value to the first index, but this approach is not good practise as it shift index of each element.
// console.log(cities);

// cities.shift() //removes first element
// console.log(cities);

console.log(cities.includes(9));

console.log(cities.indexOf("Munich")); //gives index of element

const newArr = cities.join(); //converts array to string
console.log(typeof newArr);

// ++++++++++++++++ Slice and splice

console.log("A", cities);

const myn1 = cities.slice(1, 3); // this only show specific portion of an arrya
console.log("slice", myn1);

const myn2 = cities.splice(1, 3) // this also show specific portion but also manipulates the original array
console.log("splice", myn2);
console.log(cities);












