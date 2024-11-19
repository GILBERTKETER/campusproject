let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

let sign = document.q("signin");

let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let email = document.getElementById("email");
let password = document.getElementById("pass");
let cpass = document.getElementById("cpass");


sign.onclick=function myFunc(){
if(fname.length()>0 && lname.lenght()>0 && email.lenght()>0 && password.length()>0 && cpass===password==true){
    alert("Account Created Successfully!");
}
else{
    alert("Unsuccessfull");
}
}