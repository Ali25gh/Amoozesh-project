//search
let search = document.getElementById("search")
let search_nav = document.getElementById("search1")
let intro_text = document.getElementById("header__intro")
let search_input = document.getElementById("search__input")
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
document.getElementById("login").addEventListener("mouseover",function(){
    document.getElementById("icon_navbar").style.transform="translate(33px, 7px)";
    });
    document.getElementById("login").addEventListener("mouseout",function(){
        document.getElementById("icon_navbar").style.transform="translate(0, 0)";
        });