/*
1. String  -> Textos
2. Numbers -> Números
3. Boolean -> Boleano
4. Object  -> Objeto
5. Null & Undefined
 */

/*----- 2.Textos -----*/
const textoDuplas = "Texto com aspas duplas"
const textoSimples = 'Textos com aspas simples'
const textoCrase = `texto com a crase`

const myAge = 28

const myString = `Minha idade é ${myAge}`

console.log(textoDuplas)
console.log(textoSimples)
console.log(textoCrase)
console.log(myString)

/*----- 2.Números -----*/

const number1 = 32/2
console.log("Resultado = " + number1)

/*----- 3.Boleano -----*/

const verdadeiro = true
const falso = false

console.log(verdadeiro)
console.log(falso)

/*----- 4.Objeto -----*/

const name = "Alessandro Schuquel Pedroso"
const age = 28
const address = "Rua roda de fogo"

const person = {
    name: "Alessandro",
    age: 28,
    address: {
        street: "Roda de fogo",
        number: 75,
        city: "Porto Alegre",
        state: "RS",
        country: "Brasil"
    }
}

console.log(person)

console.log("Nome : " + person.name)

person.name = "Alessandro Schuquel Pedroso"

console.log("Nome : " + person.name)
console.log(person)

/*----- 5. Null & Undefined -----*/

const user = {
    nome: "Alessandro",
    idade: 30,
    nomeDoConjuge: null
}

/*Undefined está buscando algo que não existe */
console.log(user.abacate)

/*Null está buscando um atributo que não existe valor */
console.log(user.nomeDoConjuge) 