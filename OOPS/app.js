// factory function that create many person 

function personMaker(name,rollno){
   const person ={
    name :  name,
    rollno: rollno,
    talk(){
        console.log(`Hi I can talk english i can walk english my name is ${this.name}`);
    }
   }
   return person;
}

let p1 = personMaker("adm",23);
let p2 = personMaker("eve",23);

p1.talk === p2.talk;  // gives you false cuz every function create its own copy- 
//its a drawback for factory function 



// constructor function
// in constructor function we dont have to return something
function Student (name ,age){
    this.name = name;
    this.age = age;
}
Student.prototype.talk =function(){
    console.log(`hello i am ${this.name}`);
}

let s1 = new Student("adm",23);
let s2 = new Student("eve",23);

// Classes 
class CarMaker {
    constructor(name, color){
        this.name = name;
        this.color = color;
    }
    talk(){
        console.log(`Heloo Vroom vrrom I am a ${this.color} color Bugati ${this.name} model`);
    }
}

let c1 = new CarMaker ("veyron","red/black")

let c2 = new CarMaker ("chiron","blue/white")