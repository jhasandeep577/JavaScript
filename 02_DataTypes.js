"use strict";       //  Treats All JS(JavaScript) Code as a newer Version
//  alert(3+3)          we are using NodeJS not Web Browser


console.log(3+3);console.log("Sandeep");         //Code Readability decreases

console.log(3
+3);console.log("Sandeep Jha");                      //Code Readability decreases


// ECMA sets the Standard for Javascript..
// DataTypes

let Name="Sandeep"      // String we can use both single or double quotation but we should prefer double
let Age=21              // Number -2^-1074 to 2^1024      NOTE: if we Need number which is not in the range of Number(DataType) we can go for BigInt(Data Type)
let Logged=true         // boolean (true/false) 
let Image=null          //null -------------------- Standlone Value
let Marks;              //undefined --------------- A Special Type
// Symbol DataType used for unique Value ----- It will be used in further upcoming Codes so wait till then...
// Object --- It will be used in further upcoming Codes so wait till then...

console.table([Name,Age,Logged,Image,Marks]);
console.log(typeof Name);                            // Using this method/function we can identify the DataType of any Variable --
console.log(typeof Image);                           // It gives Object ? --- 
console.log(typeof Marks);                           // It gives undefined ? ---

// THERE ARE MANY MORE DATATYPES WHICH WILL BE DISCUSSED FUTHER ~