class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`hello i am ${this.name}`);
    }
}

class Student extends Person{
    constructor(name,age,marks){
       super(name,age);
       this.marks = marks;
    }
}

class Teacher extends Person{
    constructor(name,age,subject){
       super(name,age);
       this.subject = subject;
    }
}

let T1 = new Teacher("ashish",20,"PCM");
let S2 = new Student("Jasmine",19,"Comerce");
