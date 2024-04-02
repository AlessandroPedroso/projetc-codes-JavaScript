
const inputValue = document.querySelector("#main-button");
const select = document.querySelector("select");
const buttonAdd = document.querySelector(".main-button");

function troqueiOValor(event){

    console.log("troquei o valor com function");
    console.log(event);

}

const troqueiOValorDoInput = (qualQuerNomeInput) =>{

    console.log("troquei o valor do input");
    console.log(qualQuerNomeInput);
}

// buttonAdd.addEventListener("click",troqueiOValor);
buttonAdd.addEventListener("click",function(qualQuerNomeInput){
    console.log(qualQuerNomeInput);
});
// inputValue.addEventListener("keypress",troqueiOValor);  



// select.addEventListener("change", function(){
//     console.log("troquei o valor")
// })