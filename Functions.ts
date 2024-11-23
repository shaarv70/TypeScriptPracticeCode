//named function:

function get(){

    console.log("hello info");
}
get();


function myCheck(a:number, b:number):void{   // parameters

    console.log(a+b);
}
myCheck(10,20);// call by value :arguments



function calNumber(a:number,b:number,c:number):number{

    let total:number=a+b-c;
    return total;
}
console.log(calNumber(10,20,40));

function isUSerActive(name:string):boolean{

    if(name==="Arvind"){
        return true;
    }
    else if(name==="Tom")
    {
        return false;
    }
  else{
    return false;
    }
}

if(isUSerActive("Arvind"))
{
    console.log("Activated");
}

//Anonymous function

const myfunction=function(){

    console.log("hello JS");
}
myfunction();


let mysum=function(a:number,b:number):number{

    return a+b;
}

console.log(mysum(2,3));
