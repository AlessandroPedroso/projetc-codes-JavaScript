
const inputValue = document.querySelector("#main-button");
console.log(inputValue);
const select = document.querySelector("select");
const buttonAdd = document.querySelector(".main-button");

function troqueiOValor(event){

    console.log("troquei o valor com function");
    console.log(event);

}



select.addEventListener("change",troqueiOValor);



// select.addEventListener("change", function(){
//     console.log("troquei o valor")
// })