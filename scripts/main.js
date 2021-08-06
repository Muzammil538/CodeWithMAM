const Nav = document.querySelector(".nav_links");
const HamBurger = document.querySelector(".hamburger");
HamBurger.addEventListener("click" , () => {
    Nav.classList.toggle("active");
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
})