function printText(){

    console.log("olá")
}

printText()

function sum(number1,number2){//void

    console.log(number1 + number2)
}

function sumReturn(number1, number2){
    const soma = number1 + number2
    return soma
}

const sumAnonima = function(number1, number2){
    const soma = number1 + number2
    return soma
}

const sumArrowFuntion = (number1,number2) => number1 + number2

const sumArrowFuntion2 = (number1,number2) => {
    number1 + number2
}

const sumTeste = (number1,number2) =>{
    return number1 + number2
}

const sumOutroTeste = number1 =>{
    return number1
}

const sumOutroTeste2 = () =>{
    return console.log("olá mundo JS")
}

const firstNumber = 10
const seccondNumber = 20
const result = sumReturn(firstNumber,seccondNumber)
const functionArrow = sumArrowFuntion(10,5)
const sumTesteResult = sumTeste(20,20)

console.log(`O primeiro numero é ${firstNumber}`)
console.log(`O segundo  numero é ${seccondNumber}`)

console.log(`E a soma dos dois é ${sumAnonima(firstNumber,seccondNumber)}`)
console.log(`E a soma dos dois é ${functionArrow}`)
console.log(`E a soma dos dois é ${sumTesteResult}`)

