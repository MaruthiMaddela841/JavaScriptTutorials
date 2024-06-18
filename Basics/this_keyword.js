console.log(this);
var user={
    firstName:"Maruthi",
    courseCount:4,
    getCourseCount: function(){
        console.log("Line 6",this);
        function sayHello(){
            console.log("LINE 8",this);
        }
        sayHello();
    }
}
user.getCourseCount();