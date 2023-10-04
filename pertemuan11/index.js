    // //module
    // import { fullName } from "./utils.js"
    // import hello from "./utils.js"


    // console.log(fullName)
    // hello()



// Async
// 1.pararell
setTimeout (() => {
    console.log("proses1")
    },3000)    
   
setTimeout (() => {
    console.log("proses2")
},5000)       

setTimeout (() => {
    console.log("proses3")
},4000)       

setTimeout (() => {
    console.log("proses4")
},8000)       


// 2.concurent
// 2.a callback
// 2.b promise
let condition
const newPromise = new Promise((resolve,reject)=> {
    if(condition){
        resolve ("Berhasil")
    } else{
        reject("gagal")
    }
})

// pakai promise
// 1. then - catch
// newPromise
//     .then ((result) =>{
//         console.log(result)
//     })
//     .catch ((error) => console.log(error))


//2. async - await 
const consumePromise = async () =>{
    try{
    let result = await newPromise
    console.log(result)
    }catch (error){
        console.log(gagal)
    }
}
consumePromise()