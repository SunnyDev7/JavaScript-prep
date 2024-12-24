// Dates

let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
console.log(typeof myDate);

let myCreatedDate = new Date(2025, 0, 23); //in Js month starts from zero
console.log(myCreatedDate.toDateString());

let newDate = new Date(2025, 0, 2, 5, 3);
console.log(newDate.toLocaleString());

let dateThree = new Date("2025-01-02");
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp); //gives value in mili-seconds

console.log(Math.floor(myTimeStamp / 1000)); //Gives time in seconds

let tempDate = new Date();
console.log(tempDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

console.log(tempDate.toLocaleString("default", { weekday: "long" }));
;
