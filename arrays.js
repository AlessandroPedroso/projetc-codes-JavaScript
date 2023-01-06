const number = [10,2,5,234]

for(let i = 0; i < number.length; i++){
    console.log("leitura com for normal: " + number[i])
}

number.forEach(item => {
    console.log("leitura com forEach: " + item)
})


const people = [{
    name: "Alessandro",
    age: 28,
    sex: "Male",
},
{
    name: "Eduardo",
    age: 7,
    sex: "Male",
}
]



people.forEach(item =>{

    console.log("Nome do usuário usando forEach: " + item.name)
})

for(let item = 0; item < people.length; item++){
    console.log(people[item])
}