const botao = document.querySelector('button')
const inputValor = document.querySelector('input')
const select = document.querySelector('select')

// botao.onclick = () =>{
//     alert('Fui pressionado')
// }

inputValor.onkeypress = (event) =>{
    console.log(event)
}

const clickButton = ()=>{
    alert('clicado')
}

const myFunction = () =>{
    alert('Fui clickado')
}

inputValor.addEventListener('focus', ()=>{
    console.log('Dei um foco')
})

select.addEventListener('change',()=>{
    
    console.log(select.value)
})

botao.addEventListener('click', clickButton)



