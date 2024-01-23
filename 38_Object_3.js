
Math.PI=40.76;
console.log(Math.PI)           // Cannot chnage the value of PI

let x=Object.getOwnPropertyDescriptor(Math,"PI");
console.log(x);
const Chai={
  name:"Ginger chai",
  Price:10,
  ingredients:["Tea Leaves","sugar","Milk","Ginger","Water"],
  function() {
    console.log("function inside Chai's Object")
  }
}
console.log(Object.getOwnPropertyDescriptor(Chai,"name"));
Object.defineProperty(Chai,"name",{
    writable:false,
    enumerable:false,
    configurable:false
})
Chai.name="GingerTea"           // writable is false ....
console.log(Chai.name);
for (let [key,value] of Object.entries(Chai)) {
    if(!(value instanceof Function)){
    console.log(`${key} ---> ${value}`)            // Name was not enumerable
}}
