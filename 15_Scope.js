// Global Scope ------------
// const var1="Empty"
// let var2="Mpty"
// var var3="Mt"
// var4=""
if(1){                              // 1 Coverts into boolean as true
    // Scope {}......
    // Block Scope
      const var1="Empty -- Inside If-Block"
      let var2="Mpty -- Inside If-Block"
      var var3="Var3 Inside If-Block"
      var4="Var4 Inside If-Block"
      console.log(var1)
}
console.log(var3)                     // var acts like global variable it doesn't matter where you declr it 
console.log(var4)                     // Default also acts like var .../
//console.log(var1);
//console.log(var2);
/*---------------------------------------------------- Nested Scope ---------------------------------------------*/
one()                              // Can be accessed even before declr of the function ******
function one(){
 const username="hitesh"
 
   function two(){
    const user="youtube"
    console.log(username);
   }
   two()
   //  console.log(user) -- Cannot access a variable outside its Scope ........ same goes for If-Else Block
}

// fun(45) ---------- Cannot accces it before the function gets stored Inside the Variable ******
const fun=function (num){          // JavaScript Variables are very Powerful they can Hold almost everything.....
return num+4;
}
//console.log(add(45));                // Cannot accces it with Function's Name  
console.log(fun(45)); 
                                    // Hoisting soon ----->
