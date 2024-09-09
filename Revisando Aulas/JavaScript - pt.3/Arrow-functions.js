/*
    arrow function -> () => {}
    
    Não escrevemos "functions".
    Além disso, usamos o sinal "=>" para criá-la,
    o que lembra uma flecha, fazendo jus ao nome "Arrow Functions".
 */

function sayMyName(name) {
    return `Seu nome é ${name}`
}

const sayMyname2 = (name) => {
    return `Meu nome é ${name}`
}

const sayMyname3 = (name) => `meu nome ${name}`

const sum = (number1, number2) => number1 + number2

const result = sum(10, 5)
console.log(result)

