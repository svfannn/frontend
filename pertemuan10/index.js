// rest & spread operator

//rest parameter
// const penjumlahanArray = (...params) => {
//     let total = 0
//     params.forEach(item => {
//         total += item
//     })
//     console.log(total)
// }
// penjumlahanArray(1,2,3,5,6,7,8,9,10)
// //tanpa rest
// // const penjumlahanArray = (a,b,c) => {
// //     const array = [a,b,c]
// //     let total = 0
// //     array.forEach(item => {
// //         total += item
// //     })
// //     console.log(total)
// // }
// // penjumlahanArray(1,2,3)


// //spread operator
// // let array1= [1,2,3,4,5]

// // console.log(...array1)
// // //1.Duplikasi array
// // let array2 = [...array1]
// // console.log(array2)
// // array1.push(6)
// // console.log(`Array 1 = ${array1}`)
// // console.log(`Array 2 = ${array2}`)


// //2.menghitung array
// let array1 = [1,2,3]
// let array2 =[5,6,7]
// let array3 = [8,9,10]

// let combineArray6 = [...array1,...array2,...array3]
// console.log(combineArray6)

// //pada objek
// const jhon ={
//     fullName: "jhon",
//     age: 30,
//     address: "manado",
// }
// //duplikasi objek
// let student = {...jhon}
// jhon = {...jhon, job: "teacher"}
// console.log(jhon)

// //menggabungkan objek
// let obj1 = {a:1,b:2}
// let obj2 = {c:3,d:4}
// let combineObj ={...obj1,...obj2}

//Destructuring

let buah = ["mangga","pisang","anggur","pepaya","durian"]
let[, , buah3,...buahLainn]=buah
console.log(buah)