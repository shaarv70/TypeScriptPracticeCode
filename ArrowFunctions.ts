//=> fat arrow or lamda function
// it is also kind of anonymous function: function without name 


let first=()=>{

    console.log("hello ts");
}

let printfunction=(a:number,b:number)=> a+b;
console.log(printfunction(2,3));


class Person{

   firstName:string;
     age:number;

     constructor(firstName:string,age:number){

      this.firstName=firstName;
      this.age=age;
     }

     display= ()=>{
      console.log(`${this.firstName} ${this.age}`);
     }
}

const c1= new Person("Arvind",56);
c1.display();
c1.firstName;
console.log(c1.age);