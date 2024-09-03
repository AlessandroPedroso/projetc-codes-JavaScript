/*
    Estrutura de Repetição - LOOP
        - FOR IN
*/

const users = { name: 'Alessandro', age: 33, street: 'Rua dos Bobos' }

for (const key in users) {
    console.log(users[key])
}

for (const key in users) {
    console.log(`${key}: ${users[key]}`)
}
