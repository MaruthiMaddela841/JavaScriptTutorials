function sayHello(name){
    console.log("Hello "+name);
    console.log("Hello",name);
    console.log(`Hello ${name}`);
}
sayHello("Maru");

function namastey(){
    return "Hello.."
}
var result=namastey();
console.log(namastey());
console.log(result);

var getUserRole=function(name,role){
    switch(role){
        case "admin":
            return `${name}:: is admin.`
            break;
        case "associate":
            return `${name}:: is associate.`
            break;
        case "manager":
            return `${name}:: is manager.`
            break;
        default:
            return `${name} has undefined role.`
    }
}

result=getUserRole("Maru","admin");
console.log(result);
