const list = [20,3,234,12,17,541,6,87,275,1000]

// const newList = list.filter(numbers =>{

//     if(numbers % 2 === 0){

//         if (numbers % 5 ===0 ){
//             return numbers
//         }
//     }
// })

const newList = list.filter(numbers =>{

    if(numbers % 2 ==0 && numbers % 5 ==0) return true
    else return false

    // if(numbers % 2 !==0 || numbers % 5 !==0) return false
    // else return true

    // if(numbers %2 !==0) return false
    // if(numbers %5 !==0) return false

    // return true
})

console.log(newList)

const companies = [
    {name:'Samsung', marketValue:50, CEO:'Kim Hyun Suk', foundedOn: 1938},
    {name:'Microsoft', marketValue:415, CEO:'Satya Nadella', foundedOn: 1975},
    {name:'Intel', marketValue:117, CEO:'Brian Krzanich', foundedOn: 1968},
    {name:'Facebook', marketValue:383, CEO:'Mark Zuckerberg', foundedOn: 2004},
    {name:'Spotify', marketValue:30, CEO:'Daniel Ek', foundedOn: 2006},
    {name:'Apple', marketValue:845, CEO:'Tim Cook', foundedOn: 1976}
];

const newCompanies = companies.filter(companies => companies.marketValue >=200 && companies.foundedOn >1975)

console.log(newCompanies)