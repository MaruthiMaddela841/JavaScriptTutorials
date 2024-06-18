var User=function(firstName,courseCount){
    this.firstName=firstName;
    this.courseCount=courseCount;
    this.getCourseCount=function(){
        console.log(`Course count is:${this.courseCount}`)
    }
    
}

var User2={
    name:"",    
    getName:function(){
        console.log(`Name is:${this.name}`)
    }
}

User.prototype.getFirstName=function(){
    console.log(`Your First Name is::${this.firstName}`)
}

var maruthi=new User("Maruthi",2);
console.log(maruthi);
maruthi.getCourseCount();
if(maruthi.hasOwnProperty("firstName")){
    maruthi.getFirstName();
}

var mj=Object.create(User2);
console.log(mj);
mj.name="Maru Justin";
mj.getName()

var sam=Object.create(User,{
    firstName:{value:"samuel"},
    courseCount:{value:3},
});

console.log(sam.getFirstName);