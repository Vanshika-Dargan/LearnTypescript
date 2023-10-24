
// string type
const printString=(arg: string):string=>arg
// console.log(printString('Hello'))

// Generic Type
const printGeneric=<T>(arg:T):T=>arg
// console.log(printGeneric(2));
// console.log(printGeneric(true));
// console.log(printGeneric('Hey'));

// utility function with generics

const isObj=<T>(arg:T):boolean=>{
return (typeof arg==='object' && !Array.isArray(arg) && arg!=null)
}

// console.log(isObj({
//   name:'Vanshika',
//   loves:'coding'
// }))
// console.log(isObj([1,2,3,4,]))
// console.log(isObj(null))
// console.log(isObj(true))
// console.log(isObj('John'))


const isTrue=<T>(arg:T):{arg:T,is:boolean}=>{
    
    if(Array.isArray(arg) && !arg.length){
        return {arg,is:false}
    }
    if(isObj(arg) && !Object.keys(arg as keyof T).length){
        return {arg,is:false}
    }
    return {
        arg,is:!!arg
    }
}

// console.log(isTrue(false))
// console.log(isTrue(0))
// console.log(isTrue(true))
// console.log(isTrue(1))
// console.log(isTrue('Vanshika'))
// console.log(isTrue(''))
// console.log(isTrue(null))
// console.log(isTrue(undefined))
// console.log(isTrue({}))
// console.log(isTrue({name:'Vanshika'}))
// console.log(isTrue([]))
// console.log(isTrue([1,2,3]))
// console.log(isTrue(NaN))
// console.log(isTrue(-0))

// redoing the same thing with interfaces
interface Check<T>{
value:T,
is:boolean
}

const checkTrue=<T>(arg:T):Check<T>=>{

if(Array.isArray(arg) && !arg.length){
    return {value:arg,is:false}
}
if(isObj(arg) && !Object.keys(arg as keyof T).length){
    return {value:arg,is:false}
}
return {value:arg,is:!!arg}
}

interface HasID{
    id:number
}

const processUser=<T extends HasID>(user:T):T{

    return user;
}

// console.log(processUser({value:true}))
console.log(processUser({id:1,value:true}))


const getUserProperty=<T extends HasID,
K extends keyof T>(users:T[],key:K):T[K][]=>{
    return users.map(user=>user[key])
}

class StateObject<T>{
    private data:T

    constructor(value:T){
        this.data=value;
    }
    get state():T{
        return this.data;
    }
    set state(value:T){
        this.data=value;
    }
}


const store=new StateObject<string>("John");
console.log(store.state)
store.state="Vanshika"
// store.state=10

const myState=new StateObject<(string | number | boolean)[]>([15]);
myState.state=["Vanshika"]