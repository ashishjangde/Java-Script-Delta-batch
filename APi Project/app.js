let url = "https://catfact.ninja/fact";
// fetch(url)
// .then((res)=>{
// //    console.log(res);
//    return res.json()
// })
// .then((data)=>{
//     console.log(data.fact);
//     return fetch(url);
//    })
//    .then((res)=>{
//      return res.json();
//    })
//    .then((data2)=>{
//      console.log(data2.fact);
//      return fetch(url)
//    })
// .catch((err)=>{
//     console.log(err);
// })

// async function getFact(){
// try{
//   let res = await fetch(url);
//   let data = await res.json();
//   console.log(data.fact); 

//   let res2 = await fetch(url);
//   let data2 = await res2.json();
//   console.log(data2.fact); 

//   let res3 = await fetch(url);
//   let data3 = await res3.json();
//   console.log(data3.fact); 

//   let res4 = await fetch(url);
//   let data4 = await res4.json();
//   console.log(data4.fact); 

// }catch(err){
//    console.log(err);
// }


// }
let btn = document.querySelector("button")
btn.addEventListener("click",async ()=>{
  let fact = await getFact();
  let output = document.querySelector("#output")
  output.innerText = fact;
})


async function getFact(){
try{
  let res = await axios.get(url);
  return res.data.fact;

}catch(err){
   console.log(err);
}
}
