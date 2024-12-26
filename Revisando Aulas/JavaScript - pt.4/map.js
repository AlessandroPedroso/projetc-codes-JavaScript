const number = [1, 2, 3, 4, 5, 6, 7]

const double = number.map((item) => item * 2);

const list = [
    {name:"Rodolfo", vip:true},
    {name:"Maria", vip:false},
    {name:"João", vip:true},
    { name: "Bruno", vip: true },
    { name: "Carla", vip: false },
    { name: "Ana", vip: true },
    { name: "Julio", vip: false },
]

const newList = list.map(user => {
    return {
        name: user.name,
        braceletColor: user.vip ? 'black' : 'green'
    }

})

console.log(newList)

const students = [
    { name: 'Rodolfo', testGrade: 7 },
    { name: 'Alessandro', testGrade: 5 },
    { name: 'João', testGrade: 8 },
    { name: 'Bruno', testGrade: 9 },
    { name: 'Carla', testGrade: 3 },
    { name: 'Ana', testGrade: 2 },
    { name: 'Julio', testGrade: 10 },
]

const newStudents = students.map((students) => {
    let status = ''

    if (students.testGrade < 5) {
        status = 'Reprovado'
    } else {
        status = 'Aprovado'
    }

    return {
        name: students.name,
        statusAprovacao:status
    }
})

console.log(newStudents)

const newStudentsTernario = students.map((students) => {
    return {
        name: students.name,
        statusAprovacao: students.testGrade < 5 ? "Reprovado":"Aprovado"
    }
})

console.log(newStudentsTernario)