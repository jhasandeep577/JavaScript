/*--------------------- Let's Learn About Object in JavaScript --------------------*/ 
const mysym=Symbol("Key1")
const user={
 Name:"Hitesh",     // gets Converted like this ------ "Name":"Hitesh"
 "Full Name":"Hitesh Chaudary",
 Age:18,
 Location:"Noida",
 isLogged:true,
    //  mysym:"newKey1"    Wrong SYNATX for Symbol
 [mysym]:"newKey"
}
// Object.create()   Another Way to create an Object 
// How to access Objects..
console.log(user.Location)
console.log(user["Location"])   //--Comment on Line No 3
// cannot do This *** console.log(user.Full Name)
console.log(user["Full Name"])
     //  console.log(typeof user.mysym+'              '+user.mysym)
console.log(typeof user[mysym]+'              '+user[mysym])

user.Age=45
console.log(user.Age)

//Object.freeze(user)
user.Age=78             // Object is not Gonna Change due to freeeze method ....
console.log(user)

user.greeting=function(){
    console.log("Namaste")
}
console.log(user.greeting)

user.greeting2=function(){
    console.log(`His Name is ${user["Full Name"]}`)        // this can also be used

}
console.log(user.greeting2())
console.log(user)

