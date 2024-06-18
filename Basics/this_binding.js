const maruthi={
    firstName:"Maruthi",
    lastName:"Maddela",
    role:"Admin",
    courseCount:"3",
    getInfo:function(){
        console.log(`
        FirstName::${this.firstName}
        LastName::${this.lastName}
        Role::${this.role}
        CourseCount::${this.courseCount}
        `)
    }
}

maruthi.getInfo();

const dj={
    firstName:"Rock",
    lastName:"Johnson",
    role:"Manager",
    courseCount:"2",
}

var djInfo=maruthi.getInfo.bind(dj);
djInfo();
maruthi.getInfo.call(dj);