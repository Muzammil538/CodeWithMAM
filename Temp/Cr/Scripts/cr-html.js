
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

const Btn = document.getElementById("btn");
const text = document.getElementById("copyText");
Btn.addEventListener("click", ()=>{
    copyText.select();
    document.execCommand("copy");
    Btn.classList.add("show");
    window.getSelection().removeAllRanges();
    setTimeout(function(){
        Btn.classList.remove("show");
    }, 2000);
});