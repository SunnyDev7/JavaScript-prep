//Immediately Invoked Functions Expressions (IIFE)

//such functions are used when you want soeme code to immediately run when you start a server or application
//also when global scope is polluting your variables or functions that you are going to define, to avoid this IFFE is used

(function chai() {
  //named Iife
  console.log("DB connected");
})(); //IIFE syntax
//a semi-colon is must because IIFE func doesnt know when to stop ist context, so a ; helps to do it

((name) => {
  //simple Iife
  console.log(`DB Connected to ${name}`);
})("Sunny");
