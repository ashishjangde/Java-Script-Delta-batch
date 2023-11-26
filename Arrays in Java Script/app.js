//in this file we learn About Arrays 
// basic of array 
let student = ["ashish","ayush","mahi","diksha"]
student[1]="Jasmine"
student[4]="KuttaKamina"
student[5]="KuttaKamina Chutiya"
console.log(student)
console.log(student.length);
console.log(student[1].length);
// arrays are mutable

//Array Method 
let fruit = ["Apple","Bnana","mango",]
//push = add to end
fruit.push("lichi");
//unshift add in start 
fruit.unshift("kutta");
// pop remove from end
fruit.pop();
//delte from start 
fruit.shift();
  let followers= ["a","b","c"]
  let blocked = followers.shift()

  //index
 console.log(fruit.indexOf('mango')); 
 //finding in array that object is available ore not
 console.log(fruit.includes("mango"));

 //concatation & reverse
 //conctation 
 let cd  = [1,2,3,4]
 let de = [5,6,7,8]
 //merge in two arrays 
let lm =  cd.concat(de);
console.log(lm);
// reverse in a array 
console.log(lm.reverse());




 