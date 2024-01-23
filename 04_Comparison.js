console.log(2==8)          // Obviously false
console.log(5>9)           // Simple math 

console.log(0<=null)       // true , null gets Converted into Number(0) ?
console.log(0<null)        // This time it won't gets Converted ?

//ECMA Sets Standard for Opertaor precedence and all

console.log(NaN==NaN)      // false ? NaN cannot be used for Comparison

console.log("6"==6)        // true ? conversion
console.log("6"===6)       // false ,it compares value as well as datatypes
console.log("2"+3+4)       // 234 string+number=string---->string+number=string
console.log(2+3+"4")       // 54  number+numer=number--->number+string=string
console.log(2+"3"+4)       // Likewise

console.log("Hitesh"=="hitesh")  // Case-Sensitive Comparison ---False
console.log("hitesh"=="hitesh")  // True 

console.log(1==true)             // true, gets converted into number which is 1 
console.log(null==false)         // false , totally different Comparison

console.log(undefined==0)        // false , special datatype
console.log(undefined==null)     // true , Makes sense
console.log(NaN==undefined)      // NaN cannot be used for Comparison
console.log(null==NaN)           // No need to say it again
console.log(NaN==NaN)            // and again
