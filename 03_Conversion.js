let studentAge="21"

console.log(typeof studentAge);     // String 
studentAge=Number(studentAge)       // This is how we do Conversion in Javascript
console.log(typeof(studentAge));   

let studentId="CC7834"
studentId=Number(studentId)       // It will change the DataType of studentId to Number but the value will become NaN 
console.log(typeof studentId);    // It will Print Number
console.log(studentId);           // It will Print a special Type NaN(Not a Number)

let studentPhoneNumber
studentPhoneNumber=Number(studentPhoneNumber)   // It will change the DataType of studentPhoneNumber to Number but the value will become NaN 
console.log(typeof studentPhoneNumber);         // It will print Number
console.log(studentPhoneNumber);                // It will Print a special Type NaN(Not a Number)

let studentMarks=null
studentMarks=Number(studentMarks)        // It will change the DataType of studentMarks to Number
console.log(typeof studentMarks);         // It will print Number
console.log(studentMarks);                 // It will Print 0

let studentActive=true
studentActive=Number(studentActive)        // It will change the DataType of studentMarks to Number
console.log(typeof studentActive);         // It will print Number
console.log(studentActive);                // It will Print 1
// true => 1  -----  false => 0 ( If you Convert boolean to Number )

let studentAddress=""
studentAddress=Boolean(studentAddress)      // It will change the DataType of studentAddress to boolean
console.log(typeof studentAddress);         // It will print boolean
console.log(studentAddress);                // It will Print false
// "" => false  -----  "NON_EMPTY_STRING" => true ( If you Convert String to boolean)

studentMarks=null
studentMarks=String(studentMarks)           // It will change the DataType of studentMarks to string
console.log(studentMarks);                  // It will print null
console.log(typeof studentMarks);           // It will print string

// THIS IS NOT THE END ,YOU CAN TRY OTHER CONVERSIONS BY YOURSELF OF DIFFERENT DATATYPES ~

