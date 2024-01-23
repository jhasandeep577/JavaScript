let marvel=["IronMan","Captain America","Hulk"]
   // arr=[783,45,32]                  //cannot assign to a constant variable
let xmen=["Wolvarine","Xavier","Cyclops"]
   //marvel.push(xmen);
console.log(marvel)
   //console.log(marvel[3][2])
console.log(marvel.concat(xmen))       // It returns a new Array --- Can Pass More arguments
console.log(marvel)    

const fantastic4=['Human Torch','Mr fantastic','The Thing']
marvel=[...marvel,...fantastic4]       //Spread Operator *Important
console.log(marvel)
 let newArr=[1,4,[7,79,34],8,[45,54,[34,90,78]]]
 console.log(newArr)
 newArr=newArr.flat(Infinity);
 console.log(newArr)            // Returns 1-D Array  
 console.log(Array.isArray("Hitesh"))
 console.log(Array.from("Hitesh"))     // Converts into Array
 console.log(Array.from({name:"Hitesh"}))   
                //Empty Array cause function is not able to create an Array
let score=100
let score2=200
let score3=300
let score4=400
console.log(Array.of(score,score2,score3,score4))       

