function one (){
    return 1;
}
function two (){
    return one()+one();
}

function three (){
    let ans = two() + one();
    console.log(ans);
}
three();


setTimeout(()=>{
    console.log("Apna college");
},2000);
setTimeout(()=>{
    console.log("I love You qt ");
},2000);

console.log("Hello...");


// callback hell 
 let h = document.querySelector("h1")
// function color (color , delay , changecolorinterval){
//   setTimeout(()=>{
//     h.style.color = color;
//     if (changecolorinterval) changecolorinterval();
//   },delay)
// }

// color("green",1000,()=>{
//     color("yellow",1000,()=>{
//         color("pink",1000)
//     })
// })



// now with promises 
// function changeColor(color,delay){
//    return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             h.style.color = color;
//             resolve("color changed")
//         },delay);
//     });
// }

// changeColor("green",1000)
// .then(()=>{
//     console.log("green completed");
//     return changeColor("red",1000)
// })
// .then(()=>{
//     console.log("red completed");
// })


// let try with async & await 

 function changeColor(color, delay){
  return new Promise((sucess,reject)=>{
    setTimeout(()=>{
        let num = Math.floor(Math.random()*5)+1
        if(num>3){
            reject("promise rejected")
        }
        h.style.color = color;
        sucess(`color changed`);
        console.log(`color ${color} was changed`);
        console.log(num);
    },delay)
  })  
}

async function demo(){
   try{
    await changeColor("green",1000);
  await  changeColor("yellow",1000);
   await changeColor("blue",1000);
   await changeColor("pink",1000);
   await changeColor("violet",1000);
   await changeColor("red",1000);
   }catch(err){
    console.log("error aa gaya yarr");
   }
}
demo();