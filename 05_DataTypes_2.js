                                       // Primitive DataType---
                        /* string,number,boolean,null,undefined,BigInt,symbol */

let IsLogged=true
let Name="Anuj"
let Id=23435
let DigitalNo=9237373n
let marks=null
let gender;
let uniqueId=Symbol("7823")

console.log("IsLogged  "+typeof IsLogged)
console.log("Name  "+typeof Name)
console.log("Id  "+typeof Id)
console.log("DigitalNo  "+typeof DigitalNo)
console.log("marks  "+typeof marks)
console.log("gender  "+typeof gender)
console.log("uniqueId  "+typeof uniqueId)

                                       // Non-Primitive or Reference Type
                                           /* Array,Object,Function */

 let StudentSubjects=["Science","Math","Sanskrit","Computer Science"]
 let StudentDetails={
    Name:"Amit",
    Age:22,
    Course:"B.Sc",
    Active:true
 }
 let Pay=function paymentOn(){
    console.log("Paying...");
 }
 console.log(StudentSubjects)
 console.log(typeof StudentSubjects);
 console.log(StudentDetails)
 console.log(typeof StudentDetails);
 console.log(Pay);
 console.log(typeof Pay)                         // funtion ------ but in deep it is object 

                            // Memory Management in JavaScript ------ Stack & Heap
                              // Stack( Primitive ) ----- Heap ( Non-Primivite )

 let NewName="Sandeep"
 let UpdateName=NewName
 UpdateName="Sandeep Jha"                        // Primitive uses copy so original value won't change
 console.log(NewName+" ------ "+UpdateName)

 let NewStudent={
   Name:"Sandeep",
   Email:"Sandeep3@gmai.com"
 }
 let UpdateStudent=NewStudent
 UpdateName=NewStudent
 UpdateStudent.Name="Sandeep Jha"                 // NonPrimitive uses Reference so original value will be changed 
  console.log(NewStudent);
  console.log(UpdateStudent);