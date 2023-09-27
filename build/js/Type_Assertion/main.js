"use strict";
// convert to more or less specific type
let a = 'hello';
let b = a; // less specific
let c = a; // more specific
let d = 'world';
let e = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
let nextVal = addOrConcat(2, 2, 'concat');
// forced or double casting
10;
// we are query selecting by id
const element = document.querySelector('#img');
// we are selecting an html element by id
const htmlElement = document.getElementById('img');
// we are query selecting an html image element
const htmlImageElement = document.querySelector('img');
htmlImageElement.src;
htmlElement.src; // more specific
