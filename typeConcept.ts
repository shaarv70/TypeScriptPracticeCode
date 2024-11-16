/* typescript is statically typed language
type inference
type annotations  --  num:number      ...name */


let fname:string ="arvind";     // type annotations
let age:number=50;              // type annotations
age=100;

let num: number=50;             // type annotations(number can hold any integer, float, double etc.)
let lasName:string="Sharma"      // type annotations(string can hold any character, string etc.)

let test ="Typescript" /*  here we have not defined any annotation so compiler will itself decide the type of 
                        variable. So this feature is called type inference */

let  billAmount=6000; // type is number and will be decided at compile time(type inference)


let isActive:boolean=true;


//null and undefined

let city:null= null;
let country:undefined= undefined;


//any (any kind of data)
let value:any =80;
value="Test";
value=true;

//void  (generally used with function, doest not return any value)

function printHello():void{   // return type is void  --CT
    console.log("Hello !!");
}

function getNumber():number{   //-- return type is number, decided at CT

    return Math.random();
}

function getAnyValue():any{  // -- return any kind of value

    return "test";
}


/* function addition(a,b){  // throws error

    return a+b;   // -- type inference will be applied as number
} */
//console.log(addition(20,30));


//name :add
//params: a(number), b(number)
// return type:number
function add(a:number, b:number):number
{
    return a+b;
}