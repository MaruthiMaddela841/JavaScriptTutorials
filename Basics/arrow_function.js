function funcName(argument){
    //body
}

var funcName=function(argument){
    //body
}

let display=(argument)=>{
    console.log(argument)
}
display("Maruthi");

let display2=(argument)=>console.log(argument)
display2("Maddela")

let display3=argument=>console.log(argument)
display3("Reshma")


let person={
    firstName:"Maruthi",
    lastName:"Maddela",
    getFullName:function(){
        console.log(this.firstName+` `+this.lastName)
        let fullName=function(){
        firstName="Reshma"
        lastName="Bethi"
            console.log(this.firstName+` `+this.lastName)
        }
        fullName();
    }
}

person.getFullName();