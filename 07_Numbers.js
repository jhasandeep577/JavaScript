let Marks=98;                      // JavaScript will automatically detects as Number Type ..
const Balance=new Number(90);      // Expicitily creating an Object of Number ----[Datatype nonPrimitive Object]
console.log(Marks);
console.log(Balance.__proto__)     /* This method returns an Object which contains info about 
                                    that particular type on which the method has been used on
                                    ----- Use this method in browser console .... */ 

console.log(`type of Balance is ${ typeof Balance} and the Output is ${Balance}`);

console.log( typeof (Balance.toString()));       // toString() method is used to change the Datatype into String
console.log(Balance.toFixed(2));                 // It gives the decimal output upto given digits ..

const otherumber =8934873.89347843;
console.log(otherumber.toFixed(1));
console.log(otherumber.toLocaleString('en-IN'))  // Indian Format NUmber

console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)

//-------------------------------------------------- Maths -------------------------------------------------------------------

console.log(Math);
console.log(Math.abs(-89));            // Negative to Positive NOT vise versa
console.log(Math.round(4.56))          // It round offs the value 
console.log(Math.ceil(8.1))
console.log(Math.floor(6.9))
console.log(Math.min(3,67,1,90,21,-1));   //Mth.max  ----- Just Opposite
console.log((Math.random()*10)+1);

const max=10
const min=20
let value = Math.floor(Math.random()*10)
console.log(value)



