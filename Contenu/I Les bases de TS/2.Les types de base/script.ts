
let str = "str"
let num = 5
let array = []
let obj = {
    a:5
}
let toggle = true

let anything // déclarer sans type, on met ce qu'on veut
let randomNumber: number
randomNumber = 99 
// randomNumber = "99" // marche pas

const conversion = (celsius :number) => {
    return (celsius *9/5)+32
}
console.log(conversion(50));
