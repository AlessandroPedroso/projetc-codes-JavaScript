/*
Escreva um programa onde, você cria uma função geradora de desconto.
- A função aceita 4 parâmetros (Nome do cliente, valor total da compra, um booleano que diz se é a primeira compra do cliente ou não, um booleando que diz se o cliente vai pagar a vista ou não)
- Os descontos funcionam da seguinte forma:
- Se é a primeira compra do cliente, pagar a vista, e a compra for maior que R$ 1000 => 30% de desconto
- Se é a primeira compra do cliente, pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 25% de desconto
- Se é a primeira compra do cliente, pagar a vista e a compra for menor que R$ 500 => desconto de 20%
- Se é a primeira compra do cliente, NÃO pagar a vista, e a compra for maior que R$ 1000 => 20% de desconto 
- Se é a primeira compra do cliente, NÃO pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 15% de desconto
- Se é a primeira compra do cliente, NÃO pagar a vista e a compra for menor que R$ 500 => desconto de 10%
- Se NÃO é a primeira compra do cliente, pagar a vista, e a compra for maior que R$ 1000 => 20% de desconto
- Se NÃO é a primeira compra do cliente, pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 15% de desconto
- Se NÃO é a primeira compra do cliente, pagar a vista e a compra for menor que R$ 500 => desconto de 10%
- Se NÃO é a primeira compra do cliente, NÃO pagar a vista, e a compra for maior que R$ 1000 => 10% de desconto 
- Se NÃO é a primeira compra do cliente, NÃO pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 5% de desconto
- Se NÃO é a primeira compra do cliente, NÃO pagar a vista e a compra for menor que R$ 500 => SEM DESCONTO- A função deve imprimir na tela:
- Se o cliente recebeu desconto, imprima na tela um agradecimento pela compra, o valor total sem desconto, o valor total com desconto e a porcentagem de desconto que ele recebeu.
- Se o cliente não recebeu desconto, imprima na tela um agradecimento pela compra, o valor total da sua compra e um cupom de desconto. Esse cupom deve ser um valor aleatório entre 10 e 20% para a próxima compra.
*/

