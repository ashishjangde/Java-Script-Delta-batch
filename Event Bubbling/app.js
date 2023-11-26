let lis = document.querySelectorAll("li")
let div = document.querySelector("div")
let ul = document.querySelector("ul")

div.addEventListener("click",(ev)=>{
    ev.stopPropagation();
    console.log("div is clicked");
})
ul.addEventListener("click",(ev)=>{
    ev.stopPropagation();
    console.log("ul is clicked");
})

for(li of lis){
li.addEventListener("click",(ev)=>{
    ev.stopPropagation();
    console.log("li is clicked");
})
}