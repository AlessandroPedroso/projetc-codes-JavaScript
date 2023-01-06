// Escreva um programa onde, você chame uma função, e ela diga que ano estamos!

const nowYear = () =>{
    
    let dateNow = new Date()
    let ano = dateNow.getFullYear()
    console.log(`Estamos no ano de ${ano}`)
}

nowYear()