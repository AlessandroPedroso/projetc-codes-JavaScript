const student = [{
    name:"Caio",
    age: 28,
    genre: "male"
},{
    name:"Alessandro",
    age: 28,
    genre: "male"
}]
const student2 = {
    name:"Caio",
    age: 28,
    genre: "male"
}
 //console.log(student2["name"])
// console.log(student.name)
// console.log("----------------------------------------")

for (let property in student2) {
    console.log(`${property}: ${student2[property]}`)
}

// console.log(`----------------------------`)
// for (let property in student) {
//     // console.log(`${property}: ${student[property]}`)
//     console.log(student[property])
// }