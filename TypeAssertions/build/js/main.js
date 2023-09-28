"use strict";
/*
Type Assertion is also known as Type Casting

Sometimes you will have information about the type of a value that Typescript cannot know about.

This is partculary true when we work with DOM

Type Assertion is like telling the typescript compiler that you know more about types so it needs to listen to you

*/
// With type assertion you can convert to a more specific or less specific type than you start with
// Type assertion with as keyword
let a = 'hello';
//less specific
let b = a;
//more specific
let c = a;
// Type assertion with <>
// <> cannot be used in tsx files in React
let d = 'world';
let e = 2;
// Type assertion for narrowing
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return "" + a + b;
};
let ans = addOrConcat(2, 3, 'add');
let ans2 = addOrConcat(2, 3, 'concat');
// Wrong use of type assertion
let ans3 = addOrConcat(2, 3, 'concat');
//'vanshika' as number
// forced or double casting
10;
// Assertions usage with DOM
const element = document.querySelector('#img');
const htmlElement = document.getElementById('img');
const htmlImageElement = document.querySelector('img');
const htmlImageElement2 = document.querySelector('img');
htmlImageElement.src;
htmlElement.src;
htmlImageElement2.src;
// non null assertion
const htmlElement2 = document.getElementById('img2');
// htmlElement2.src -> src is only for image elements
// angle bracket notation not applicable for tsx files react
const htmlElement3 = document.getElementById('img3');
