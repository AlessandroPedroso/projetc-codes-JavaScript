const companies = [

    {name:'Samsung', marketValue:50, CEO:'Kim Hyun Suk', foundedOn: 1938},
    {name:'Microsoft', marketValue:415, CEO:'Satya Nadella', foundedOn: 1975},
    {name:'Intel', marketValue:117, CEO:'Brian Krzanich', foundedOn: 1968},
    {name:'Facebook', marketValue:383, CEO:'Mark Zuckerberg', foundedOn: 2004},
    {name:'Spotify', marketValue:30, CEO:'Daniel Ek', foundedOn: 2006},
    {name:'Apple', marketValue:845, CEO:'Tim Cook', foundedOn: 1976}

];

const add10PorcentMarketValue = companies =>{
    companies.marketValue += companies.marketValue / 10
    return companies
}

const oldCompanies = company => company.foundedOn < 2000

const sumCompanies = (acc,count) => acc + count.marketValue

const newCompanies = companies
    .map(add10PorcentMarketValue)
    .filter(oldCompanies)
    .reduce(sumCompanies,0)

console.log(newCompanies)

/* Exercicio utilizando MAP */
// const newCompanies = companies.map(companies =>{
//     let resultPorcentagem = companies.marketValue + ((companies.marketValue/100) * 10)
    
//     const companiesList = 
//      { name: companies.name, marketValue: resultPorcentagem, CEO: companies.CEO, foundedOn: companies.foundedOn}

//     return companiesList
// })

// console.log(newCompanies)
// console.log('------------------------------------------------------------------')

// /*Exercicio filter*/
// const companiesArray = newCompanies.filter(companies => companies.foundedOn < 2000)
// console.log(companiesArray)

// console.log('---------------------------------------------')

// /** Exercicio REDUCE */
// const sum = (acc,count)=> acc += count.marketValue
// const companiesSum = companiesArray.reduce(sum ,0)
// console.log(companiesSum)