const geradorDesconto = (nomeCliente, valorTotalCompra, primeiraCompra, pagamentoAvista)=>{
    
    let valorPorcentagem = 0
    let resultado = 0

    if(primeiraCompra === true && pagamentoAvista === true && valorTotalCompra >=1000){

         valorPorcentagem = (valorTotalCompra/100) * 30
        resultado = valorTotalCompra - valorPorcentagem

        console.log(`Obrigado pela compra ${nomeCliente}`)
        console.log(`Valor total sem desconto: ${valorTotalCompra}`)
        console.log(`Valor total com desconto: ${resultado}`)
        console.log(`Porcentagem de desconto que ${nomeCliente} recebeu: ${30}%`)

    }else if(primeiraCompra === true && pagamentoAvista === true && valorTotalCompra < 1000 && valorTotalCompra > 500){
        
        valorPorcentagem = (valorTotalCompra/100) * 25
        resultado = valorTotalCompra - valorPorcentagem

        console.log(`Obrigado pela compra ${nomeCliente}`)
        console.log(`Valor total sem desconto: ${valorTotalCompra}`)
        console.log(`Valor total com desconto: ${resultado}`)
        console.log(`Porcentagem de desconto que ${nomeCliente} recebeu: ${25}%`)

    }else if (primeiraCompra === true && pagamentoAvista === true && valorTotalCompra <= 500){

        valorPorcentagem = (valorTotalCompra/100) * 20
        resultado = valorTotalCompra - valorPorcentagem

        console.log(`Obrigado pela compra ${nomeCliente}`)
        console.log(`Valor total sem desconto: ${valorTotalCompra}`)
        console.log(`Valor total com desconto: ${resultado}`)
        console.log(`Porcentagem de desconto que ${nomeCliente} recebeu: ${20}%`)
    }else if (primeiraCompra === true && pagamentoAvista === false && valorTotalCompra >=1000){

        valorPorcentagem = (valorTotalCompra/100) * 20
        resultado = valorTotalCompra - valorPorcentagem

        console.log(`Obrigado pela compra ${nomeCliente}`)
        console.log(`Valor total sem desconto: ${valorTotalCompra}`)
        console.log(`Valor total com desconto: ${resultado}`)
        console.log(`Porcentagem de desconto que ${nomeCliente} recebeu: ${20}%`)
    }else if (primeiraCompra === true && pagamentoAvista === false && valorTotalCompra < 1000 && valorTotalCompra > 500){
        
        valorPorcentagem = (valorTotalCompra/100) * 15
        resultado = valorTotalCompra - valorPorcentagem

        console.log(`Obrigado pela compra ${nomeCliente}`)
        console.log(`Valor total sem desconto: ${valorTotalCompra}`)
        console.log(`Valor total com desconto: ${resultado}`)
        console.log(`Porcentagem de desconto que ${nomeCliente} recebeu: ${15}%`)

    }else if (primeiraCompra === true && pagamentoAvista === false && valorTotalCompra <= 500){
        
        valorPorcentagem = (valorTotalCompra/100) * 10
        resultado = valorTotalCompra - valorPorcentagem

        console.log(`Obrigado pela compra ${nomeCliente}`)
        console.log(`Valor total sem desconto: ${valorTotalCompra}`)
        console.log(`Valor total com desconto: ${resultado}`)
        console.log(`Porcentagem de desconto que ${nomeCliente} recebeu: ${10}%`)

    }else if (primeiraCompra === false && pagamentoAvista === true && valorTotalCompra >= 1000){
        
        valorPorcentagem = (valorTotalCompra/100) * 20
        resultado = valorTotalCompra - valorPorcentagem

        console.log(`Obrigado pela compra ${nomeCliente}`)
        console.log(`Valor total sem desconto: ${valorTotalCompra}`)
        console.log(`Valor total com desconto: ${resultado}`)
        console.log(`Porcentagem de desconto que ${nomeCliente} recebeu: ${20}%`)

    }else if (primeiraCompra === false && pagamentoAvista === true && valorTotalCompra < 1000 && valorTotalCompra > 500){
        
        valorPorcentagem = (valorTotalCompra/100) * 15
        resultado = valorTotalCompra - valorPorcentagem

        console.log(`Obrigado pela compra ${nomeCliente}`)
        console.log(`Valor total sem desconto: ${valorTotalCompra}`)
        console.log(`Valor total com desconto: ${resultado}`)
        console.log(`Porcentagem de desconto que ${nomeCliente} recebeu: ${15}%`)
    }else if (primeiraCompra === false && pagamentoAvista === true && valorTotalCompra <= 500){
        
        valorPorcentagem = (valorTotalCompra/100) * 10
        resultado = valorTotalCompra - valorPorcentagem

        console.log(`Obrigado pela compra ${nomeCliente}`)
        console.log(`Valor total sem desconto: ${valorTotalCompra}`)
        console.log(`Valor total com desconto: ${resultado}`)
        console.log(`Porcentagem de desconto que ${nomeCliente} recebeu: ${10}%`)
    }else if (primeiraCompra === false && pagamentoAvista === false && valorTotalCompra >= 1000){
        
        valorPorcentagem = (valorTotalCompra/100) * 10
        resultado = valorTotalCompra - valorPorcentagem

        console.log(`Obrigado pela compra ${nomeCliente}`)
        console.log(`Valor total sem desconto: ${valorTotalCompra}`)
        console.log(`Valor total com desconto: ${resultado}`)
        console.log(`Porcentagem de desconto que ${nomeCliente} recebeu: ${10}%`)

    }else if (primeiraCompra === false && pagamentoAvista === false && valorTotalCompra < 1000 && valorTotalCompra > 500){
        
        valorPorcentagem = (valorTotalCompra/100) * 5
        resultado = valorTotalCompra - valorPorcentagem

        console.log(`Obrigado pela compra ${nomeCliente}`)
        console.log(`Valor total sem desconto: ${valorTotalCompra}`)
        console.log(`Valor total com desconto: ${resultado}`)
        console.log(`Porcentagem de desconto que ${nomeCliente} recebeu: ${5}%`)

    }else if (primeiraCompra === false && pagamentoAvista === false && valorTotalCompra <= 500){
        
        const numeroAleatorio = Math.floor(Math.random() * (20 - 10) + 10);
        console.log(`Obrigado pela compra ${nomeCliente}`)
        console.log(`Valor total da compra: ${valorTotalCompra}`)
        console.log(`Cupom de desconto para proxima compra: ${numeroAleatorio}%`  )
    }

}

geradorDesconto("Alessandro",400,false,false)