//optional parameters


function getMyInfo(firstname:string,age?:number):string{  // optional parameter ?


        return firstname +" "+age;

}

console.log(getMyInfo("Tom"));
console.log(getMyInfo("Tom",30));


//default parameter

 function Mycheck(name:string="My insane",msg:string):string{


     return msg+name;
}

//console.log(Mycheck("This is me")); this will thrown an error

console.log(Mycheck("Arvind","this is me"));// this is correct 

function checking(name:string,msg:string="Hi this is check"):string{

        return name +" "+ msg;
    
}

console.log(checking("Arvind")); // this is right 