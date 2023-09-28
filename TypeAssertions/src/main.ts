/*
Type Assertion is also known as Type Casting

Sometimes you will have information about the type of a value that Typescript cannot know about.

This is partculary true when we work with DOM

Type Assertion is like telling the typescript compiler that you know more about types so it needs to listen to you

*/

// type aliases

type One=string // string type
type Two=string | number // union of string and number type
type Three='hello' // literal type

// With type assertion you can convert to a more specific or less specific type than you start with

// Type assertion with as keyword

let a:One='hello'

//less specific
let b=a as Two

//more specific
let c=a as Three

// Type assertion with <>
// <> cannot be used in tsx files in React
let d=<One>'world'
let e=<string | number>2

// Type assertion for narrowing

const addOrConcat=(a:number,b:number,c:'concat' | 'add'): number | string=>{
if(c==='add') return a+b
return ""+a+b
}

let ans:number=addOrConcat(2,3,'add') as number
let ans2:string=addOrConcat(2,3,'concat') as string

// Wrong use of type assertion
let ans3:number=addOrConcat(2,3,'concat') as number

//'vanshika' as number

// forced or double casting
(10 as unknown)as string


// Assertions usage with DOM

const element=document.querySelector('#img')
const htmlElement=document.getElementById('img') as HTMLImageElement
const htmlImageElement=document.querySelector('img') as HTMLImageElement
const htmlImageElement2=document.querySelector('img')!
htmlImageElement.src
htmlElement.src
htmlImageElement2.src

// non null assertion

const htmlElement2=document.getElementById('img2')!
// htmlElement2.src -> src is only for image elements

// angle bracket notation not applicable for tsx files react
const htmlElement3=<HTMLElement>document.getElementById('img3')
