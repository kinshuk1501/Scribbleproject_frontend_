
var edit=document.getElementById("edit");
var save=document.getElementById("save");

var post_title=document.getElementById("post_title_main");
var post_title_edit=document.getElementById("post_title_edit");

var post_body=document.getElementById("post_content_body");
var post_body_edit=document.getElementById("post_content_body_edit");

var like_btn=document.getElementById("like");
var like_counter=document.getElementById("like_counter");

var comment_content_body=document.getElementById("comment_add_content");
var comment_area=document.getElementById("all_comment");

function edit_post() {
    post_title.style.display="none";
    post_title_edit.style.display="block";

    post_body.style.display="none";
    post_body_edit.style.display="block";

    edit.style.display="none";
    save.style.display="block";

    var out=post_title.textContent.trim();
    post_title_edit.innerHTML=out;
    var val=post_body.textContent.trim();
    post_body_edit.innerHTML=val;


    post_body_edit.style.height = "1px";
    post_body_edit.style.height = (25+post_body_edit.scrollHeight)+"px";

}

function save_post() {
    post_title.style.display="block";
    post_title_edit.style.display="none";

    post_body.style.display="block";
    post_body_edit.style.display="none";

    edit.style.display="block";
    save.style.display="none";

    post_title.innerHTML=post_title_edit.value;
    post_body.innerHTML=post_body_edit.value;
}

var count=0;

function like_post() {

    like_btn.innerHTML="<img src=\'https://img.icons8.com/fluent-systems-filled/20/ffffff/facebook-like.png\'/>Liked!";
    count++;
    if(count==1){
        like_counter.innerHTML="1 person has liked it";
    }
    else{
        like_counter.innerHTML=count+" people have liked it";
    }

}

function post_comment(){
    var new_para=document.createElement("P");
    var text=document.createTextNode(comment_content_body.value);
    new_para.appendChild(text);
    new_para.setAttribute("class","comment_content");
    comment_area.insertBefore(new_para,comment_area.childNodes[0]);
}

/*
kinshuk
 */