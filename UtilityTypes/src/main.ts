
// Partial

interface Assignment{
    studentId:string,
    title:string,
    grade:number,
    verified?:boolean
}

const updateAssignment=(assign:Assignment,propsToUpdate:Partial<Assignment>):Assignment=>{
return {...assign,...propsToUpdate}
}

const assignObj:Assignment={
    studentId:"vanshika123",
    title:"Blockchain Basics",
    grade:10
}
console.log(updateAssignment(assignObj,{verified:true}))
const assignGraded:Assignment=updateAssignment(assignObj,{grade:9})
console.log(assignGraded)


// Required

const recordAssignment=(assign:Required<Assignment>):Assignment=>{
return assign
}

console.log(recordAssignment({...assignObj,verified:true}));


// Read only

const assignVerified:Readonly<Assignment>={
    ...assignGraded,verified:true
}


// assignGraded.grade=8; works
// assignVerified.grade=8; does not work becuase assignVerified is read only


// Record

const hexColorMap:Record<string,string>={
    red:"FF0000",
    green:"00FF00",
    blue:"0000FF"
}

// Record of literal types
type Students="Sara" | "Kelly"
type Grades="A" | "B" | "C" | "D" | "E" | "U"

const assignGrades:Record<Students,Grades>={
    Sara:"A",
    Kelly:"B",
}

interface DefineGrades{
assign1:number,
assign2:number,
}

const gradeData:Record<Students,DefineGrades>={
    Sara:{assign1:1, assign2:2},
    Kelly:{assign1:1, assign2:3},
}

// Pick and Omit

type AssignResult= Pick<Assignment,"studentId" | "grade">

const score:AssignResult={
    studentId:"vanshika123",
    grade:2,
}

type AssignPreview=Omit<Assignment,"verified" | "grade">

const preview:AssignPreview={
studentId :"vanshika123",
title:"Typesript Project"
}

// Exclude and Extract
// not going to work with interface
// work with string union literal types

type adjustedGrades=Exclude<Grades,"U">
type highGrades=Extract<Grades,"A" | "B">


// Nonnulllable

type AllPossibleGrades="Vanshika" | "Happy"|null | undefined

// exclude both null and undefined
type NameOnly=NonNullable<AllPossibleGrades>



// Return type

// if we change return then we need to change new Assign
// type newAssign={
//     title:string,
//     points:number,
// }

// const createNewAssign=(title:string,points:number):newAssign=>{
//     return {
//         title, points
//     }
// }

const createNewAssign=(title:string,points:number)=>{
    return {
        title, points
    }
}

type newAssign=ReturnType<typeof createNewAssign>

const tsAssign:newAssign=createNewAssign(
    "Utility Types",
    100
)
console.log(tsAssign);


// Paramter

type AssignParams=Parameters<typeof createNewAssign>

const assignArgs:AssignParams=["Generics",100]

const tsAssign2:newAssign=createNewAssign(...assignArgs)

console.log(tsAssign2);


// Awaited- helps us with the ReturnType of a Promise

interface User{
    id:number,
    name:string,
    username:string,
    email:string,
}

const fetchUsers=async():Promise<User[]>{

    const data=await fetch('https://jsonplaceholer.typicode.com/users')
    .then(res=>{
        return res.json()
    }).catch(err=>{
        if(err instanceof Error)
        console.log(err.message)
    })
    return data;
}

type FetchUserReturnType=ReturnType<typeof fetchUsers>
type FetchUserReturnType2=Awaited<ReturnType<typeof fetchUsers>>

fetchUsers().then(users=>console.log(users))

