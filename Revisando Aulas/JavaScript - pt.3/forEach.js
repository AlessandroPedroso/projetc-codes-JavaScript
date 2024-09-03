/**
 * ForEach(item,index,array)
 */

const users = [
    {name:'Alessandro', age:29,contact:'(51) 99815-2732'},
    {name:'Eduardo Pedroso', age:29,contact:'(51) 99815-2732'},
    {name:'Taís Froner', age:29,contact:'(51) 99815-2732'},
    {name: 'Lúcia', age: 29, contact: '(51) 99815-2732' },
    {name:'Sérgio', age:29,contact:'(51) 99815-2732'}
]

// array.forEach(element => {
    
// });

//foreach não aceita break
users.forEach((element,index) => {
    console.log(index + ") " + element.name)
});
