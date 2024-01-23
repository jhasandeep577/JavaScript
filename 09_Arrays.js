/*------------------------------------------         Arrays          ----------------------------------------------*/
const arr=[987,true,4,2,'Sandeep']    // Javascript Arrays can store different data of Different Dataypes
                                    // Also Js Arrays are reSizable 

console.log(arr[0])                 // 0 based Indexing
console.log(arr[8])      // undefined
let ams=arr.copyWithin()
ams[2]=false
console.log(ams)
console.log(arr)

let newArr=new Array('Shaktiman','Doga','Naga')
console.log(newArr)

/*------------------------ Array Methods -----------------------------*/

newArr.push('krish')        // This adds a data to the end of an Array
console.log(newArr)
newArr.pop()                // It removes the last data of the Array
console.log(newArr)
newArr.unshift('Shiva')     // It also adds the data to the Array 
                            //but on 1st Postion so every data needs to shift one position....
console.log(newArr)
newArr.shift()
console.log(newArr)         // Vice versa of the unshift() method
console.log(newArr.indexOf('Doga'))
console.log(newArr.includes('Naga'))
let updateArr=arr.join()
console.log(typeof updateArr)

let arss=updateArr.split(',')
console.log(arss)

//slice & splice
let takeArray=[9,3,4,3,58,3]
console.log(takeArray.slice(0,3))          // Excludes 2nd arguments Index *** no Change in original Array
console.log(takeArray)

// splice method is used to remove or add data on particular index 
console.log(takeArray.splice(2,2,34,56))         // Includes 2nd argumant's Index *** Change in original Array
// .splice(index, how many,item1,....., itemN)
console.log(takeArray)
console.log(takeArray.splice(3,2))
console.log(takeArray)









