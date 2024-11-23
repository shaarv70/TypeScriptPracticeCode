//any
let num1:any=677;

let something:any;
something=67;
something="Arvind";
something=true;


let lang:any[]=["Arvind",1800,true];
lang[3]="Automation";
lang.push("Ue");

function info(num1:any,num2:any):any{

    if(num1>num2){
    return "String";
    }
    else{
        return 123;
    }
}

let n=info(2,3);
console.log(n);




//void

let myNumber:void=undefined;  //if type annotation is void then we can initialize that variable woth undefined only

function getInfo(msg:string):void{

    console.log(msg);
     return ;
}
getInfo("Hi this is TS");



/* 
never   : difference bw never and void is never doesnt hold anything even undefined, 
which means it cannot be initialized and for function having never as return type we dont write return statement
even only single return word is also not possible*/ 


/* function printError(msg:string):never{
  
    throw new Error(msg);

}
printError("hi this is error !!"); */


function displayMesg():never{

    while(true){
        console.log("Welcome to Taj hotel");
    }
}

displayMesg();

