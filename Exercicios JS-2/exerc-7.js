// Faça um programa onde leia um número e diga se ele é: - ímpar, - par, - é um número primo e impar, - é par e divisível por 5.
let numeroDigitado = 23

// if(numeroDigitado%2 === 1){
//     console.log(`${numeroDigitado} é impar`)

// }

if(numeroDigitado%2 === 0){ // par e divisivel por 5
    // console.log(`${numeroDigitado} é par`)

    if(numeroDigitado % 5 === 0){
        console.log(`${numeroDigitado} é par e divisivel por 5`)
    }else{
        console.log(`${numeroDigitado} é par e NÃO é divisivel por 5`)
    }

}else{

    for (let i = 2; i < numeroDigitado; i++) {
    
        if (numeroDigitado % i === 0) {
            console.log("Ele é impar, mas não é primo!");
            break

        } else {
            if (i === numeroDigitado - 1) {

                console.log("Ele é um numero primo")
            }
        }
    }

}




// let divisor = 2

// while(numeroDigitado%divisor !=0){
//     divisor++
// }



// if(numeroDigitado === divisor){
//     console.log(`${numeroDigitado} é primo`)
    
// }else{
//     console.log(`${numeroDigitado} não é primo`)

// }

