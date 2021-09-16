const input = document.getElementById("searchInput");
const Btn = document.querySelector("button");
const msg  = document.getElementById("result");

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

Btn.addEventListener("click", ()=>{
    var inputVal = input.ariaValueMax.trim();
    if(inputVal != ""){
        window.location.href = inputVal;
    }
    else{
        msg.innerText = "Sorry not found";
    }
})