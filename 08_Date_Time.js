let mydate= new Date()                // Object has been created of Date Type -----
console.log(mydate)                                    
console.log(mydate.toString())
console.log(mydate.toLocaleString())
console.log(mydate.toDateString())
console.log(typeof mydate)             // Obviously Object Type -------------------
console.log(new Date()==new Date())    
// == Operator doesn't works on Object maybe not sure but it doesn't work for Date 

let newDate= new Date(2023,0,1)                                 // Year-Month-Date
console.log(newDate.toDateString()) 
newDate=new Date(2023,0,1,5,3,78)            // Year-Month-Date-Hour-minute-second
console.log(newDate.toLocaleString());
newDate= new Date("2012-01-23")              // String argument ------- Month doesn't Starts with 0(Invalid date)
console.log(newDate.toDateString())

let myTimeStamp=Date.now()
console.log(myTimeStamp)       
console.log(newDate.getTime())    
console.log(Math.round(Date.now()/31104000000))         // mili-seconds to years 1000*60*60*24*30*12
console.log(newDate.getMonth())                         // 0 - means 1st month
console.log(newDate.getDay()==(new Date("2022-01-24")).getDay())               // Comparing the days

// You can print date like this 
console.log(`Date ${newDate.getDate()}-0${newDate.getMonth()+1}-${newDate.getFullYear()}`)

//----------------------------- Customizing toLocalString() -------------------------

console.log(newDate.toLocaleString('defautly',{
    hourCycle:"h12",
}))
