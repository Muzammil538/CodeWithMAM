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

// Email JS 
function sendContMail(params){
    var tempParams = {
        from_name : document.getElementById("ContName").value,
        from_email : document.getElementById("ContEmail").value,
        message : document.getElementById("ContComment").value,
    };

    emailjs.send("service_58gqnsl","template_zxidjj4",tempParams);

    window.location.href = "./contact.html";
    alert ("Sent the Details.")
}