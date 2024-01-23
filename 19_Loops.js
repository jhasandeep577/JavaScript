/* ---------------------------------------     Loops      ---------------------------------------------*/

                                          //// for-loop ////
 
for (let index = 1; index <= 10; index++) {           
    console.log(index)
}

                                         //// while-loop ////

let index=10;
while (index>0) {
    console.log(index);
    index--
}

                                        //// do-while-loop ////

do {
    console.log(index)
    index--
} while (index>0);

                                       //// Nested - loop ////

for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`Outer Loop ${i} - InnerLoop ${j}`)
        if(j==2) break;
    }
}

let studentsName=['Sandeep','Arshdeep','Pradeep','Sumandeep','Gagandeep']
let x=0;
while (x<studentsName.length){
    console.log(`Name of Student  :-  ${studentsName[x]}`)
    x++;
}

//////////////////////////////   High Order Array Loops   ////////////////////////////

                                        // for of - loop
                 // Can be Used on any Iterable Item like String ,Array, Object ...                                            
for (const iterator of studentsName) {
    console.log(iterator)
}

let name="Amandeep Chadda"
for (const iterator of name) {   
    console.log(iterator)
}

// Maps
const map=new Map();
map.set("In","India")
map.set("USA","United States of America")
map.set("En","England")
map.set("Bh","India")

console.log(map)
for (const [key,value] of map) {
    console.log(`${key} :- ${value}`);
}
const game={
    game1:"BasketBall",
    game2:"Baseball",
    game3:"Cricket"
}
/* for (const [key,value] of game) {       / for of gives values..
    console.log(`${key} :- ${value}`);     // Doesnot work for Objects
}*/

                     /* ------------------------ for in Loop ------------------------- */

for (const key in game) {                                   // for in gives keys
   console.log(`${key} <------> ${game[key]}`)              // For Object you can use for in
}
for (const key in studentsName) {
   console.log(`${key}  <------->  ${studentsName[key]}`)
}
for (const key in map) {
   console.log(`${key}`)
}
studentsName.forEach(element => {
    console.log(element)
});
studentsName.forEach(function(item){
    console.log(item)
})
function print(params) {
    console.log(params)
}
studentsName.forEach(print)

const lang=[
    {
        langName:"Java",
        langExt:".java"
    },
    {
        langName:"Python",
        langExt:".py"
    },
    {
        langName:"JavaScript",
        langExt:".js"
    }
]
lang.forEach(ele=>{
    for (const key in ele) {
        console.log(`${key} ---- ${ele[key]}`)
    }
})