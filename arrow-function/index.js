// function sum(number1,number2){
//     return number1 + number2
// }

// const sum = (number1,number2) =>{
//     return number1 + number2
// }

// const sum2 = (number1, number2) => number1 + number2

// console.log(sum2(5,7))
// (function (){
// const getPerson = () => {
    
//   return  {name:"Eduardo"}

// }

// const getPerson2 = () => ({name:"Eduardo"})

// console.log(getPerson2())

// })()

(()=>{
    // const getPerson = () => {
        
    //   return  {name:"Eduardo"}
    
    // }
    
    // const getPerson2 = () => ({name:"Eduardo"})
    
    // console.log(getPerson2())

function Person (){

    this.year = 30

   setInterval(()=>{
        this.year = this.year + 1
        console.log('qual é a idade ', this.year)
    },1000)
}
    const p1 = new Person()
})()