document.getElementById("home").style.display = "block";
document.getElementById("servico").style.display = "none";
document.getElementById("pacote").style.display = "none";;



function show(a) {

    let display = document.getElementById(a).style.display 

    if (display == "none"){
        document.getElementById(a).style.display = "block";
    } else if ( display == "block"){
        document.getElementById(a).style.display = "none";
    }

}


function hiden(a) {
    document.getElementById(a).style.display = "none";
}


function show2(a){
    let b = document.getElementById(a).id

    if (b == "install_remove"){
        document.getElementById("home").style.display = "none";
        document.getElementById("servico").style.display = "none";

        document.getElementById("pacote").style.display = "block";
        document.getElementById(a).style.display = "block";
    }
}