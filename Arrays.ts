//arays are dynamic in nature

let names:string[]=["Arvind","Tom","Peter","Chanchal"];
console.log(names[0]);


//using generics
let empNames:Array<string>=["Tom","cook","helex"];
let empIds:Array<number>=[12,13,1,42,2];
let empInfo:Array<any>=[1,2,4,"Arvind",34,undefined];

//multi-type array

let values:(string | number)[]=[12,"Tim",100]; 
let val:Array<string | boolean>=[true,"atiug",false]


//first array declaration then initialize

let users:Array<string>
users=["Peter","Arvind","gikti"];

//iterate the array
for(let i=0;i<users.length;i++)
{
    console.log(users[i]);
}


//for in lop

for(let g in values)
{
    console.log(values[g]);
}