const students = ['Alessandro','Taís','Eduardo','Lúcia']
// students.push('Lúcia')

// console.log(students.length) //quantidade no array
// console.log(students.sort()) //organiza o array por ordem alfabética
// delete students[0]
// console.log(students)
// console.log(students.length)

//students.splice(0,2,"Pedro")
const newStudents = students.slice(1,3)
//students.pop()// remove o ultimo indice do array
students.shift()// remove o primeiro indice
console.log(newStudents)