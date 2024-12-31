const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const addTen = myNumbers.map((n) => n + 10);
console.log(addTen);

//chaining

const myNumbs = myNumbers
.map((num) => num * 10)
.map((num) => num + 1)
.filter((num) => num >= 40);

console.log(myNumbs);
