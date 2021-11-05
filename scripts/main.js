const Nav = document.querySelector(".nav_links");
const HamBurger = document.querySelector(".hamburger");
HamBurger.addEventListener("click" , () => {
    Nav.classList.toggle("active");
    let Icon = document.getElementById("menu");
    if(Nav.classList.contains("active")){
        Icon.classList.remove("fa-bars");
        Icon.classList.add("fa-times");   
    }else{
        Icon.classList.remove("fa-times");
        Icon.classList.add("fa-bars");
    }
});
// Change the Theme 
const Icon = document.getElementById("icon");
Icon.addEventListener("click", () => {
    document.body.classList.toggle("theme");    
    if(document.body.classList.contains("theme")){
        Icon.classList.remove("fa-moon");
        Icon.classList.add("fa-sun");   
    }else{
        Icon.classList.remove("fa-sun");
        Icon.classList.add("fa-moon");
    }
});
// const ContBtn = document.getElementById("ContBtn");
// ContBtn.addEventListener("click", sendContMail);
// Email JS 
// function sendContMail(params){
//     var tempParams = {
//         from_name : document.getElementById("ContName").value,
//         from_email : document.getElementById("ContEmail").value,
//         message : document.getElementById("ContComment").value,
//     };

//     emailjs.send("service_58gqnsl","template_zxidjj4",tempParams);

//     window.location.href = "./contact.html";
// }