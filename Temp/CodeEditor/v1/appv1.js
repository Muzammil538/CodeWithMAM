// htmlCode.addEventListener("keyup", run);

function run(){
    let htmlCode = document.querySelector(".editor #html-code").value;
    let cssCode = "<style>"+document.querySelector(".editor #css-code").value+"</style>";
    let jslCode = document.querySelector(".editor #js-code").value;
    let output = document.querySelector("#output");

    output.contentDocument.body.innerHTML = htmlCode + cssCode;

    output.contentWindow.eval(jslCode);
}

document.querySelector(".editor #html-code").addEventListener("keyup",run)
document.querySelector(".editor #css-code").addEventListener("keyup",run)
document.querySelector(".editor #js-code").addEventListener("keyup",run)

