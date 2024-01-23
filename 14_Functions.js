// ------------------------------- Functions in JavaScript ----------------------------- //

function name(){
    console.log("Hitesh")
}
name
name()
function addNumber(number1,number2){               // Parameters
    console.log(number1+number2);
}
addNumber(34,34)                                               // Arguments
const res=addNumber("4",2)                         // Undefined -- function not returning anything
addNumber(null,3)
console.log("result  :  "+res)
function addNumber2(number1,number2){                                                // Parameters
   return (number1+number2)
}
                                                
const res2=addNumber2(78,23)
console.log("result  :  "+res2)                     // function is returning number

function message(username="Sam"){                                                  // Default Argument ---------
    if(!username){                                  // undefined is a False Value
        return 'Please Enter Username'
    }
    return `${username} Just Logged in`             // Baptix Used
}
console.log(message())

function cart(...num1){                             // Rest Operator
console.log(num1)
}
cart(2,2,23,13,23,"ostrich")

const user={
    name:"Sandeep",
    email:"Sandeep@34gmail.com"
}
function handleUser(anyObject){
console.log(`Username is ${anyObject.name} and the Email is ${anyObject.emails}`)
}
handleUser(user)
handleUser({
    name:"Rohit",
    emails:"rt73378@gmail.com"
})

const ar=[34,45,545,333]
function arrayHandle(arar){
    return arar[1]
}
console.log(arrayHandle(ar))                           // Returning Second Place of the Array ---------
console.log(arrayHandle([23]))                         // Undefined 
console.log(arrayHandle(3))                            // Undefined
console.log(arrayHandle('sandeep'))                    // a --- Cause String is an Array
