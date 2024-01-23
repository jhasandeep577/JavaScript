const TinderUser={
    name:'Rohit',
    age:22,email:"rt67373@gmail.com",
    Location:['Noida','Delhi','UttarPradesh','UP','India','Bharat']
}
const TinderUser2=new Object()     // Empty Object 
TinderUser2.Id=3673
TinderUser2.UserName={
    Fullname:{
        FirstName:'Sandeep',
        MiddleName:'Kumar',
        LastName:'Jha'
    }
}
console.log(TinderUser)
console.log(TinderUser2.UserName.Fullname.LastName)  

const obj={1:'1',2:'b'}
const obj2={3:'c',4:'d'}
const obj31={5:'c',6:'d'}
const obj4={7:'c',8:'d'}

const newObj={obj,obj2}
console.log(newObj)

const obj3=Object.assign(obj,obj2,obj31,obj4)     // Arguments (Target,source)****** 
console.log(obj3)
console.log(obj)
//Let's use Spread Operator
let objx={...obj2,...obj4,...TinderUser}
console.log(objx)
console.log(Object.keys(TinderUser))             // To get Keys from Object
console.log(Object.values(TinderUser))              // To get values from Object
console.log(Object.entries(TinderUser))                // To get Entries from Object
console.log(TinderUser.hasOwnProperty('name'))              // To check if the property exists or not **