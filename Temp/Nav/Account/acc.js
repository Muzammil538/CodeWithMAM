// the edit button 
const EditBtn = document.getElementById("edit");
const toBlurDiv = document.getElementById("toblur");
const inputAlert = document.getElementById("inputAlert");
const inputAlertBtn = document.getElementById("inputAlertBtn");
const NameBox = document.getElementById("name");
const BioBox = document.getElementById("bio");
const rootTextBio = document.getElementById("rootTextBio");
EditBtn.addEventListener("click", ()=>{
    toBlurDiv.classList.add("blur");
    inputAlert.classList.remove("hide");
    inputAlertBtn.addEventListener("click", ()=>{
        // e.preventDefault();
        const AccName = document.getElementById("AccName");
        const AccBio = document.getElementById("AccBio");
        var AccNameVal = AccName.value;
        var AccBioVal = AccBio.value;
        //console.log(AccNameVal);
        //console.log(AccBioVal);
        localStorage.setItem("Name" , AccNameVal);
        localStorage.setItem("Bio" , AccBioVal);
        
        // console.log(localStorage);
    });
});

NameBox.innerText = localStorage.getItem("Name");
BioBox.innerText = localStorage.getItem("Bio");
rootTextBio.innerText = localStorage.getItem("Bio");
const closeBtn = document.getElementById("closeBtn");
closeBtn.addEventListener("click", ()=>{
    toBlurDiv.classList.remove("blur");
    inputAlert.classList.add("hide");
});
// these are those div's 
const passChangeDiv = document.getElementById("passChange");
const courEnDiv = document.getElementById("courEn");
const courCompDiv = document.getElementById("courComp");
const PersonalDiv = document.getElementById("personal");
const RootDiv = document.getElementById("root");

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