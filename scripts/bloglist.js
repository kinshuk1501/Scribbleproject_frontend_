
var configuration_model=document.getElementsByClassName("conformation_area")[0];

var configuration_btn=document.querySelectorAll(".trash_button");

var configuration_no=document.getElementById("no");



var j;
for (j = 0; j < configuration_btn.length; j++) {
    let btn=configuration_btn[j];
    btn.onclick=function() {
        configuration_model.style.display="flex";
    }
}

configuration_no.onclick=function () {
    configuration_model.style.display="none";
}

/*
Kinshuk
 */