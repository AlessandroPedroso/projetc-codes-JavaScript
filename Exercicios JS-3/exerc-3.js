// Escreva um programa onde, você chame uma função, e ela diga a hora exata!

const mostrarHora = () =>{
    
    let dataAtual = new Date();
    let horas = dataAtual.getHours();
    let minutos = dataAtual.getMinutes();

    console.log(horas + ":" + minutos);
}

mostrarHora();

console.log(new Date().toLocaleTimeString('pt-BR'))