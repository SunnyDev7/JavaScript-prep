//reduce

const myNumbers = [1, 2, 3]



const myTotal = myNumbers.reduce((accumulator, currentValue) => {
    
    console.log(`Accu: ${accumulator} and Val: ${currentValue}`);
    
    return accumulator + currentValue
    
}, 0)

console.log(myTotal);



const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);
