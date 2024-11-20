let flag1:boolean=true;
if(flag1)
{
    console.log("pass");
}
else{
    console.log("fail");
}

let x:number=10,y:number=20;
if(x>y){
    console.log("x is greater than y");
}
else{
    console.log("y is greater than x");
}

//<> <= >= ===  !=

//if-else if:

let a:number=100,b:number=200,c:number=300;

 if(a>b && a>c)
 {
    console.log("a is greatest");
 }
 else if(b>c){
    console.log("b is greatest");
 }
 else{
    console.log("c is greatest");
 }


//ternary operator 
let max:number;
max=a>b?a:b;
max=max>c?max:c;
console.log(max);


let browser:string='chrome';

(browser==='chrome')?console.log("Launch chrome"):(browser==='firefox')?console.log("launching firefox"):console.log("pass the right browser");


//switch cases

let day:string='mon';
let dayOfweek:string=''; // it must be initialized over here otherwise ts 
switch(day){                  //  will assume itself that it is not initialized although we assigning some value to variable



case 'mon':dayOfweek='mon';
break;
case 'tue':dayOfweek='tue';
break;
case 'wed':dayOfweek='wed';
break;
case 'thur':dayOfweek='thru';
break;

default:console.log("wrong day");
break;
 
// we can write cases after default also
}
console.log(dayOfweek);





enum Environment{
    
    DEV1= "dev",
    QA1="qa",
    STAGE1="stage",
    PROD1="prod"
}



let env:string=Environment.DEV1;
switch(env){

    case Environment.DEV1:console.log("DEV is launched")
    break;

    default:console.log('wrong chocie');
    break;

}

