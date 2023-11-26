//this with arrow function  this calling object in Function 
 // laxial scope parent call scope in arrow function

let student = {
    name: "Ashish Jangde",
    age: 20,
    marks: 95,
    printName: function() {
        console.log(this.name);
    },
    printMarks : () => {
        console.log(this.marks);

    },
    getInfo1 : function(){
        setTimeout( function (){
            console.log(this); // window
        },2000)
    },
    getInfo2 : function(){
        setTimeout(  () => {
            console.log(this); // student
        },2000)
    },
}

// Array Methods 

let arr = [1,2,3,4,5,]
function printElement(el){
    console.log(el);
}
arr.forEach(printElement);

 //or
 
 arr.forEach(function(el){
    console.log(el);
 });


 // specific object from array method

 let stu = [
{
  name: "Ashish Jangde",
  marks : 98,
 },
 {
    name: "Ayush",
    marks : 93,
 },
 {
    name: "Jasmine",
    marks : 94,
 }]
 stu.forEach((student)=>{
    console.log(`${student.name} got itta itta marks ${student.marks}`);
 });


 // Map function 
 // padhenge isme 
 let gpa = stu.map((student)=>{
    return student.marks/10;
 });

 console.log(gpa);
 
// filter function padhenge 
 let nums = [1,2,3,4,5]
  
 let b = nums.filter((el)=>{
    return el%2 == 0;
 });
 console.log(b);

 // every function padhenge 
 