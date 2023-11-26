let btn = document.querySelector("button");
btn.addEventListener("click", () =>{
    let he = document.querySelector("h3")
    let randomcolour = getrandomcolour();
    he.innerText = randomcolour;
    let div = document.querySelector("div")
    div.style.backgroundColor = randomcolour;
    console.log("Colour Updated");

})

let getrandomcolour = () => {
    let red = Math.floor(Math.random()*255)
    let green = Math.floor(Math.random()*255)
    let blue = Math.floor(Math.random()*255)
    let randomclr = `rgb(${red}, ${green}, ${blue})`
    return randomclr;
}