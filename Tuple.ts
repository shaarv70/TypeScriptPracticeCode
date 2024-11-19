//Tuple vs Array

//since arrays are dynamic in nature, we can add values at runtime but tuple are of fixed size
//order is maintained in tuples

let person: [string,number]=["Arvind",200];  //we can give only one string and one number at the time of initialization
person.push("Meow",67);// this is acceptable in tuple
console.log(person);

let user:[string,number,boolean]=["Arvind",12,true];

console.log(person[0]);
console.log(person[1]);

// to add array to tuples
let myuser:[string,number][]=[["Arvind",34],["tree",56],["tytryt",56]];
console.log(myuser[0]);  //[ 'Arvind', 34 ]
console.log(myuser[0][0]);//Arvind 

 