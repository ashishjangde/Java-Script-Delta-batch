//in this lecture we learn about function

function printname(name , age){
    console.log(`${name} is ,${age} year old.`);
}
printname("Ashish",20);//if 20 not assigned it say undefined


// sum of two number 
function sumofno(a,b){
    console.log(a+b);
    console.log(a*b);
    console.log(a-b);
    console.log(a/b);
    console.log(a%b);
   
}
sumofno(10,5);

//higher order function
let multiplegreet = function(func,n){
    for(i =1; i<=n ; i++){
        func();
    }
} 
 let greet = function(){
    console.log("Helloo Sir");
 }
 multiplegreet(greet,200);

 // higher order function that return a value

 let odd = function(n){
    console.log(!(n%2 ==0 ));
 }
 let even = function(n){
    console.log((n%2 ==0 ));
 }
 
function oddEvenFactory(request){
    if(request =="odd"){
        let odd = function(n){
            console.log(!(n%2 ==0 ));
         }
         return odd;
    }else if(request =="even"){
        let even = function(n){
            console.log((n%2 ==0 ));
         }
         return even;
    }else{
        console.log("Wrong Input");
    }
}
let request = "odd";
let func = oddEvenFactory(request);

//Methods

// Methods action that perform on a object

const calculator ={
    add : function(a , b){
        return a + b;
    },
    sub : function(a , b){
        return a - b;
    },
    mul : function(a , b){
        return a * b;
    }
};
console.log(calculator.add(4,5));

// this keyword 

const student = {
    name: "Ashish Jangde",
    age : 21,
    phy: 95,
    chem: 93,
    math : 97,
    getavg(){
        let avg = (this.phy + this.chem + this.math)/3;
        console.log(`mr/mrs ${this.name} got average marks = ${avg}`);
    } 
}
student.getavg();

// try catch 

try {
    console.log(a);
} catch (error) {
    console.log("A is not define");
}

// Arrow Function
//implicit return

const sum = (a,b) => a + b; //(a+b); //(returt a+b); // { console.log(a+b)}

console.log(sum(6,4)); 

// set time out 

console.log("Hi there ");
setTimeout( ()=>{
    console.log("In My Room");
},4000);
console.log("Welcome");



