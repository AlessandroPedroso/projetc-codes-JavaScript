//Escreva um programa onde, você chame uma função mandando dois argumentos, 2 números, e a função responde qual número é maior

const numberLarger = (number1,number2) =>{

    let numberA = number1
    let numberB = number2

    if (numberA > numberB){
        
        return numberA

    }else{

        return numberB
    }
}

const resultado = numberLarger(9,9)

console.log("O maior numero é: " + resultado)