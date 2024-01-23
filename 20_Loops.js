let arr=[3,6,4,23,89,1,1,23,65,3,8]
    console.log(arr)
    /*  ---------Filter Method---------  */
newarr=arr.filter(item=>{
return item>10})
    console.log(newarr)
Newarr=[]
arr.forEach(item=>{
    if(item>10) Newarr.push(item)
})
    console.log(Newarr)
    /*  ---------Map Method---------  */
nums=arr.map(ele=>{
    return ele+10
})
    console.log(nums)
    /////////////////////////// Method Chaining ////////////////////////
let Newnums = arr.filter(item=>item>10).map(ele=>ele*100)
    console.log(Newnums)
    /*  ---------Reduce Method---------  */
const newArrs=[1,3,5,7,9]
let x=newArrs.reduce((acc,cv)=>{
    console.log(`${acc} --------- ${cv}`)
    return acc*cv;
},2)
    console.log(x)
