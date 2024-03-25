
// function main(palavra){

//     let nAberto = 0
//  let quantidade = 0

//  for(var ler of palavra){
//      if (ler == '('){
//          quantidade++
//      }else if (ler == ')'){
//          if(quantidade == 0){
//              nAberto++
//          }else{
//              quantidade--
//          }
//      }
//  }

//  return quantidade + nAberto

// }

// console.log(main('((()))'))



// function checkPalindrome(str){

//     const reversed = str.split("").reverse().join("")
//     return reversed
//   }

//   console.log(checkPalindrome("rapar"))

// function palindrome(str) {

//     var re = /[^A-Za-z0-9]/g;
//     str = str.toLowerCase().replace(re, '');
//     var len = str.length;

//     for (var i = 0; i < len/2; i++) {
//       if (str[i] !== str[len - 1 - i]) {
//           return false;
//       }
//     }
//     return true;
//    }
//   console.log(palindrome(""));

// function checkPalindrome(str) {
//     let l = str.length;
//     for (let i = 0; i < l/2; i++) {
//      if (str[i] !== str[l - 1 - i]) {
//       return false;
//      }
//     }
//     return true;
//    }

//    console.log(checkPalindrome("temem"));

// function isPalindrome2(word) {
//     let numOfLetters = word.length,
//       lastCharIndex = numOfLetters - 1;
  
//     if (numOfLetters === 0 || numOfLetters === 1) {
//       return true;
//     }

//     if (word[0] === word[lastCharIndex]) {
//         word = word.substr(0, lastCharIndex).substr(1);
//         return isPalindrome2(word);
//       }
    
//       return false;
// }

// console.log((isPalindrome2("temem")))

// const numeros = [3,2,4]
// const objetivo = 9
// const newList = []

// let soma = 0

// for(let i =0; i< numeros.length; i++){

//     soma = numeros[i] + numeros[i-1]

//     if(soma === objetivo){
//         newList.push(i - 1)
//         newList.push(i)

//     }
// }
// console.log(newList)
// for(let i = 1; i < numeros.length; i++){

//     verificaObjetivo = objetivo > 0 ? true:false
//     soma = numeros[variavelGlobal] + numeros[i]
//     variavelGlobal = i
//     if (soma === objetivo){
//         newList.push(i - 1)
//         newList.push(i)

//     }else if(soma === 0){
//         newList.push(i + 1)
//         newList.push(i)
//     }

// }



// let valorA = 0
// let valorB = 0

// let variavelGlobal = 0
// let soma = 0
// for([index, valor] of numeros.entries()) {
    


//     // console.log(`${index} - ${value}`)
// }

// console.log(newList)

// console.log(newList)

// const newList = numeros.map((item,indice) => {

//     let soma = item + item
//     const list = []

//     if(soma === objetivo){
//         list.push([indice])
//     }

//     console.log(list)
//     return list
// })


    /*
     * Como descobrir uma palavra palíndroma em Portugol
     * 
     * Código escrito por Wagner Gaspar
     * Maior de 2021
     * 
     * palavras palíndromas
     * ama
     * anilina
     * arara
     * osso
     * radar
     * reviver
    */
    
    // function main(palavra){
	
    //     var regex = /[^A-Za-z0-9]/g;
    //     palavra = palavra.toLowerCase().replace(regex, '');
    //     var len = palavra.length;
    
    //     for (var i = 0; i < len/2; i++) {
    //       if (palavra[i] !== palavra[len - 1 - i]) {
    //           return false;
    //       }
    //     }
    //     return true;
    // }

    // console.log(main("temem"))

    // stringExemplo = "JoãodaSilvaOliveira";
    // resultado = stringExemplo.split("",2);

    // console.log(resultado)

    // const valoresString = []

    // let n = 71

    // // if(n%)

    // for(let i = 0; i <= n; i++){

    //     if(i%5==0 && i%3==0){
    //         valoresString.push("DesenvolvimentoSoftware")
            
    //     }
    
    //     if(i%3 ==0 && !i%5==0){
    
    //         valoresString.push("Desenvolvimento")
            
    //     }
    
    //     if(!i%3 ==0 && i%5==0){
    
    //         valoresString.push("Software")
           
    //     }

    //     if(!i%3 ==0 || !i%5==0){
    
    //         valoresString.push(i)
           
    //     }


    // }



    // console.log(valoresString.join())

  
    function main(n){

        const valoresString = []
       
           for(let i = 1; i <= n; i++){
       
               if(i%5==0 && i%3==0){
                   valoresString.push("DesenvolvimentoSoftware")
                   
               }
           
               if(i%3 ==0 && !i%5==0){
           
                   valoresString.push("Desenvolvimento")
                   
               }
           
               if(!i%3 ==0 && i%5==0){
           
                   valoresString.push("Software")
                  
               }
       
               if(!i%3 ==0 || !i%5==0){
           
                   valoresString.push(i)
                  
               }
           }
       
           return valoresString.sort((a,b)=> a.length-b.length).join(", ")
       
       }

       console.log(main(71))