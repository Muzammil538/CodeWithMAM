var state = false;
const Show = document.getElementById("show");
const Passwd = document.getElementById("Passwd");
const ConfPasswd = document.getElementById("confPasswd");
const Btn = document.querySelector(".btn");

const EmailR = document.getElementById("EmailR");
const FirstName = document.getElementById("FName");
const LastName = document.getElementById("LName");
const Mobile = document.getElementById("Mobile");
const PostCode = document.getElementById("PostCode");


Show.addEventListener("click", PassShow);
Btn.addEventListener("click",CheckPasswd);


function PassShow(){
    if(state){
        Passwd.setAttribute("type","password");
        ConfPasswd.setAttribute("type","password");
        state = false;
    }
    else{
        Passwd.setAttribute("type","text");
        ConfPasswd.setAttribute("type","text");
        state = true;
    }
}

const AlertTx = document.getElementById("alertText");


function CheckPasswd() {
    let PasswdTx = Passwd.value;
    let ConfPasswdtx = ConfPasswd.value;
    if(PasswdTx == ConfPasswdtx && PasswdTx != ""){
        // console.log(PasswdTx);
        AlertTx.innerHTML = "Password Matched";
        AlertTx.style.color = '#11ed69';
        // Passwd.style.border = '1px solid #11ed69';
        window.location.href = "../templetes/login.html";
    }
    else{
        AlertTx.innerHTML = "Password Not Matched";
        AlertTx.style.color = '#db2e2e';
        // Passwd.style.border = '1px solid #db2e2e';
    }
}

