function sum(value, value2) {
    return (value + value2)
}

// function sub(value, value2) {
//     console.log(value - value2)
// }

// sub(10, 8)
// const result = sum(5, 5)

/**
 *  Calculadora Desconto:
 *  Todos os Produtos acima de R$ 30,00 tem desconto de 10%
 */

// Resolvido por Alessandro
const cart = [10,244,99,2,20,33,250]

function cartSemDesconto(cart) {
    let cartSoma = 0;

    cart.forEach(element => {
        const valor = Number(element)
        if (valor <= 30) {
            
            cartSoma += valor
        }
    });

    return cartSoma;
}

function porcentagemDesconto(value) {
    const porcentagemDesconto = (value / 100) * 10
    
    return porcentagemDesconto
}

function cartDesconto(cart) {
    let cartSoma = 0;
    let valorDesconto = 0;

    cart.forEach(element => {
        const valor = Number(element)
        if (valor > 30) {
            
            valorDesconto = porcentagemDesconto(valor)
            cartSoma += (valor - valorDesconto);
        }
    });

    return cartSoma;
}

const result = cartSemDesconto(cart)
const resultDesconto = cartDesconto(cart);
console.log(`Valor somado Produtos sem desconto: ${result + resultDesconto}`)
console.log(`Valor aplicado a compras maiores de R$ 30,00 e somado: ${resultDesconto}`)
////


/// Resolvido Por Rodolfo
const cartRodolfo = [10, 244, 99, 2, 20, 33, 250];
let finalValue = 0;

function calculateDiscount(price, discount) {
    const result = (price * discount) / 100;

    return result;
}

cartRodolfo.forEach(value => {
    if (value > 30) {
        const  discount = calculateDiscount(value,10)
        finalValue += (value - discount);
    } else {
        finalValue +=value
    }
});
    console.log(finalValue)
///