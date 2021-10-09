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
// import{ init } from 'emailjs-com';
// init("user_prcJgdlptbxwzDd6FwoJn");


const btnSubmitEmail = document.getElementById("submitEmail");

btnSubmitEmail.addEventListener("click", sendMail)
// Email JS 
function sendMail(params){
    var tempParams = {
        from_name : document.getElementById("fromname").value,
        from_email : document.getElementById("fromEmail").value,
        message : document.getElementById("course_name").value,
    };

    emailjs.send("service_o2a2gvj","template_7xqc2aq",tempParams);
    //alert("Succesfully booked");
    //swal("Good job!", "You Have Bought the Course", "success");
    swal("Good job!", "You Have Bought the Course", "success")
    .then((value) => {
        window.location.href = "/";
    });
    console.log("Hello");
    //window.location.href = "/";
}