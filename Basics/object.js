const User =require("./class.js")
//import User from "./class.js"

let maruthi=new User ("maruthi","mm@gmail.com");
console.log(maruthi.getInfo());

maruthi.enrollCourse("Java");
maruthi.enrollCourse("Spring");
console.log(maruthi.getInfo());
//console.log(maruthi.getCourseList());
let courses=maruthi.getCourseList();
courses.forEach((c)=>console.log(c))