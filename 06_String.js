let Name="Sandeep";
let StudentName=new String("Rahul");
console.log(Name);                               // DataType - String - Primitive
console.log(StudentName);                     // DataType - Object - NonPrimitive
console.log(Name[3]);
console.log(StudentName[3]);

console.log('my name is '+Name);                                 // Concatenation
console.log(`My name is ${Name}`);     // String Interpolation ------- Better way 

console.log(Name.length);
console.log(StudentName.endsWith('d'));
console.log(Name.charAt(9));                                        // No Error ?

let newStudent="    Omni    ";
console.log(newStudent.trim());
const url="https://water%20save.com/login";
console.log(url.replace('%20','-'));
console.log(url.includes("water"));

console.log(url.split('/'));    // Splits into Array