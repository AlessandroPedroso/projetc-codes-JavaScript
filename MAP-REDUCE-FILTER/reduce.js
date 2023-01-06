const list = [1,2,3,4]

// const sum = list.reduce((acc,current) =>{
//     return acc + current
// }, 0)

// const sum = list.reduce((acc,current) => acc + current, 0)

const myReduce = (acc,current) => acc + current

const sum = list.reduce(myReduce, 0)

console.log(sum)