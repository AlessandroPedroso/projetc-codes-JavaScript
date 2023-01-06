// Faça um programa onde ele leia 4 números. Em cada caso, ele deve retornar a mensagem condizente: 
// - Todos os números são impares => TODOS OS NÚMEROS SÃO IMPARES - 
// Todos os números são pares => TODOS OS NÚMEROS SÃO PARES. 
// Em caso negativo dos casos a cima, colocar uma mensagem => .

const numbers = [2,8,6,4]

let Tempar = false
let temImpar = false

for (let number of numbers) {


    if(number%2===0){
        Tempar = true
        
    }else if(number%2 ===1){
        temImpar = true
    }
}

if(Tempar == true && temImpar == false){

    console.log("TODOS OS NÚMEROS SÃO PARES")

}else if(temImpar == true && Tempar == false){

    console.log("TODOS OS NÚMEROS SÃO IMPARES")
}else{
    console.log("Há números pares e ímpares")
}

// if(Tempar && temImpar){
    
// }
