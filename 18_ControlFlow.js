/* ----------------------------------------- Control-Flow -------------------------------------------------------*/
// If
const isUserLoggedIn=true
if(isUserLoggedIn){                           
    console.log("Execution-Block")          //Execution Block for If
}
console.log(((num1,num2)=>(num1+num2))(34,34))                    // Just a  Reminder of Arrow Function & IIFE 

// If - Else
const bal=7000
if(bal>8000){
   console.log("Enough Money to Buy Item")
}else{
    console.log("Out of Money")
}

if(bal>800) console.log("Brought"),                              // Implicit Scope ------ Not a Good Pratice
console.log("To the Next shop")

// Multiple-Condtion

let marks=70
if(marks>90) console.log(`A Grade`);
else if(marks>75) console.log(`B Grade`);
else if(marks>60) console.log(`C Grade`);
else if(marks>40) console.log(`D Grade`);
else if(marks>0) console.log(`Failed`);
else  console.log(`Wrong Marks`);

let addhar=true
let panCard=false
let VoterId=true

if(addhar && panCard && VoterId) console.log("Applicable")           // && operator
else console.log("Doesnot have all Document");
if(addhar || panCard || VoterId) console.log("Applicable")           // || operator
else console.log("Doesnot have all Document");

/* ------------------------------------------- Switch-Case -------------------------------------------------- */ 

let month="Jan"
switch (month) {
    case "Jan":
        console.log("It's January")
        break;
    case "Feb" :
        console.log("It's Feb")
        break;
    case "Mar" :
        console.log("It's March")
        break;
    case "Apr":
        console.log("It's April")
        break;
    case "May":
        console.log("It's May")
        break;
    
    default:
        console.log("Not Valid")
        break;
}
// ------------------ Common Practices ------------

let students=[]
let employee={}

if(students.length===0){
    console.log("Empty")
}
if(Object.keys(employee).length===0){
    console.log("Empty")
}

/* ---------------------------------- Nullish coalescing Operator ?? --------------------------------------*/
let val1;
val1= 5 ?? 10
val1=null ?? 10
val1=undefined ?? 10
val1=NaN ?? 10                   ////  Works with only null and undefined
console.log (val1)

/* ---------------------------------- Ternary Operator -----------------------------------------*/
// Mini version of if-else
45<90?console.log("greater"):console.log("lesser")

