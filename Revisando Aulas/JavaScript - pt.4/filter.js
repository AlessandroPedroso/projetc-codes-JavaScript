/*
    Filter
        - Cria um novo array, a partir do array percorrido (array original)
        - Cria um novo array APENAS com os elementos filtrados
        - Aceita 3 parâmetros
         - item do array
         - index
         - array completo

         return true -> Item atual passa para um novo array
         return true -> Item atual NÃO passa pro novo array

*/

const list = [20, 3, 234, 12, 17, 541, 6, 87, 275, 1000]

//somente numeros maiores do que 100
// const newList = list.filter(number => {
//     if (number > 100) return true
//     else return false
// })
const newList = list.filter(value => value > 100)
console.log(newList);

//verificar numeros menos que 100 e pares
const newLisPares = list.filter(number => {
    if (number < 100 && number % 2 === 0) {
        return true
    } else {
        return false
    }
})
console.log("Números Pares menor que 100: ", newLisPares);

