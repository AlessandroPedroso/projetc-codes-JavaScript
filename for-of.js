let myName = 'Alessandro'
let allNames = ['Maria','João','Pedro', 'Gilberto']

const student = [{
    name:"Caio",
    age: 28,
    genre: "male"
},{
    name:"Alessandro",
    age: 28,
    genre: "male"
}]


// for (let name of student) {
//     console.log(`Nome do Aluno: ${name.name}`)
// }

for (const names of allNames) {
    console.log(names)
}