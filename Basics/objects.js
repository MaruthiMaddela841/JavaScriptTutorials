// var user={
//     firstName:"Maruthi",
//     lastName:"Maddela",
//     role:"admin",
//     loginCount:32
// }
// console.log(user);
// console.log(user.firstName);
// console.log(user["lastName"]);
// user.role="associate";
// console.log(user);
// console.table(user);

var user={
    firstName:"Maruthi",
    lastName:"Maddela",
    role:"admin",
    loginCount:32,
    courseList:[],
    buyCourse:function(courseName){
        this.courseList.push(courseName);
    },
    getCourseCount:function (){
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`
    }
}
var courseList=true;
console.log(user.getCourseCount());
user.buyCourse("Spring")
user.buyCourse("Hibernate")
console.log(user.getCourseCount());