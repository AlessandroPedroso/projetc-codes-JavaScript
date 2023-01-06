// [ ] Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. 
// Porém, os dois nomes devem estar em dois objetos separados. 
// Ex: const object1 = {name:"João"}, object1 = {name:"Maria"}. João e João, imprime true. João e Maria, imprime false.

//Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Porém, os dois nomes devem estar em um objeto.
// Ex: const object1 = {firstName:"João", seccondName:"Maria"}. João e João, imprime true. João e Maria, imprime false.
const joao = {name:"João"}
const maria = {name:"Maria"}
console.log(joao.name===maria.name)


const objectName = {
    firstName: "João",
    seccondName: "Maria"
}
console.log("-----------------------------------")
console.log(`João e João: ${objectName.firstName==objectName.firstName}`)
console.log(`João e Maria: ${objectName.firstName==objectName.seccondName}`)
