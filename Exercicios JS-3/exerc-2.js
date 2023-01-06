// Escreva um programa onde, você chame uma função enviando um número 
// (aceitar somente valores entre 1 e 10) e escrever a tabuada de 1 a 10 do valor lido.

const calculaTabuada = (number) => {

    if(number > 10 || number < 1){
        console.log(`Aceitamos somente numero entre 1 e 10`)
        return
    }
    
    for (let i = 1; i <= 10; i++) {

        console.log(`Tabuada do ${number}, ${number} x ${i}: ${number * i}`)
    }
}

const tabuada = (number) => {

    switch (number) {
        case 1:
            calculaTabuada(number)
            break;
        case 2:
            calculaTabuada(number)
            break;
        case 3:
            calculaTabuada(number)
            break;
        case 4:
            calculaTabuada(number)
            break;
        case 5:
            calculaTabuada(number)
            break;
        case 6:
            calculaTabuada(number)
            break;
        case 7:
            calculaTabuada(number)
            break;
        case 8:
            calculaTabuada(number)
            break;
        case 9:
            calculaTabuada(number)
            break;
        case 10:
            calculaTabuada(number)
            break;
        default:
            console.log("Escolha um numero entre 1 e 10")
            break;
    }
}

calculaTabuada(5)
