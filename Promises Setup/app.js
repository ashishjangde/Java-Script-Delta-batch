// call back hell
// function saveToDb(data , success , failure){
//     let intenetSpeed = Math.floor(Math.random()*10)+1;
//     if(intenetSpeed>4){
//        success();
//     }else{
//        failure();
//     }
// }

// saveToDb("Ashish Jangde",() =>{
//     console.log("Sucess 1");
// },()=>{
//     console.log("failure 1");
// },saveToDb("Ayush jangde",()=>{
//     console.log("sucess 2");
// },()=>{
//     console.log("failure 2");
// }))


// promises

 function saveToDb(data){
    return new Promise((success,failure)=>{
        let intenetSpeed = Math.floor(Math.random()*10)+1;
        if(intenetSpeed>4){
           success("data was saved ");
        }else{
           failure("weak connection");   
       }
    })
  
 }

// saveToDb("Ashish Jangde")  // let request = //saveToDb("Ashish Jangde") 
// .then(()=>{                // request.then
//    console.log("Promise Resolved : Data saved successful");
// saveToDb("Ayush Jangde").then(()=>{
//    console.log("2nd Promise Resolved : Data saved ");
// })})
// .catch(()=>{
//    console.log("Promise Rejected : Data Doesnt saved ");
// })


// eficient Code
saveToDb("Ashish jangde")
.then((result)=>{
   console.log("Promise Resolved : Data saved successful");
   console.log("result :" + result); 
   return saveToDb("Ayush Jangde")
}).then((result)=>{
   console.log("2nd Promise Resolved : Data saved successful");
   console.log("result :" + result); 
   return saveToDb("Jasmine")
}).then((result)=>{
   console.log( "3rd Promise Resolved : Data saved successful" );
   console.log("result :" + result); 
}).catch((error)=>{
   console.log("Error");
   console.log("error :" + error); 
})