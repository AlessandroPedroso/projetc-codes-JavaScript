const listPessoa = [

    {name: 'Rodolfo', vip:true},
    {name: 'Maria', vip:false},
    {name: 'João', vip:true},
    {name: 'Bruno', vip:true},
    {name: 'Carla', vip:false},
    {name: 'Ana', vip:true},
    {name: 'Julio', vip:false},

];

// const justVips = listPessoa.filter(client =>{
//     return client.vip
// })
const justVips = listPessoa.filter(client => client.vip )
console.log(justVips)

const students = [
    {name: 'Alessandro', testGrade: 7},
    {name: 'Maria', testGrade: 5},
    {name: 'João', testGrade: 8},
    {name: 'Bruno', testGrade: 9},
    {name: 'Carla', testGrade: 3},
    {name: 'Ana', testGrade: 2},
    {name: 'Julio', testGrade: 10},
];

// const newStudents = students.filter(students =>{
//     return students.testGrade >=7
// })

const newStudents = students.filter(students => students.testGrade >=7 )

console.log(newStudents)