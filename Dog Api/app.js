let url = "https://dog.ceo/api/breeds/image/random";
let btn = document.querySelector("button");

btn.addEventListener("click", async ()=>{
   let link = await getImg();
   console.log(link);
   let img = document.querySelector("#action")
   img.setAttribute('src',link)
})



async function getImg (){
try{
    let res = await axios.get(url);
    return res.data.message;
 
}catch(err){
    console.log(err);
    return "/";
}
}


