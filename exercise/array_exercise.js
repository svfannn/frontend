// forLoop
let people = ["greg","mary","devon","james"]

for (i  = 0 ; i<people.length; i++){
    console.log(people[i])
}
console.log(people)

//forEach
// let people = ["greg","mary","Devon","james"]
people.forEach(function(data){
    console.log(data)
})

//remove greg
// let people = ["greg","mary","Devon","james"]
let peoplebaru = people.filter(name => name !== "greg")
console.log(peoplebaru)

//remove james
// let people = ["greg","mary","Devon","james"]
let peoplebaru1 = people.indexOf("james")
people.splice(peoplebaru,1)
console.log(people)

//add matt
// let people = ["greg","mary","Devon","james"]
people.unshift("matt")
console.log(people)

// let people = ["greg","mary","Devon","james"]
people.push("efan")
console.log(people)

// using for loop
for (let i =0; i <people.length; i++){
    console.log(people[i])
    if (people[i] === "mary"){
        break;
    }
}
console.log(people)
//using slice
let excludedPeople = ["matt", "mary"];
let copiedPeople = people.slice().filter(item => !excludedPeople.includes(item));
console.log(copiedPeople);

//SPLICE
let HapusDevon = people.indexOf("devon");
if (HapusDevon !== -1) {
  people.splice(HapusDevon, 1, "Elizabeth", "Artie");
}
console.log(people)

//bob

let addBOb = people.concat("Bob")
console.log(addBOb)