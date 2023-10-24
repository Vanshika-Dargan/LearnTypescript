"use strict";
// string type
const printString = (arg) => arg;
// console.log(printString('Hello'))
// Generic Type
const printGeneric = (arg) => arg;
// console.log(printGeneric(2));
// console.log(printGeneric(true));
// console.log(printGeneric('Hey'));
// utility function with generics
const isObj = (arg) => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg != null);
};
// console.log(isObj({
//   name:'Vanshika',
//   loves:'coding'
// }))
// console.log(isObj([1,2,3,4,]))
// console.log(isObj(null))
// console.log(isObj(true))
// console.log(isObj('John'))
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    return {
        arg, is: !!arg
    };
};
const checkTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg };
};
const processUser = (user) => {
    return user;
};
// console.log(processUser({value:true}))
console.log(processUser({ id: 1, value: true }));
const getUserProperty = (users, key) => {
    return users.map(user => user[key]);
};
class StateObject {
    constructor(value) {
        this.data = value;
    }
    get state() {
        return this.data;
    }
    set state(value) {
        this.data = value;
    }
}
const store = new StateObject("John");
console.log(store.state);
store.state = "Vanshika";
// store.state=10
const myState = new StateObject([15]);
myState.state = ["Vanshika"];
