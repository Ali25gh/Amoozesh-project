//Animation
const contact = document.getElementById("contact");
const glass = document.getElementById("glass");
const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const label_fullname = document.getElementById("label_fullname");
const label_email = document.getElementById("label_email");
const radio_text = document.getElementById("radio_text");
const radio_text_2 = document.getElementById("radio_text_2");
const radio_hand = document.getElementById("radio_hand");
const radio_hand_2 = document.getElementById("radio_hand_2");
const famale_radio = document.getElementById("female");
const background = document.getElementById("form__background");
const male = document.getElementById("male");
const error = document.getElementById("err");
let btn = document.getElementById("btn_form")
let div_disable = document.getElementById("div_diasabler")
document.getElementById("glass").addEventListener("click", function () {
    document.getElementById("form__background").style.transform = "scale(3.5)";
    document.getElementById("form__background").style.width = "55rem";
    if (window.matchMedia("(max-width: 992px)").matches) {
        document.getElementById("form__background").style.transform = "scale(3.37)"
        document.getElementById("form__background").style.width = "auto";
    }
});
function glass_animation() {
    glass.style.animation = "swing 1s ease";
    glass.style.backgroundColor = "white"
    btn.classList.add = "disable";
    setTimeout(() => {
        glass.style.animation = "none";
    }, 1000)
    if (fullname.innerHTML == "") {
        glass.style.animation = "swing .9s ease";

    }
    if (fullname.innerHTML = !"") {
        label_fullname.style.top = "-1rem";
        label_fullname.style.bottom = "4rem";
        label_fullname.style.fontSize = "1.1rem";
        label_fullname.style.padding = "0 1rem";
        label_fullname.style.backgroundColor = "white";
        label_fullname.style.webkitBorderBottomRightRadius = "20rem";
        label_fullname.style.webkitBorderBottomLeftRadius = "20rem";

    }
    if (email.innerHTML = !"") {
        label_email.style.top = "-1rem";
        label_email.style.bottom = "4rem";
        label_email.style.fontSize = "1.1rem";
        label_email.style.padding = "0 1rem";
        label_email.style.backgroundColor = "white";
        label_email.style.webkitBorderBottomRightRadius = "20rem";
        label_email.style.webkitBorderBottomLeftRadius = "20rem";
    }
    if ((email.innerHTML = !"") && (fullname.innerHTML = ! "")) {
        btn.style.opacity = "1";
        btn.style.pointerEvents = "auto";
        btn.disabled = false;
    }
}
function male_radio() {
    famale_radio.value = ""
    male.value = ""
    radio_text.style.right = "20rem";
    radio_hand.style.animation = "wave-hand 2.6s .3s";
    glass.style.animation = "none";
    setTimeout(() => {
        radio_text.style.right = "70rem";
    }, 2000)
    if (radio_text_2.style.right == "20rem") {
        radio_text.style.display = "none";
        setTimeout(() => {
            radio_text.style.opacity = "0";
            radio_text.style.animation = "fade-in .76s ease";
            radio_text.style.display = "block";
            radio_text.style.right = "20rem";
            setTimeout(() => {
                radio_text.style.opacity = "1";
            }, 500)
            return male_radio()
        }, 2000)
    }
}
function fmale_radio() {
    famale_radio.value = ""
    male.value = ""
    radio_text_2.style.right = "20rem";
    radio_hand_2.style.animation = "wave-hand 2.6s .3s";
    glass.style.animation = "none";
    setTimeout(() => {
        radio_text_2.style.right = "70rem";
    }, 2000)
    if (radio_text.style.right == "20rem") {
        radio_text_2.style.display = "none";
        setTimeout(() => {
            radio_text_2.style.opacity = "0";
            radio_text_2.style.animation = "fade-in .76s ease";
            radio_text_2.style.display = "block";
            radio_text_2.style.right = "20rem";
            setTimeout(() => {
                radio_text_2.style.opacity = "1";
            }, 500)
            return fmale_radio()
        }, 2000)
    }
}
//Etebar sangi form

document.addEventListener("DOMContentLoaded", function () {
    btn.style.opacity = ".5";
    btn.style.pointerEvents = "none";
    btn.disabled = true;
    let random = Math.floor(Math.random() * 5) + 1;
    switch (random) {
        case 1:
            background.src = "../front-end/images/background-login1.jpg"
            break;

        case 2:
            background.src = "../front-end/images/background-login2.jpg"
            break;
        case 3:
            background.src = "../front-end/images/background-login3.jpg"
            break;
        case 4:
            background.src = "../front-end/images/background-login4.jpg"
            break;
        case 5:
            background.src = "../front-end/images/background-login5.jpg"
            break;
    }
})

btn.addEventListener("click", function () {
    if ((email.value == "") || (fullname.value == "")) {
        error.style.right = "35.9rem";
        error.style.top = "27rem";
        if (window.matchMedia("(max-width: 530px)").matches) {
            error.style.right = "16.9rem";
            error.style.top = "28rem";
        }
        error.innerHTML = "فیلد ها را پر کنید";
        error.style.opacity = "1";
        setTimeout(() => {
            error.style.opacity = "0";
        }, 3000)
    }
    else if (fullname.value.length < 4) {
        error.style.right = "10.9rem";
        error.style.top = "20rem";
        if (window.matchMedia("(max-width: 530px)").matches) {
            error.style.right = "2.9rem";
            error.style.top = "20rem";
        }
        error.style.opacity = "0";
        error.innerHTML = 'کاراکتر های نام کاربری باید حداقل ۴ تا باشند <i class="fas fa-window-close" style="color: #8a010f;padding-right: 0.2rem;animation: wave-hand 3.6s .3s;"></i>';
        setTimeout(() => {
            error.style.opacity = "1";
        }, 1000)
        setTimeout(() => {
            error.style.opacity = "0";
        }, 4000)
    }
    else if (email.value.length < 8 || email.value.length > 15) {
        error.style.right = "10.9rem";
        error.style.top = "20rem";
        if (window.matchMedia("(max-width: 530px)").matches) {
            error.style.right = "2.9rem";
            error.style.top = "20rem";
        }
        error.style.opacity = "0";
        error.innerHTML = 'کاراکتر های رمز باید بین ۸ تا ۱۵ باشند <i class="fas fa-window-close" style="color: red;padding-right: 0.2rem;animation: wave-hand 3.6s .3s;"></i>';
        setTimeout(() => {
            error.style.opacity = "1";
        }, 1000)
        setTimeout(() => {
            error.style.opacity = "0";
        }, 4000)
    }
    else {
        error.style.opacity = "1";
        error.style.right = "20.3rem";
        error.style.top = "24rem";
        if (window.matchMedia("(max-width: 530px)").matches) {
            error.style.right = "15.9rem";
            error.style.top = "24rem";
        }
        error.innerHTML = "انجام شد" + '<i class="fas fa-check" style="color: green;padding-right: 0.5rem;animation: wave-hand 2.6s .3s;"></i>';
    }
    if (error.style.right == "20.3rem" || error.style.right == "15.9rem") {
        setTimeout(() => {
            btn.style.animation = "fade-out .76s ease";
            btn.style.pointerEvents = "none";
        }, 340)
        setTimeout(() => {
            btn.style.opacity = "0";
        }, 1000)
    }
})