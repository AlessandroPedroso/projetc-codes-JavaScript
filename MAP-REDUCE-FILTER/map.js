const numbers = [20,30,40,50]

const students = [
    {name:"Alessandro",age:28},
    {name:"Maria",age:20},
    {name:"Taís",age:26},
    {name:"Eduardo",age:7},
    {name:"Sergio",age:65},
    {name:"Lucia",age:55},
];

const newArray = numbers.map((numbers)=>{
    return numbers * 2
})

const newStudents = students.map((students)=>{
    const newStudents={
        name: students.name + 'da Silva',
        age: students.age - 5
    }

    return newStudents
})  

const double = number => number * 2
const sum = number => number + 10
const toReais = number => `R$ ${number.toFixed(2)}`

const newArray2 = numbers.map(double).map(toReais)

console.log(newArray2)