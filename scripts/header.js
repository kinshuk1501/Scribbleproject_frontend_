

var modal_signup = document.getElementsByClassName("model_signup_")[0];


var user_signup_btn = document.getElementsByClassName("user_buttons")[0];

var close_signup_btn = document.getElementsByClassName("signup_cross")[0];

user_signup_btn.onclick = function() {
    modal_signup.style.display = "flex";

}

close_signup_btn.onclick = function() {
    modal_signup.style.display = "none";
}



var model_signin = document.getElementsByClassName("modal_signin")[0];

var user_signin_btn = document.getElementsByClassName("user_buttons")[1];

var close_signin = document.getElementsByClassName("signin_cross")[0];

user_signin_btn.onclick = function() {
    model_signin.style.display = "flex";

}

close_signin.onclick = function() {
    model_signin.style.display = "none";
}


var signup_in_signin = document.getElementsByClassName("member_check")[0];

signup_in_signin.onclick = function() {
    model_signin.style.display = "none";
    modal_signup.style.display = "flex";
}





window.onclick = function(event) {
    if (event.target === modal_signup) {
        modal_signup.style.display = "none";
    }
    if (event.target === model_signin) {
        model_signin.style.display = "none";
    }
}

/*
kinshuk
 */