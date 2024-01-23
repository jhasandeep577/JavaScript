const user={
    username:"Hitesh"
    ,price:1899,
    welcomeMessage:function(){
        console.log(`${this.username} ,Thanks for the Shopping`)
        console.log(`Pay this Amount : ${this.price} `);
    }
}
console.log(user.welcomeMessage())
user.username="Sandeep"
console.log(user.welcomeMessage())
console.log(this)                 /* Empty Environment in Node Environment --- in webConsole -> its window */

function show(){
    const name="ShowFunction "
    console.log(this)
    console.log(this.name);       // This refers the cureent Context/Object and
                                  // show function is not inside any Object so undefined
    console.log(name);
}
show()

/* -------------------------------------------- Arrow-Functions -------------------------------------- */

const funct=()=>{                           //Synatx    ( Arguments.. )=>{ Code }       
    let username="Hitesh"
    console.log(this)
}
funct()
const func2=(num1,num2)=>{
    return num1+num2                                // Explicit return
}
const func3=(num1,num2)=> num1+num2                 // Implicit return 
const func4=(num1,num2)=> (num1+num2)
console.log(func2(56,45))
console.log(func3(56,45))
console.log(func4(56,45))