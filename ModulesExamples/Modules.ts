//If I want to use any class,function, variavle outside anywhere then I have to use export

export class Module{

    private modelName:string;
    public modelNumber:number;
    readonly imei:string="asdgkhkj1234";  // we cannot change the value but we can only access it 
    
    constructor(modelName:string,modelNumber:number){
        this.modelName=modelName;
        this.modelNumber=modelNumber;
    }
    
    makeCall(){
        console.log("hey calling !!");
    }
    }
    
    const obj1= new Module("Apple",6);
    obj1.makeCall();
    console.log(obj1.imei);