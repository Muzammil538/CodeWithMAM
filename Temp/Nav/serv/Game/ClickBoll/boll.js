const Msg = document.getElementById("msg");
const Boll = document.getElementById("boll");
const Eye = document.getElementById("eye");
const errMsg = document.getElementById("errmsg")


const  startMin = 5;
let time = startMin * 60;

const Counter = document.getElementById("counter");
const countBtn = document.getElementById("countStart");
var userName = prompt("Please Enter Your Name : ");

countBtn.addEventListener("click", ()=>{
    var ct = setInterval(countDown, 50);
    countDown();
    Boll.addEventListener("mouseover", ()=>{
        Boll.classList.toggle("move");
    });
    Eye.addEventListener("click", ()=>{
        Boll.classList.toggle("down");
    });
    Boll.addEventListener("click",()=>{
        Msg.innerText = `${userName} have won please send us the screenshot to claim prize`
        Msg.classList.add("show");
        Counter.classList.add("hide");
        errMsg.classList.add("hide");
        
    });
    
});


function countDown (){
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    Counter.innerText = `${minutes} : ${seconds}`;
    if(time > 0){
        time--;
        // console.log("hello")
    }
    else{
        time*0;
        Counter.innerText = "0";
        if(errMsg.className === "hide"){
            errMsg.classList.add("hide");
        }
        else{
            errMsg.innerText = `${userName} have Lost ! Better Luck next time`; 
            errMsg.classList.add("show");
            Msg.classList.remove("show");
            Boll.classList.add("hidden");
        }
    }
    
}
