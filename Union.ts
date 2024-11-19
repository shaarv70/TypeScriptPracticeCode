let userID:(string | number);   // userID can be string or number

userID="Arvind";
userID=34;
//userID=true;//throw error



//for function parameter

function getUserInfo(userID:(String|Number)){

    if(typeof(userID)==="number"){

        return 9000+" Arvind";
    }
    else if(typeof(userID)==="string"){
        return "Arvind";
    }
}

console.log(getUserInfo(9000));
console.log(getUserInfo("arvind"));