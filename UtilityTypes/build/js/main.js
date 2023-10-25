"use strict";
// Partial
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assignObj = {
    studentId: "vanshika123",
    title: "Blockchain Basics",
    grade: 10
};
console.log(updateAssignment(assignObj, { verified: true }));
const assignGraded = updateAssignment(assignObj, { grade: 9 });
console.log(assignGraded);
// Required
const recordAssignment = (assign) => {
    return assign;
};
console.log(recordAssignment(Object.assign(Object.assign({}, assignObj), { verified: true })));
// Read only
const assignVerified = Object.assign(Object.assign({}, assignGraded), { verified: true });
// assignGraded.grade=8; works
// assignVerified.grade=8; does not work becuase assignVerified is read only
// Record
const hexColorMap = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF"
};
const assignGrades = {
    Sara: "A",
    Kelly: "B",
};
const gradeData = {
    Sara: { assign1: 1, assign2: 2 },
    Kelly: { assign1: 1, assign2: 3 },
};
const score = {
    studentId: "vanshika123",
    grade: 2,
};
const preview = {
    studentId: "vanshika123",
    title: "Typesript Project"
};
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
const createNewAssign = (title, points) => {
    return {
        title, points
    };
};
const tsAssign = createNewAssign("Utility Types", 100);
console.log(tsAssign);
const assignArgs = ["Generics", 100];
const tsAssign2 = createNewAssign(...assignArgs);
console.log(tsAssign2);
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch('https://jsonplaceholer.typicode.com/users')
        .then(res => {
        return res.json();
    }).catch(err => {
        if (err instanceof Error)
            console.log(err.message);
    });
    return data;
});
fetchUsers().then(users => console.log(users));
