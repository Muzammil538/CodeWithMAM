// from registration

const EmaiLR = document.getElementById("EmailR");
const FirsTName = document.getElementById("FName");
const LasTName = document.getElementById("LName");
const MobilE = document.getElementById("Mobile");
const Postcode = document.getElementById("PostCode");
const PasswD = document.getElementById("Passwd");
const BTN = document.querySelector(".btn");

// button from register
BTN.addEventListener("click",StoreLocal);

// storing the registration values in local storage
function StoreLocal(){
    const mailtxt1 = EmaiLR.value;
    const FNAME = FirsTName.value;
    const LNAME = LasTName.value;
    const tele = MobilE.value;
    const zip = Postcode.value;
    const secret = PasswD.value;
    // console.log(mailtxt,FNAME,LNAME,tele,zip,secret);
    // storing the values in local storage
    localStorage.setItem("Email", mailtxt1);
    localStorage.setItem("First Name", FNAME);
    localStorage.setItem("Last Name", LNAME);
    localStorage.setItem( "Phone", tele);
    localStorage.setItem("zip", zip);
    localStorage.setItem("Secret1", secret);
    // taking their values
    const Mail1 = localStorage.getItem("Email1");
    const FNa = localStorage.getItem("First Name");
    const LNa = localStorage.getItem("Last Name");
    const Tele = localStorage.getItem("Phone");
    const Zip = localStorage.getItem("zip");
    const Secret1 = localStorage.getItem("Secret1");
    // console.log(Mail);
    // storing the Login creds
}



