document.addEventListener("DOMContentLoaded", function () {
    return Ajax_view();
})
function Ajax_view() {
    let view = document.getElementById("view")
    let view_icon = document.getElementById("view-icon")
    let post = document.getElementById("post")
    let post_icon = document.getElementById("post-icon")
    let buy = document.getElementById("buy")
    let buy_icon = document.getElementById("buy-icon")
    let home_span = document.getElementById("home_span")
    let request = new XMLHttpRequest();

    request.open("GET", "Ajax/view(admin).html");

    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.querySelector("#resault").innerHTML = this.responseText;
        }
    };

    request.send();
    //style
    view.classList.add("active__nav")
    view_icon.classList.add("active__icon")
    post.classList.remove("active__nav")
    post_icon.classList.remove("active__icon")
    buy.classList.remove("active__nav")
    buy_icon.classList.remove("active__icon")
    home_span.style.opacity = "0"
    setTimeout(() => {
        home_span.style.opacity = "1";
    }, 700)
}
function Ajax_post() {
    let view = document.getElementById("view")
    let view_icon = document.getElementById("view-icon")
    let post = document.getElementById("post")
    let post_icon = document.getElementById("post-icon")
    let buy = document.getElementById("buy")
    let buy_icon = document.getElementById("buy-icon")
    let home_span = document.getElementById("home_span")
    let request = new XMLHttpRequest();

    request.open("GET", "Ajax/post(admin).html");

    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.querySelector("#resault").innerHTML = this.responseText;
        }
    };

    request.send();
    //style
    view.classList.remove("active__nav")
    view_icon.classList.remove("active__icon")
    post.classList.add("active__nav")
    post_icon.classList.add("active__icon")
    buy.classList.remove("active__nav")
    buy_icon.classList.remove("active__icon")
    home_span.style.opacity = "0"
    setTimeout(() => {
        home_span.style.opacity = "1";
    }, 700)
}
function Ajax_buy() {
    let view = document.getElementById("view")
    let view_icon = document.getElementById("view-icon")
    let post = document.getElementById("post")
    let post_icon = document.getElementById("post-icon")
    let buy = document.getElementById("buy")
    let buy_icon = document.getElementById("buy-icon")
    let home_span = document.getElementById("home_span")
    let request = new XMLHttpRequest();

    request.open("GET", "Ajax/buy(admin).html");

    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.querySelector("#resault").innerHTML = this.responseText;
        }
    };

    request.send();
    //style
    view.classList.remove("active__nav")
    view_icon.classList.remove("active__icon")
    post.classList.remove("active__nav")
    post_icon.classList.remove("active__icon")
    buy.classList.add("active__nav")
    buy_icon.classList.add("active__icon")
    home_span.style.opacity = "0"
    setTimeout(() => {
        home_span.style.opacity = "1";
    }, 700)
}