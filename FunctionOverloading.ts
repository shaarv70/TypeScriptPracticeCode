/* TS provides the concept of function overloading
we can have multiple functions
1. with same name 
2.but different parameter types and return type
3. however the number of parameters should be the same */


//provide the prototype of the function

function add(a:string,b:string):string;

function add(a:number,b:number):number;

function add(a:boolean, b:boolean):boolean  

//need to implement with function body only once

function add(a:any,b:any):any
{
    return a+b;

}

console.log(add("Hello","World"));
console.log(add(12,30));
console.log(add(true,true)); 


