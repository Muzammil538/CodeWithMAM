const Nav = document.querySelector(".navbar-bottom");
const HamBurger = document.querySelector(".hamburger");
HamBurger.addEventListener("click" , () => {
    Nav.classList.toggle("active");
    let Icon = HamBurger;
    if(Nav.classList.contains("active")){
        Icon.classList.remove("bi-list");
        Icon.classList.add("bi-x-lg");   
    }else{
        Icon.classList.remove("bi-x-lg");
        Icon.classList.add("bi-list");
    }
});
// Change the Theme 
const Icon = document.querySelector("#icon");

Icon.addEventListener("click", () => {
    document.body.classList.toggle("theme");    
    if(document.body.classList.contains("theme")){
        Icon.classList.remove("bi-moon-fill");
        Icon.classList.add("bi-sun-fill");   
    }else{
        Icon.classList.remove("bi-sun-fill");
        Icon.classList.add("bi-moon-fill");
    }
});
    


// Email JS 
function sendContMail(params){
    var tempParams = {
        from_name : document.getElementById("ContName").value,
        from_email : document.getElementById("ContEmail").value,
        message : document.getElementById("ContComment").value,
    };

    emailjs.send("service_58gqnsl","template_zxidjj4",tempParams);

    window.location.href = "./contact.html";
}