// Faça um programa que verifica se uma pessoa é brasileira ou não. // DEVE SER UM OBJETO
const pessoa1 = {
    nome:"Alessandro",
    nacionalidade: "Brasil"
}

const pessoa2 = {
    nome: "Eduardo",
    nacionalidade: "Argentina"
}

const pessoas = []
pessoas.push(pessoa1,pessoa2)

for (const name of pessoas) {
    if(name.nacionalidade === 'Brasil'){
        console.log(`${name.nome} é Brasileiro(a).`)
    }else{
        console.log(`${name.nome} ele é estrangeiro`)
    }
}