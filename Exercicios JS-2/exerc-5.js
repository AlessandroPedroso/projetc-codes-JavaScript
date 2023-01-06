//  Crie 5 objetos nesse formato{ nome: "" idade:"" sexo:"" profissão: "" nacionalidade:"" }
// Ao rodar o programa, deve imprimir se a pessoa é aprovada ou não no processo ,a pessoa deve ser maior de idade e brasileira para ser aprovada.

const pessoa1 = {
    nome: "Alessandro" ,
    idade:"28" ,
    sexo:"Maculino" ,
    profissão: "Programador" ,
    nacionalidade:"Brasil"
}

const pessoa2 = {
    nome: "Taís" ,
    idade:"26" ,
    sexo:"Feminino" ,
    profissão: "Arquiteta" ,
    nacionalidade:"Brasil"
}

const pessoa3 = {
    nome: "Lucas" ,
    idade:"28" ,
    sexo:"Masculino" ,
    profissão: "Médico" ,
    nacionalidade:"EUA"
}

const pessoa4 = {
    nome: "Antonio" ,
    idade:"28" ,
    sexo:"Masculino" ,
    profissão: "Médico" ,
    nacionalidade:"México"
}

const pessoa5 = {
    nome: "Marcos" ,
    idade:"15" ,
    sexo:"Masculino" ,
    profissão: "Médico" ,
    nacionalidade:"EUA"
}

const pessoas = []
pessoas.push(pessoa1,pessoa2,pessoa3,pessoa4,pessoa5)

for (const people of pessoas) {

    if(people.nacionalidade==='Brasil' && people.idade >= 18){

        console.log("Aprovado: ")
        console.log(`Nome: ${people.nome}`)
        console.log(`Nome: ${people.nacionalidade}`)
        console.log(`Nome: ${people.idade}`)

    }else{
        
        console.log("Reprovado: ")
        console.log(`Nome: ${people.nome}`)
        console.log(`Nome: ${people.nacionalidade}`)
        console.log(`Nome: ${people.idade}`)
    }
}