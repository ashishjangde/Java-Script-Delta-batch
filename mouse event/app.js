let btn = document.querySelector("button");
// btn.addEventListener("click",function(ev){
//     console.dir(ev);
//     console.log("Button clicked");
// });
btn.addEventListener("dblclick",function(ev){
    console.dir(ev);
    console.log("Button clicked");
});

let inp = document.querySelector("input");
inp.addEventListener("keypress",function(ev){
    console.log(ev.key);
    console.log(ev.code);
});