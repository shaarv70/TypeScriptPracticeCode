/* Type assertion is a way to tell the TS compiler that the user knows more about the type
of a value than it does */



//using <>

let total:any=123;
let finalSum=<number>total +200;   // kind of typecasting;
console.log(finalSum);



//using as 

let someValue:any="hello this is arvind";
let mylength=(someValue as string).length;
console.log(mylength);


let flag:any = true;
if(flag as boolean)
{
    console.log("hello ts");
}