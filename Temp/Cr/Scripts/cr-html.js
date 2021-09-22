
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
const Code = document.getElementById("code");
Btn.addEventListener("click", ()=>{
    copyText.select();
    document.execCommand("copy");
    Code.classList.add("pop");
    window.getSelection().removeAllRanges();
    setTimeout(function(){
        Code.classList.remove("pop");
    }, 2500);
});