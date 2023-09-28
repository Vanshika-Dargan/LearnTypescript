/*
const span=document.getElementById('year')
const year=new Date().getFullYear()
span.setAttribute('datetime',year)
span.textContent=year
*/

const span=document.getElementById('year')
const year:string=new Date().getFullYear().toString()
if(span){
span.setAttribute('datetime',year)
span.textContent=year
}

// const span=document.getElementById('year') as HTMLSpanElement
// const year:string=new Date().getFullYear().toString()
// span.setAttribute('datetime',year)
// span.textContent=year



