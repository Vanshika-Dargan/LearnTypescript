type One= string
type Two=string | number
type Three='hello'

// convert to more or less specific type

let a:One='hello'

let b = a as Two // less specific

let c= a as Three // more specific


let d = <One>'world'
let e = <string | number >'world'


const addOrConcat=(a:number,b:number,c:'add' | 'concat'):number | string=>{
    if(c ==='add') return a + b
    return ''+ a+ b
}

let myVal:string = addOrConcat(2,2,'concat') as string

let nextVal:number =addOrConcat(2,2,'concat') as number

// forced or double casting
(10 as unknown) as string


// we are query selecting by id
const element=document.querySelector('#img')
// we are selecting an html element by id
const htmlElement=document.getElementById('img') as HTMLImageElement
// we are query selecting an html image element
const htmlImageElement=document.querySelector('img') as HTMLImageElement

htmlImageElement.src
htmlElement.src // more specific

