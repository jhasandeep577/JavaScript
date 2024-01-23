let student=[{name:"Sandeep",age:21},{name:"rohit",age:22},{name:"Ankit",age:23}]      // Array of Objects
student.forEach(item=>{
    for (const [key ,value] of Object.entries(item)) {          // for of loop
        console.log(`[ ${key}: ${value} ]`);
    }
});
// %DebugPrint(student);

