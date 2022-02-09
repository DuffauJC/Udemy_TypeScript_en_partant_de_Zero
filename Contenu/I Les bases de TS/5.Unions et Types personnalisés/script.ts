///////////// Union

let code: string | number | boolean | object | Function
code = "6"

let arr: (boolean|number)[]
arr=[true,false,999]


const foo = (param: number | string) => {
    console.log(param)
}
foo('test')


////////////// Types Perso

type mixedNumStr = number | string
type booleanOrObject = boolean | object

const baz = (param: mixedNumStr|booleanOrObject) => {
    console.log(param)
}
baz(25)


type element = {
    x: number,
    y: number,
    ib: number | string,
    visible:boolean,
}

const button : element = {
    x: 99,
    y: 50,
    ib: 999, 
    visible: true
}