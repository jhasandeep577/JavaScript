// // Promise in JavaScript ...
// const prom=new Promise((resolve,reject)=>{
//     // Do Async Tasks here for EX- DBcalls,crypotography(Encryption/decryption),Network
//     setTimeout(function(){
//         console.log("Task completed");
//         resolve()
//     },10000)
// });
// function x(){
//     console.log("what the hell is this ");
// }
// x();
// prom.then(function () {
//     console.log("promised resolved");
// });
// const newPromise=new Promise(function(resolve,reject){
//  setTimeout(function () {
//     resolve({userName:"Sandeep",userEmail:"emapleemail.com"});
//     console.log("promise created")
//  },1000);
// });
// newPromise.then(function(user){
//     console.log(`promise Consumed`);
//     console.log(user);
// })
// // console.log("Task");
// new Promise(function(resolve,reject){
//     setTimeout(function() {
//         const err=true;
//         if(err){
//            resolve({username:"Sandeep",age:21})
//         }else{
//              reject("Error : Something went Wrong");
//         }
//     },3000);
// }).then(function(user){
//     console.log(user);
//     return user.username;
// }).then(name=>{
//     console.log(name);
// }).catch(err=>{
//   console.log(err);
// });
// console.log("Task-----");

const prom=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let err=false
        if(err){
            reject("Error Something went Wrong");
        }else{
            resolve({name:"Sandeep",age:21})
        }
    })
});
async function promp() {
    try{
        let responsed= await prom
        console.log(responsed);
    }catch(e){
        console.log(e);
    }
}
promp();