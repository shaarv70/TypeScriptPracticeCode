import { Module } from "./Modules";  /* auto import-- so if in this imported class object is created then 
                                        object calling will first executed from imported class
                                         then this class object actions executed
 */
const cell:Module= new Module("Samsung",2324);
console.log(cell.imei);
console.log(cell.modelNumber);   

/* Output: hey calling !!
asdgkhkj1234
asdgkhkj1234
2324   */      