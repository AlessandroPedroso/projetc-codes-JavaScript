/*
    document -> HTML

    getElmentById -> Trás UM elemento pelo ID
    getElementByClassName -> Trás TODOS os elementos com essa Classe
    getElementByTagName -> Trás TODOS os elementos com essa TAG
    getElementByName -> Trás TODOS os elementos com esse NAME

    querySelector -> Trás UM elemento, o PRIMEIRO que encontrar
    querySelectorAll -> Trás TODOS os elementos que encontrar
    ()

    Alterando e acessando textos

    textContent -> Pega TODO o conteudo
    innerText -> Pega APENAS o texto
    innerHTML -> Permite adicionar HTML e texto

*/

const inputScript = document.getElementById("main-input")
const elements = document.getElementsByClassName("paragraph-js")
const tagName = document.getElementsByTagName("p")
const tagByName = document.getElementsByName("nome-completo")
const querySelector = document.querySelector(".paragraph-js")
const querySelectorButton = document.querySelector("button.main-button")
const querySelectorAll = document.querySelectorAll("#main-input")[0]
const inputPlaceholder = document.querySelector("#main-input")

console.log(inputScript)
console.log(elements)
console.log(tagName)
console.log(tagByName)
console.log(querySelectorButton)
console.log(querySelectorAll)
console.log(`Placeholder do input: ${inputPlaceholder.placeholder}`);
console.log(`Placeholder do input usando querySelectorAll: ${querySelectorAll.placeholder}`);

//acessando valores

inputPlaceholder.placeholder = "Agora o texto é esse!"
inputPlaceholder.value = 123456

console.log("**************************************************")
const elementText = document.querySelector(".paragraph-js");

elementText.innerHTML = "Meu novo texto <b>Olá</b>"
console.log(elementText.textContent) //so HTML
console.log(elementText.innerText) // leva em conta o CSS

console.log(elementText.innerHTML) // TRÁS TUDO -> permite adicionar TAG HTML

// alterando estilos css

const button = document.querySelector(".main-button")
const texto = document.querySelector('h1')
button.style.color = "white"
button.style.backgroundColor = "#852394"
texto.style.fontSize = "100px";

// Eventos

const inputHtml = document.querySelector("#main-input");
const nameParagrafo = document.querySelector("#name-input")

function cliqueiNoBotao(){
    alert("Botao clicado com sucesso!");
    console.log(inputHtml.value);

    nameParagrafo.textContent = input.value

}

function digiteiNoInput(){

    console.log(inputHtml.value);
}

//