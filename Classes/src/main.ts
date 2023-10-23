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


class Student{
    
    // access/visibility modifies

    // this means that we are not intializing secondLang right away
    secondLang!:string
    constructor(
        public readonly name:string,
        public age:number,
        private lang:string,
        protected grade:string='A+',
        ){

        }
        public getLang():string{
            return `${this.name} knows ${this.lang}` 
        }
}

// const Vanshika=new Student('Vanshika',23,'English');
// console.log(Vanshika.getLang())


class Coder extends Student{
    public knowsJava:boolean
    constructor(knowsJava:boolean){
    super('Vanshika',23,'English','A+');
    this.knowsJava=knowsJava
    }
    public isQualified():string{
        return `${this.name} knows Java is ${this.knowsJava} and her grade is ${this.grade}`
    }

}
const Vanshika=new Coder(true);
console.log(Vanshika.isQualified());


//////////////////////////////////////////

interface Musician{
   name:string,
   instrument:string,
   play(action:string):string
}

class Guitarist implements Musician{
    name:string
    instrument:string

    constructor(name:string, instrument:string){
        this.name=name;
        this.instrument=instrument;
    }
    play(action:string):string{
        return `${this.name} ${action} ${this.instrument}`;
    }
}

const Vashu=new Guitarist('Vashu','Guitar');
console.log(Vashu.play('strums'));

///////////////////////////////////////////

class Peeps{
    static count:number=0;

    static getCount():number{
        return Peeps.count;
    }

    public id:number
    constructor(public name:string){
        this.name=name
        this.id=++Peeps.count;
    }
}

const John=new Peeps('John')
const Steve=new Peeps('Steve')
const Maya=new Peeps('Maya')
const Happy=new Peeps('Happy')

console.log(Maya.id);
console.log(Peeps.count);

///////////////////////////////////////


class Bands{
    private dataState:string[]

    constructor(){
        this.dataState=[]
    }

    public get data():string[]{
        return this.dataState;
    }

    public set data(value:string[]){
        if(Array.isArray(value) && value.every(el => typeof el==='string')){
            this.dataState=value;
            return
        }
        else throw new Error('Param is not an array of string')
    }
}

const MyBand=new Bands();
MyBand.data=['a', 'b', 'c', 'd', 'e'];
console.log(MyBand.data);

MyBand.data=[...MyBand.data,'Vanshika']
console.log(MyBand.data)

MyBand.data=[1,2,3,4];
console.log(MyBand.data);
