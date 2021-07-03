const AlertTxt = document.getElementById("alertText");
const BtN = document.querySelector(".btn2");
const SHow = document.getElementById("show");
// const Emailr = document.getElementById("EmailR");
// const Emaill = document.getElementById("EmailL");
// const Passwdr = document.getElementById("Passwd");
// const Passwdl = document.getElementById("PasswdL");
// BtN.addEventListener("click",CheckCreds);
SHow.addEventListener("click", PassShow);

var state = false;
function PassShow(){
    if(state){
        Passwdl.setAttribute("type","password");
        // ConfPasswd.setAttribute("type","password");
        state = false;
    }
    else{
        Passwdl.setAttribute("type","text");
        // ConfPasswd.setAttribute("type","text");
        state = true;
    }
}
// function CheckCreds() {
//     let PasswdRTxt = Passwdr.value;
//     let PasswdLTxt = Passwdl.value;
//     let EmailLTxt = Emaill.value;
//     let EmailRTxt = Emailr.value;
//     if(PasswdLTxt == PasswdRTxt && EmailLTxt == EmailRTxt){
//         AlertTxt.innerHTML = "Credentials Matched";
//     }
//     else{
//         AlertTxt.innerHTML = "Credentials Not Matched";
//         AlertTxt.style.color = '#db2e2e';
//         // Passwd.style.border = '1px solid #db2e2e';
//     }
// }
// from Login
const EmailL = document.getElementById("EmailL");
const PasswdL = document.getElementById("PasswdL");
const Btn2 = document.getElementById("btn2");

// button from login
Btn2.addEventListener("click",CheckCreds);


function CheckCreds(){
    const mailtxt2 = EmailL.value;
    const secret2 = PasswdL.value;
    // storing them in localstorage
    localStorage.setItem("Email2", mailtxt2);
    localStorage.setItem("Secret2", secret2);
    // taking the values
    const Mail2 = localStorage.getItem("Email2");
    const Secret2 = localStorage.getItem("Secret2");
    if (Mail1 == Mail2 && Secret1 == Secret2){
        location.href = "./home.html";
    }
    else{
        location.href = "/";
    }
}