//for loop

for(let i=0;i<10;i++)
{
    console.log(i);
}


//for ..of

let numbers:Array<number>=[10,200,300,400,577];
for(let g of numbers)
{
    console.log(g);

}


//for..in    -- not possible for string

let myarray:number[]=[10,200,300,4986,875];

for(let i in myarray)
{
    console.log(myarray[i]);
    console.info(i);
}


let check:string="Hello world";

for(let y of check){

    console.log(y);
    console.log(check.search(y));  // for index

}

//while .. loop
let p=0;
while(p<10)

    {
        console.log(p);
        p++;
    }
  
/* use case for while : when number of iterations are not fixed 
1. infinite scrolling
2.wait for page loading
3. wait for specefic element
4. calendar handling
5 webtable pagination

use case for loop: when iterations are fixed

1. dropdown of month */


// do while loop
let d=1;
do{

console.log("First time");
 d++;

}

while (d<10);





