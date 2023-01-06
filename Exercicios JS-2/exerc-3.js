// Faça um programa que gere um número aleatório entre 1 e 10, esse número é o número 'ganhador'. 
// Então ele também irá gerar um número aleatório entre 1 e 10, e verifica se a pessoa ganhou ou não. Em caso de ter ganhado, mostra o prêmio, se não ganhou, mostra outra mensagem.

const numeroAleatorio = Math.floor(Math.random() * (10 - 1) + 1);
const numeroGanhador = Math.floor(Math.random() *(10 - 1) + 1 );
//console.log(numeroAleatorio)
const number = 5

if(numeroAleatorio === numeroGanhador){
    console.log(`Parabéns você ganhou o prêmio com o número ${numeroAleatorio}`)
}else{
    console.log(`Você não ganhou dessa vez!`)
}
