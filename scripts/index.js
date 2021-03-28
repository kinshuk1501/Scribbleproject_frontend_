



var model_create_post = document.getElementsByClassName("post_create_model")[0];

var post_button = document.getElementById("create_post_btn");

var post_close = document.getElementsByClassName("creat_post_cross")[0];

post_button.onclick = function() {

    model_create_post.style.display = "flex";

}

post_close.onclick = function() {
    model_create_post.style.display = "none";
}


window.onclick = function(event) {
    if (event.target === model_create_post) {
        model_create_post.style.display = "none";
    }
}

/*
kinshuk
 */