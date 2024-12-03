/* difference bw readonly and const is whenever we talk abou the member of the class then we use readonly
as we know that we cannot use var,let and const inside the class but can be used inside the function present in that class
 */
class MobileClass{

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

const obj= new MobileClass("Apple",6);
obj.makeCall();
console.log(obj.imei);
//obj.imei="gjhv232";   not possible