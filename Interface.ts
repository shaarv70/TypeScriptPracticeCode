const credentials={

    user:"admin",
    password:"pass@123"
}

let  submitForm =(args:validCredentials)=>{

    console.log(args.user);
    console.log(args.password);
}

submitForm(credentials);

interface validCredentials{

   user:string,
   password:string

}
