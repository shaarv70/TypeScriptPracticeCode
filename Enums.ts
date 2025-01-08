/* Enums:Enumerations   : hold the set of constants
numeric,string,heterogenous */


//numeric

enum Browser{

    Chrome,       // 0 position
    Firefox,
    Edge,
    Safari
}

console.log(Browser.Chrome); //0
console.log(Browser);

//assigning value to enums

enum myBrowser{

    Chrome=5,
    Firefox,  //automatically 6
    Safari,// 7
    Edge //8
}
console.log(myBrowser);


function getVersion(browser:string):number{

    if(browser==='chrome')
    {
        return 115;
    }

    return -1;
}


enum MyBrowserVersion{

    Firefox,  //Non initializer must come first
    Safari,
     Edge=getVersion('chrome')*5 ,
     Chrome=getVersion('chrome')  
}

console.log(MyBrowserVersion);
console.log(MyBrowserVersion.Chrome);//115
console.log(MyBrowserVersion.Edge);//575


//String Enum
enum Environment{
    
    DEV= "dev",
    QA="qa",
    STAGE="stage",
    PROD="prod"
}

console.log(Environment);
console.log(Environment.DEV);
console.log(Environment['DEV']);//dev



//heterogeneous

enum Status{

    ACTIVE='active',
    DEACTIVE=1,
    PENDING
}
console.log(Status.ACTIVE);
console.log(Status.DEACTIVE);
console.log(Status.PENDING);
console.log(Status);
