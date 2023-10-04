// string literal
//----------


// let nama = "jhon doe"
// let age =90
// let address ="manado"

// // halo nama saya jhon doe , umur saya 33 tahun
// // dann saya tinggal di manado

// let kalimat6 = `hallo nama saya ${nama},umur saya ${age}, dan saya tinggal di ${address}`
// console.log(kalimat6)


// arrow function

// const sayGreatings6 = (name) => {
//     return 'hello ${name}'
// }
// console.log(sayGreatings6())


//implicit rertun value
// const sayGreatings6 = (name) => `hello ${name}`
// console.log(sayGreatings6())


//IFEE arrow function
// let output1 = (() => `hello` )()
// console.log(output1)

// //call back function
// let numbers = [1,2,3,4,5]
// let output2 = numbers.map((item) => item)
// console.log(output2)

//defult parameter

// const sayGreatings = (fullname) =>{
//     console.log(`hello ${fullname} `)
// }
// sayGreatings("peter")


const sayGreatings6 = (name = "jhon doe",age = 30) => {
    console.log(`hello ${name}`)
}
sayGreatings6("peter")


