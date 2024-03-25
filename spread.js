const lista1 = [
    { id: 1, nome: 'Alessandro' },
    { id: 2, nome: 'Eduardo' }
]


const lista2 = [
    { id: 3, nome: "Taís Froner" },
    { id: 4, nome: "Leo" }
]


const lista3 = [...lista1, ...lista2, { id: 5, nome: "Lúcia" }]

console.log(lista3)