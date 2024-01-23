                         // ---- Lexical Scoping -----
            // function inside of the function will share the memory and resources
function outer(){
    let name="sandeep"
    inner();
   // console.log(`Outer Function ${name},${email}`)     //only name is accessible
    function inner(){
        let email="jhasandeep@mail.com"
        console.log(`Inner Function ${name},${email}`)          // Both accessible
    }
}
// console.log(` Global ${name},${email}`)  //  nothing accesible outside of scope
outer();

function outer2(){
    let name="Ajay"
    return inner;      // returning not just a fuction and its scope also its lexical scope
    function inner(){
        let email="Ajay6@mail.com"
        console.log(`Inner Function ${name},${email}`)          // Both accessible
    }
}

const x=outer2();
x(); // ----- That's why we are able to access the name from inner function