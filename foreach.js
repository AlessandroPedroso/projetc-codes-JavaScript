const students = [
    {name:"Alessandro",age:28},
    {name:"Maria",age:20},
    {name:"Taís",age:26},
    {name:"Eduardo",age:7},
    {name:"Sergio",age:65},
    {name:"Lucia",age:55},
];

let allStudentsAge = 0

students.forEach((item,index)=>{
    allStudentsAge += item.age    
})

const averageAge = allStudentsAge / students.length
console.log(`A media dos alunos é: ${averageAge.toFixed(0)}`)