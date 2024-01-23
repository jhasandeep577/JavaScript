// const user={                   // Repetitive Code to create new Objects
//     username:"Hippo",
//     age:20,
//     location:"Noida"
// }
// const user1={
//     username:"Elephant",
//     age:20,
//     location:"Delhi"
// }
/*                     OOP (Object Oriented Programming) in JavaScript              */
console.log(this);
function user(username,age,location){           // Constructor Function
    this.username=username;
    this.age=age;
    this.location=location;
    this.greeting=function(){
        console.log(`Hello, i'm ${this.username}`)
    }
   // return this;      ------    implicit returns Object 
}
const userOne=new user("Amn",21,"Noida");
const userTwo=new user("ankit",24,"Delhi");
const userThree=new user("krish",28,"Amritsar");

// OOP Pillars ---------->        *Abstraction ,*Encapsulation  ,*Inheritance  ,*Polymorphism

console.log(userOne)
console.log(userTwo)
console.log(userThree)
console.log(userThree.greeting())
console.log(userOne instanceof Array);        //  instanceof operator 
console.log(userOne instanceof user);          