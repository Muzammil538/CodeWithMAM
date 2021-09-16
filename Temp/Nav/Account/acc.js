const passChangeDiv = document.getElementById("passChange");
const courEnDiv = document.getElementById("courEn");
const courCompDiv = document.getElementById("courComp");
const PersonalDiv = document.getElementById("personal");

// these are the buttons
const passBtn = document.getElementById("passBtn");
const courEnBtn = document.getElementById("courEnBtn");
const courCompBtn = document.getElementById("courCompBtn");
const personalBtn = document.getElementById("personalBtn");

passBtn.addEventListener("click", ()=>{
    courCompDiv.classList.add("hide");
    courEnDiv.classList.add("hide");
    PersonalDiv.classList.add("hide");
    // removing
    courCompDiv.classList.remove("show");
    courEnDiv.classList.remove("show");
    PersonalDiv.classList.remove("show");
    // showing
    passChangeDiv.classList.add("show");

});
courEnBtn.addEventListener("click", ()=>{
    courCompDiv.classList.add("hide");
    passChangeDiv.classList.add("hide");
    PersonalDiv.classList.add("hide");
    // removing
    courCompDiv.classList.remove("show");
    passChangeDiv.classList.remove("show");
    PersonalDiv.classList.remove("show");
    // showing
    courEnDiv.classList.add("show");

});
courCompBtn.addEventListener("click", ()=>{
    passChangeDiv.classList.add("hide");
    courEnDiv.classList.add("hide");
    PersonalDiv.classList.add("hide");
    // removing
    passChangeDiv.classList.remove("show");
    courEnDiv.classList.remove("show");
    PersonalDiv.classList.remove("show");
    // showing
    courCompDiv.classList.add("show");

});
personalBtn.addEventListener("click", ()=>{
    courCompDiv.classList.add("hide");
    courEnDiv.classList.add("hide");
    passChangeDiv.classList.add("hide");
    // removing
    courCompDiv.classList.remove("show");
    courEnDiv.classList.remove("show");
    passChangeDiv.classList.remove("show");
    // showing
    PersonalDiv.classList.add("show");

});