let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

function addItem() {
    if (inp.value.trim() !== "") {
        let item = document.createElement("li");
        item.innerText = inp.value;
        let delBtn = document.createElement("button");
        delBtn.innerText = "Remove";
        delBtn.classList.add("delete");

        delBtn.addEventListener("click", () => {
            console.log(item);
            item.remove();
        });

        item.appendChild(delBtn);
        ul.appendChild(item);
        inp.value = "";
    } else {
        console.log('Please Enter Something');
    }
}

btn.addEventListener("click", addItem);

inp.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addItem();
    }
});




// ul.addEventListener("click" , function (ev){
//    console.log(ev.target.nodeName);
//    let node = ev.target.nodeName;
//    if(node == "BUTTON"){
//     let listItem = ev.target.parentElement;
//     listItem.remove();
//    }
// })

 let delBtns = document.querySelectorAll(".delete");
 for (delBtn of delBtns){
     delBtn.addEventListener("click", function(){
         let ptE = this.parentElement;
         console.log(ptE)
         ptE.remove();

  })
 }