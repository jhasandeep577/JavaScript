// class user{                                  // user class --- syntactical sugar coating
// constructor(username,email,age){             // constructor of user class
//     this.username=username
//     this.email=email
//     this.age=age
// }

// showData(){
//     console.log(`${this.username} ----- ${this.email} ------ ${this.age}`);
// }
// }
// let useris=new user("Sandeep","sandeep23@mail",21);         // creating user Object
// console.log(useris)                      // user Object
// console.log(useris.showData())           // showData Method

// ----- Behind the Scenes -------
function user(name,email,age){
    this.name=name;
    this.email=email;
    this.age=age;
}
user.prototype.show=function(){
    console.log(`${this.name} ----- ${this.email} ------ ${this.age}`);
}

let newUser=new user("Ankit","ankit6723@mail",23);
console.log(newUser);
newUser.show();
class admin extends user{
    constructor(name,email,age,id){
        super(name,email,age);
        this.id=id;
    }
    showData(){
        console.log(`${this.name} -----${this.age} ------${this.email} -----${this.id}`);
    }
}
let newAdmin=new admin("suraj","surj787@mail",22,873478);
console.log(newAdmin);
console.log(newAdmin.show()); 
console.log(newAdmin.showData());
console.log(newAdmin instanceof user)       // Behind the scene of class in javaScript 