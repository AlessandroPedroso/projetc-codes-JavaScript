/**
    REDUCE
    - Retorna um valor (pode ser um novo array, um objeto, string, number, etc.);
    - Aceita 4 parâmetros
        - acumulador
        - valor atual
        - index
        - array completo
 */

const list = [1, 2, 3, 4, 5];

//soma dos valores
const sum = list.reduce((acumuladr, valorAtual) => {
    return acumuladr + valorAtual
},0);//valor inicial

console.log("Soma dos valores: ", sum);

const companies = [
    { name: "Samsung", marketValue: 50, CEO: "Kim Hyun Suk", foundedOn: 1938 },
    {
        name: "Microsoft",
        marketValue: 415,
        CEO: "Satya Nadella",
        foundedOn:1975
    },
    { name: "Intel", marketValue: 117, CEO: "Brian Krzanich", foundedOn: 1968 },
        {
        name: "Facebook",
        marketValue: 383,
        CEO: "Mark Zuckerberg",
        foundedOn:2004
    },
    { name: "Spotify", marketValue: 30, CEO: "Daniel Ek", foundedOn: 2006 },
    { name: "Apple", marketValue: 845, CEO: "Tim Ccok", foundedOn: 1976 },

]

const marketValue = companies.reduce((acc, value) => {
    return acc + value.marketValue
},0)

console.log(`Valor de mercado das empresas: ${marketValue}`);

const cart = [
    {productName: 'Abóbora', pricePerkg:5, kg:1},
    {productName: 'Pepino', pricePerkg:3.55, kg:1.3},
    {productName: 'Limão', pricePerkg:1.2, kg:2},
    {productName: 'Abacate', pricePerkg:5.4, kg:1.67},
    {productName: 'Morango', pricePerkg:11.9, kg:3},
]

const sumPrices = cart.reduce((acc, valorAtual) => {
    const multiplica = valorAtual.pricePerkg * valorAtual.kg
    return acc + multiplica
}, 0)

console.log("Valor total das mercadorias: ", sumPrices.toFixed(2));