const listPessoa = [

    {name: 'Rodolfo', vip:true},
    {name: 'Maria', vip:false},
    {name: 'João', vip:true},
    {name: 'Bruno', vip:true},
    {name: 'Carla', vip:false},
    {name: 'Ana', vip:true},
    {name: 'Julio', vip:false},

];

// const newListPessoa = listPessoa.map(list => {

//     if (list.vip === true) {

//         const pessoa = { name: list.name, vip: list.vip, sector: 'Black' }
//         return pessoa

//     } else {

//         const pessoa2 = { name: list.name, vip: list.vip, sector: 'Green' }
//         return pessoa2
//     }

// })

// const newListPessoa = listPessoa.map(list => {
    
//     let sectorBlackOrGreen

//     if(list.vip === true){
//         sectorBlackOrGreen = 'Black'
//     }else{
//         sectorBlackOrGreen = 'Green'
//     }

//     const newList = { 
//         name: list.name, 
//         vip: list.vip, 
//         sector: sectorBlackOrGreen
//     }

//     return newList

// })

const newListPessoa = listPessoa.map(list => {
    
    const newList = { 
        name: list.name, 
        vip: list.vip, 
        sector: list.vip ? 'Black' : 'Green'
    }

    return newList

})

console.log(newListPessoa)

const students = [
    {name: 'Alessandro', testGrade: 7},
    {name: 'Maria', testGrade: 5},
    {name: 'João', testGrade: 8},
    {name: 'Bruno', testGrade: 9},
    {name: 'Carla', testGrade: 3},
    {name: 'Ana', testGrade: 2},
    {name: 'Julio', testGrade: 10},
];

// const newStudents = students.map((students)=>{
    
//     if(students.testGrade >= 7){
//         const newStudents = {name: students.name, finalResult:"approved"}
//         return newStudents
//     }else{
//         const newStudents = {name: students.name, finalResult:"disapproved"}
//         return newStudents
//     }
// })

const newStudents = students.map((students)=>{

    let approvedOrNot

    if(students.testGrade >=7){
        approvedOrNot = 'Approved'
    }else{
        approvedOrNot = 'Disapproved'
    }
    
    const newStudents = {
        name: students.name, 
        finalResult: approvedOrNot
    }
    return newStudents
})

// const newStudents = students.map((students)=>{
    
//     const newStudents = {
//         name: students.name, 
//         finalResult: students.testGrade >=7 ? 'Approved': 'Disapproved'
//     }
//     return newStudents
// })

console.log(newStudents)