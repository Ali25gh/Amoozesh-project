let search = document.getElementById("search")
let search_nav = document.getElementById("search1")
let intro_text = document.getElementById("header__intro")
let search_input = document.getElementById("search__input")
let login = document.getElementById("login")
let rigester = document.getElementById("rigester")
let login_after = document.getElementById("login_after")
let login_before = document.getElementById("login_before")
//search
function search_open() {
    search.style.width = "30rem";
    search.style.opacity = "1";
}
function search_open2() {
    search_nav.style.width = "30rem";
    search_nav.style.opacity = "1";
    intro_text.style.opacity = "0";
}
//login
document.getElementById("login").addEventListener("mouseover", function () {
    document.getElementById("icon_navbar").style.transform = "translate(33px, 7px)";
    if (window.matchMedia("(max-width: 768px)").matches) {
        document.getElementById("icon_navbar").style.transform = "translate(0, 0)";
    }
});
document.getElementById("login").addEventListener("mouseout", function () {
    document.getElementById("icon_navbar").style.transform = "translate(0, 0)";
});
function login_animation() {
    if (window.matchMedia("(max-width: 768px)").matches) {
        login.style.display = "block";
        rigester.style.display = "block";

        setTimeout(() => {
            login.style.transform = "translate(-10px,25px)";
            rigester.style.width = "6rem";
            rigester.style.transform = "translate(10px, 26px)";
            login_after.style.display = "block";
            login_before.style.display = "block";
        }, 10)
        setTimeout(() => {
            login.style.display = "none";
            rigester.style.display = "none";
            login_after.style.display = "none";
            login_before.style.display = "none";
        }, 6000)
    }

}

