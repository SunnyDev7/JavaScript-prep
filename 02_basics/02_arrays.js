const marvel_heros = ["thos", "captian america", "ironman"];

const dc_heros = ["superman", "flash", "batman"];

//marvel_heros.push(dc_heros); // this does not merge into single, but an array into another one, so its a mess
console.log(marvel_heros);

marvel_heros.concat(dc_heros); // this also produces same as above


const all_new_heros = [...marvel_heros, ...dc_heros] 
//this spread operator seperated or spreads each element into individual emlement

console.log("A", all_new_heros);


const another_array = [1,2,3, [4,5,6], 7, [6,7], [4, 5]]

const usable_another_array = another_array.flat() //give all depth arrays into one
console.log(usable_another_array);


console.log(Array.isArray("Sunny")) //check is its an array or not
console.log(Array.from("Sunny")) //converts anything into array

// another example
console.log(Array.from({name: "Sunny"})); //this will not be converted into array, you need to specify more
// search more into this problem

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); //merges each itme into an array

