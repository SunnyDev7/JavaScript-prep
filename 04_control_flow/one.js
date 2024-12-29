// if statement
if(true){

}

const userLoggedIn = true;
const debitCard = true;

if(userLoggedIn && debitCard){
    console.log("Allow to buy courses");
    
}

if(userLoggedIn || debitCard){
    console.log("Allow to buy courses");
    
}

//falsy value
// flase, 0, -0, Big Int, "", null, undefined, NaN

//truth value
//"0", true, "false", [], {}, function(){}


//Nullish Coalescing Operator (??)
let val1;
val1 = null ?? 10;

console.log(val1); //this will print 10

//Terniary operator 

//condition ? true : flase
