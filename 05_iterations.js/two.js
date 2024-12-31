// const langs = [
//     {
//         name: "javascript",
//         ext: "js"
//     },
//     {
//         name: "java",
//         ext: "java"
//     },
//     {
//         name: "python",
//         ext: "python"
//     },
// ]

// const values = langs.forEach((item) => { //mainly the forEach does not return a value
//     //console.log(item);
//     return item
// });

// console.log(values);

//in cases when we need to just return the value for from the array for conditional checking and all
//so here forEach lopps does not come handy 


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNumbs = myNums.filter((num) => num > 4) //this syntax returns value implicitly
const newNumbs = myNums.filter((num) => { //this does not return anything without return keyword
    return num > 4
})
console.log(newNumbs);



const newFor = []

myNums.forEach((num) => { //this is the way to use forEach for such cases
    if(num > 4){
        newFor.push(num)
    }
})

console.log("A", newFor);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// const userBooks = books.filter((b) => b.genre === 'History')
const userBooks = books.filter((b) => b.genre === "History")

console.log("B", userBooks);


