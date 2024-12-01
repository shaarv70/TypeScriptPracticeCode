class Mobile{

  //  private modelname:string;
    modelName:string;
    modelNumber:number;

    constructor(modelName:string,modelNumber:number){

        this.modelName=modelName;
        this.modelNumber=modelNumber;
    }

    makeCall(){


    }
}

const myobj= new Mobile("Oneplus",676765);
console.log(myobj.modelName);
console.log(myobj.modelNumber);