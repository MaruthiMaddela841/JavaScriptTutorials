var temperature=20;
if(temperature>20){
    console.log("Cold Outside")
}
else{
    console.log("Warm Outside")
}

var email=true;
var fb=false;
var twitter=true;
if(email || fb && twitter){
    console.log("Login Success")
}
else{
    console.log("Login Unsuccessful")
}
email?console.log("Logged In"):console.log("looged Out")

var user="admin";
switch(user){
    case "admin":
        console.log("admin");
        break;
    case "associate":
        console.log("associate");
        break;
    case "manager":
        console.log("manager");
        break;
    default:
        console.log("No Role")
        break;
}
