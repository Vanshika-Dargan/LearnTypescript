"use strict";
// class Employee{
//     name:string
//     age:number
//     language:string
//     constructor(name:string, age:number, language:string){
//         this.name=name;
//         this.age=age;
//         this.language=language;
//     }
// }
class Student {
    constructor(name, age, lang, grade = 'A+') {
        this.name = name;
        this.age = age;
        this.lang = lang;
        this.grade = grade;
    }
    getLang() {
        return `${this.name} knows ${this.lang}`;
    }
}
// const Vanshika=new Student('Vanshika',23,'English');
// console.log(Vanshika.getLang())
class Coder extends Student {
    constructor(knowsJava) {
        super('Vanshika', 23, 'English', 'A+');
        this.knowsJava = knowsJava;
    }
    isQualified() {
        return `${this.name} knows Java is ${this.knowsJava} and her grade is ${this.grade}`;
    }
}
const Vanshika = new Coder(true);
console.log(Vanshika.isQualified());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} ${this.instrument}`;
    }
}
const Vashu = new Guitarist('Vashu', 'Guitar');
console.log(Vashu.play('strums'));
///////////////////////////////////////////
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const John = new Peeps('John');
const Steve = new Peeps('Steve');
const Maya = new Peeps('Maya');
const Happy = new Peeps('Happy');
console.log(Maya.id);
console.log(Peeps.count);
///////////////////////////////////////
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value;
            return;
        }
        else
            throw new Error('Param is not an array of string');
    }
}
const MyBand = new Bands();
MyBand.data = ['a', 'b', 'c', 'd', 'e'];
console.log(MyBand.data);
MyBand.data = [...MyBand.data, 'Vanshika'];
console.log(MyBand.data);
MyBand.data = [1, 2, 3, 4];
console.log(MyBand.data);
