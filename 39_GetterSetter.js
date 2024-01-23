// class user{
//         // constructor ,get and set are keywords ....
//     constructor(name,password){ 
//         // it also sets the value same as  setter method .... 
//         // but when the setter is there in class .... it goes for setter method to set value ....
//         this.name=name;
//         this.password=password;
//     }
//     get name(){    
//         // get method returns the value of the particular value on which it has been named ....
//                 return this._name+"234"+"bdwe";   
//         // why not this.name cause this.name calls get function inside the class then it happens in a loop so stack overflow
//     }
//         // _name is a new variable which is used to set and get name variable ....

//     set name(value){    
//         // vice versa ....
//         this._name=value;
//     }
//     show(){
//         console.log(`Name : ${this.name} , Password : ${this.password}`);
//     }
// }
// let user1=new user("Sandeep","hdud8372");
// console.log(user1.name);
// console.log(user1._name);
// user1.show();


// function user(name,email){
// this._email=email;
// this._name=name;

// Object.defineProperty(this,'email',{
//     set:function(value){this._email=value},
//     get:function(){return this._email+"Wakaoo"}
// })
// }
// const user1=new user("Sandeep","jhasandeep23763@mail");
// console.log(user1.email)
// console.log(user1._email)


const user={
    _name:"sandeep",
    _email:"jhasandeep43@mail.com",

    set name(value){
        this._name=value;
    },
    get name(){
        return this._name+"whatnow";
    }
}
const user1=Object.create(user);
user.name="Amit";
console.log(user1.name)
console.log(user1._name)