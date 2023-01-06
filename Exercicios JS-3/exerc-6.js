// A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre o salário e número de filhos. 
// A prefeitura deseja saber: - média do salário da população; - média do número de filhos; - maior salário; - 
// O final da leitura de dados se dará com a entrada de um salário negativo. - Faça isso usando uma função!

const pessoa1 = {
    nome: "Alessandro",
    salario: 3500,
    filhos: 1
}

const pessoa2 = {
    nome: "Taís",
    salario: 5500,
    filhos: 2
}

const pessoa3 = {
    nome: "Lúcia",
    salario: 2500,
    filhos: 3
}

const pessoa4 = {
    nome: "Sérgio",
    salario: -1500,
    filhos: 4
}

const pessoa5 = {
    nome: "Cristiane",
    salario: 3000,
    filhos: 6
}

const listaPessoas = []
listaPessoas.push(pessoa1,pessoa2,pessoa3,pessoa4,pessoa5)

const pesquisaHabitantes = (lista) =>{
    let i = 0
    let somaSalario = 0
    let somaFilhos = 0
    let maiorSalario = 0

    while (lista[i].salario > 0) {

        somaSalario += lista[i].salario
        somaFilhos += lista[i].filhos

        if(lista[i].salario > maiorSalario){

            maiorSalario = lista[i].salario
        }

        i++
    }

    console.log(`Média de salário R$${(somaSalario/i).toFixed(0)}`)
    console.log(`Média de filhos ${(somaFilhos/i).toFixed(0)}`)
    console.log(`Maior salário R$${(maiorSalario).toFixed(0)}`)
}

pesquisaHabitantes(listaPessoas)

// const pesquisaHbitantes = (listaPessoas)=>{

//     const indexArray = listaPessoas.index
//     let soma = 0
//     let resultado = 0
//     let numeroPessoas = listaPessoas.length
//     let numeroFilhos = 0
//     let resultadoFilhos = 0
//     let maior = 0
//     let menor = 0

//     for (const iterator of listaPessoas) {
        
//         while(iterator.salario < 0){
//             console.log(`Salario de ${iterator.nome} está negativo! `)
//             break
//         }
//          soma += iterator.salario
//          numeroFilhos += iterator.filhos
//     }

//     for(let i = 0; i < listaPessoas.length; i++){
        
//         if(i==0){

//             maior = listaPessoas[i].salario
//             menor = listaPessoas[i].salario

//         }else if (listaPessoas[i].salario > maior){
//             maior = listaPessoas[i].salario

//         }else if(listaPessoas[i].salario < menor){
//             menor = listaPessoas[i].salario
//         }
//     }

//     resultado = soma/numeroPessoas
//     resultadoFilhos = numeroFilhos/numeroPessoas

//     console.log(`Média do salário da população: R$${resultado.toFixed(0)}`)
//     console.log(`Média de filhos da população: ${Math.floor(resultadoFilhos)}`)
//     console.log(`Maior salario: R$${maior}`)

// }

// pesquisaHbitantes(listaPessoas)

