let form = document.querySelector("form")
form.addEventListener("submit",function(event){
    event.preventDefault();
    let user = this.elements[0];//document.querySelector("#user")
    let pass = this.elements[1]//document.querySelector("#pass")
   
       console.log(user.value);
       console.log(pass.value);
       alert(`Hello User ${user.value} your password set to ${pass.value}`)
       user.value = "";
       pass.value = "";
    });
