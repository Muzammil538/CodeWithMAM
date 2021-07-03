const VisitEl = document.getElementById("visit");

VisitCountor();

function VisitCountor () {
    fetch('https://api.countapi.xyz/update/carryminati/youtube/?amount=1').then(res => res.json()).then(res => {
        VisitEl.innerHTML = res.value;
    });

}