class User{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    #courseList=[];
    getInfo(){
        return {name:this.name,email:this.email};
    }
    enrollCourse(name){
        this.#courseList.push(name);
    }
    getCourseList(){
        return this.#courseList;
    }

     login(){
        return "You are logged in";
    }
}


class subAdmin extends User{
    constructor(name,email){
        super(name,email);
    }
    getAdminInfo(){
        return "Sub Admin";
    }
    static login(){
        return "You are logged in for SubAdmin";
    }
}

module.exports=User;

const rock=new User("Rock","rr@gmail.com");
rock.enrollCourse("Acting");
rock.enrollCourse("Dancing")
console.log(rock.getCourseList());
console.log(rock.courseList);

const tom= new subAdmin("Tom","tt@gmail.com");
console.log(tom.getAdminInfo())
console.log(tom.getInfo())
console.log(tom.login())