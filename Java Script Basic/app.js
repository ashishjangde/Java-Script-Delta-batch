const a = 67;
let b = 9;
// a = 50
console.log(a+b);
//template letral 
let pprice = 10;
let Eprice = 30; 
//output="total price of your item " + (pprice+Eprice) +"Rupees"  
//lengthy ho jata hai isly ni likhte 
output=`total price of your item ${pprice+Eprice} Rupees`  //template letral shortest Way 
console.log(output)
//if statement
if(a<=b){
    console.log("hello")
}else if (a<b){
    console.log("helo bsn")
}else{
    console.log("assds")
}
//Nested if else 
let marks = 75;
if (marks>=33){
    console.log('pass')
    if(marks>=90){
       console.log("A+")
    }
    if(marks>=80 && marks <= 90){
        console.log("A")
     }
     if(marks>=70 && marks <= 80){
        console.log("B+")
     }
}else {
    console.log("Better Luck Next Time")
}
//Switch Statement
let color="red"
switch(color){
    case"red" : console.log("You cant go light is red")
    break;
    case"yellow" : console.log("You cant go light is yellow")
    break;
    case"green" : console.log("You can go light is green")
    break;
    default:console.log("light is brokend")
}
//alert prompt 
//prompt = "Enter Your First Name"

// let fname = prompt ("enter Your First Name")
// let lname = prompt ("enter Your Last Name")
// let outpt = `welcome ${fname+" "+lname} !`
// alert(outpt); 


// String Methods
// method = action that can be performed on objects
// (i) Trim method
let msg = '   Helllo '
let newmsg = msg.trim();
console.log(newmsg)
console.log(msg.trim())


//trim method in input
let pass = ' Hello  '
// let pass = prompt("Enter your passwoed")
let pas = pass.trim();
// alert(pas)
 console.log(pas)

// strings are immutable in nature
// to UPPERCASE Lowercase
let namee = 'Ashish Jangde'
let newname = namee.toLowerCase();
let upname = namee.toUpperCase();
console.log(newname);
console.log(upname);


// String Method with Argument
// trying to find indx of string
let ashi = "IloveCoding"
let newashi = ashi.indexOf("l")
console.log(newashi)

//method chaining
let ayum = "    Hellobhay   "
let newayum = ayum.toUpperCase().trim()
console.log(newayum);

//Slice Method
// Return a Part of the orignal string as a new string 
let ayop = "ILoveCoding"
let  newaypp = ayop.slice(5)
console.log(newaypp); 

// Learning Replace Method
let aylm = ayop.replace('Love','do')
console.log(aylm);

