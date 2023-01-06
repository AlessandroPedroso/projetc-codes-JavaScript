// Faça um programa que receba 3 números inteiros, e deve imprimir, qual é o maior, qual é o menor.
const number1 = 80
const number2 = 25
const number3 = 15

if(number1 > number2 && number1 > number3){
    console.log("O primeiro é o maior")

}else if(number2 > number3){
    console.log("O segundo é o maior")

}else{
    console.log("O terceiro é o maior")
}



if(number1 < number2 && number1 < number3){
    console.log("O primeiro é o menor")

}else if(number2 < number3){
    console.log("O segundo é o menor")

}else{
    console.log("O terceiro é o menor")
}

// let maior = number1
// let menor = number1

// if(number2 > maior){
//     maior = number2
    
// }if (number3 > maior){
//     maior = number3
// }

// if(number2 < menor){
//     menor = number2
// }

// if(number3 < menor){
//     menor = number3
// }

// console.log(`Maior numero: ${maior}`)
// console.log(`Menor numero: ${menor}`)
