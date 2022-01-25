const input = document.getElementById("searchInput");
const Btn = document.getElementById("btn");
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
    var inputVal = input.value.trim();
    // " || " is " or " 
    if(inputVal == "google" || inputVal ==  "google.com"){
        window.location.href = "https://www.google.com/";
    }
    else if (inputVal == "myzoom"){
        window.location.href = "https://us02web.zoom.us/j/81656685183?pwd=MC9ETUxjeHNxK2lSWUJkTU43OFFnZz09";        
    }
    else if (inputVal != ""){
        const Linker = document.querySelector("#linker");
        Linker.innerText = "Link";
        Linker.setAttribute("href",inputVal);
    }
    else{
        msg.innerText = "Sorry not found";
    }
})