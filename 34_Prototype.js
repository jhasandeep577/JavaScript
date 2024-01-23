function users(){
   console.log("User ---");
   return {username:"user"}
}
users.power=19;
console.log(users());
console.log(users.power);      // function is also an Object in Js
console.log(users.prototype);

let name="  Sandeep Jha    ";
console.log(name.length);
String.prototype.trueLength=function() {
    let newString=this.trim();
    console.log(`${newString}'s true length is ${newString.length}`);
    return newString.length;
}
console.log(name.trueLength());

                      // ------------ Prototypal Inheritance ------------//

      const school={
        Name:"Sandeep"
      }               
      const Teacher={
        name:"Name",
        __proto__:school
      } 
      console.log(Teacher.Name);   //prototypal Inheritance  ...

