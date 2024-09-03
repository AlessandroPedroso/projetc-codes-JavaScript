/* Functions / Funções
 *  Trecho de código que é executado
            Somente quando solicitado 
 */

// const variavel = 'Alessandro';

// console.log(variavel)

function nomeNaTela(element = 'Retorno não encontrado!') {
    console.log(element)
}

function sum(a = 1, b = 2) {
    nomeNaTela('Resultado da soma: ' + (a + b))
}

function less(a = 3, b = 2) {
    nomeNaTela('Resultado do subtrair: ' + (a - b));
}

//somar
sum(10, 5)
//subtrair
less(10,5)



