const rain = false

const umbrela = rain? 'levar guarda-chuva' : 'deixar guarda-chuva'


const balance = true
const isNotBlocked = true
const accountExiste = true

const tranferOk = balance & isNotBlocked & accountExiste ? 'TRANSFERENCIA REALIZADA' : 'TRANSFERENCIA NEGADA'
console.log(tranferOk)