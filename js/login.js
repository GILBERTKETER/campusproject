let user = document.getElementById("username");
let password = document.getElementById("pass");
let btn = document.querySelector("#loginbt");

btn.onclick()=function myFunc(){
if(user=="wizardo" && password =="password"){

    alert("Successfull");
}
else{
    alert("unsuccessfull!");
}
}

