//Animation
const contact = document.getElementById("contact");
const glass = document.getElementById("glass");
const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const label_fullname = document.getElementById("label_fullname");
const label_email = document.getElementById("label_email");
const label_password = document.getElementById("label_password");
const password = document.getElementById("password");
const radio_text = document.getElementById("radio_text");
const radio_text_2 = document.getElementById("radio_text_2");
const radio_hand = document.getElementById("radio_hand");
const radio_hand_2 = document.getElementById("radio_hand_2");
const famale_radio = document.getElementById("female");
const background = document.getElementById("form__background");
const male = document.getElementById("male");
const error = document.getElementById("err");
const btn = document.getElementById("btn_form")
document.getElementById("glass").addEventListener("click", function () {
    document.getElementById("form__background").style.transform = "scale(3.5)";
    document.getElementById("form__background").style.width = "55rem";
    if (window.matchMedia("(max-width: 992px)").matches) {
        document.getElementById("form__background").style.transform = "scale(3.37)"
        document.getElementById("form__background").style.width = "auto";
    }
});
function animation() {
    glass.style.animation = "swing 1s ease";
    glass.style.backgroundColor = "white"
    btn.classList.add = "disable";
    setTimeout(() => {
        glass.style.animation = "none";
    }, 1000)
    if (fullname.innerHTML == "") {
        glass.style.animation = "swing .9s ease";

    }
}
function glass_animation() {
    glass.style.backgroundColor = "white"
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
    if (password.innerHTML = !"") {
        label_password.style.top = "-1rem";
        label_password.style.bottom = "4rem";
        label_password.style.fontSize = "1.1rem";
        label_password.style.padding = "0 1rem";
        label_password.style.backgroundColor = "white";
        label_password.style.webkitBorderBottomRightRadius = "20rem";
        label_password.style.webkitBorderBottomLeftRadius = "20rem";
    }
    if ((email.innerHTML = !"") && (fullname.innerHTML = ! "")) {
        btn.style.opacity = "1";
        btn.style.pointerEvents = "auto";
        btn.disabled = false;
    }
}
function male_radio() {
    error.style.opacity = "0";
    famale_radio.value = ""
    male.value = ""
    radio_text.style.right = "18rem";
    radio_hand.style.animation = "wave-hand 2.6s .3s";
    glass.style.animation = "none";
    setTimeout(() => {
        radio_text.style.right = "70rem";
    }, 2000)
    if (radio_text_2.style.right == "18rem") {
        radio_text.style.display = "none";
        setTimeout(() => {
            radio_text.style.opacity = "0";
            radio_text.style.animation = "fade-in .76s ease";
            radio_text.style.display = "block";
            radio_text.style.right = "18rem";
            setTimeout(() => {
                radio_text.style.opacity = "1";
            }, 500)
            return male_radio()
        }, 2000)
    }
}
function fmale_radio() {
    error.style.opacity = "0";
    famale_radio.value = ""
    male.value = ""
    radio_text_2.style.right = "18rem";
    radio_hand_2.style.animation = "wave-hand 2.6s .3s";
    glass.style.animation = "none";
    setTimeout(() => {
        radio_text_2.style.right = "70rem";
    }, 2000)
    if (radio_text.style.right == "18rem") {
        radio_text_2.style.display = "none";
        setTimeout(() => {
            radio_text_2.style.opacity = "0";
            radio_text_2.style.animation = "fade-in .76s ease";
            radio_text_2.style.display = "block";
            radio_text_2.style.right = "18rem";
            setTimeout(() => {
                radio_text_2.style.opacity = "1";
            }, 500)
            return fmale_radio()
        }, 2000)
    }
}
let see_span = document.getElementById("see");
function see() {
    
    setTimeout(() => {
        see_span.style.transform="rotate(360deg)"
    }, 100)
    setTimeout(() => {
        password.type="text"; 
        see_span.innerHTML="1"
        
    }, 1000)
    setTimeout(() => {
        see_span.innerHTML="2"
        
    }, 2000)
    setTimeout(() => {
        see_span.innerHTML="3"
        
    }, 3000)
    setTimeout(() => {
        see_span.innerHTML="4"
        
    }, 4000)
    setTimeout(() => {
        see_span.innerHTML="5"
        see_span.style.transform="rotate(0deg)"
    }, 5000)
    setTimeout(() => {
        
        password.type="password"; 
        see_span.innerHTML='<i class="fas fa-eye"></i>'
    }, 6000)
}
//Etebar sangi form

document.addEventListener("DOMContentLoaded", function () {
    btn.style.opacity = ".5";
    btn.style.pointerEvents = "none";
    btn.disabled = true;
    let random = Math.floor(Math.random() * 5) + 1;
    switch (random) {
        case 1:
            background.src = "../front-end/images/background-login6.jpg"
            break;

        case 2:
            background.src = "../front-end/images/background-login3.jpg"
            break;
        case 3:
            background.src = "../front-end/images/background-login8.jpg"
            break;
        case 4:
            background.src = "../front-end/images/background-login9.jpg"
            break;
        case 5:
            background.src = "../front-end/images/background-login10.jpg"
            break;
    }
})
btn.addEventListener("click", function () {
    if ((email.value == "") || (fullname.value == "") || (password.value == "")) {

        error.style.right = "17.9rem";
        error.style.top = "27.9rem";
        error.innerHTML = "فیلد ها را پر کنید";

        setTimeout(() => {
            error.style.opacity = "0";
        }, 4000)
        setTimeout(() => {
            error.style.opacity = "1";
        }, 1000)
        if (window.matchMedia("(max-width: 500px)").matches) {
            alert("فیلد ها را پر کنید");
            error.style.display = "none";
            return animation();
        }
        return animation()
        
    }

    else if (fullname.value.length < 4) {

        error.style.right = "7.9rem";
        error.style.top = "28rem";

        error.innerHTML = 'کاراکتر های نام کاربری باید حداقل ۴ تا باشند <i class="fas fa-window-close" style="color: #8a010f;padding-right: 0.2rem;animation: wave-hand 3.6s .3s;"></i>';
        setTimeout(() => {
            error.style.opacity = "1";
        }, 1000)
        setTimeout(() => {
            error.style.opacity = "0";
        }, 4000)
        if (window.matchMedia("(max-width: 576px)").matches) {
            alert("کاراکتر های نام کاربری باید حداقل ۴ تا باشند");
            error.style.display = "none";
            return animation();
        }
        return animation()
    }
    else if (password.value.length < 8 || password.value.length > 15) {
        error.style.right = "9.9rem";
        error.style.top = "28rem";
        if (window.matchMedia("(max-width: 530px)").matches) {
            error.style.right = "2.9rem";
            error.style.top = "20rem";
        }
        error.innerHTML = 'کاراکتر های رمز باید بین ۸ تا ۱۵ باشند <i class="fas fa-window-close" style="color: red;padding-right: 0.2rem;animation: wave-hand 3.6s .3s;"></i>';
        setTimeout(() => {
            error.style.opacity = "1";
        }, 1000)
        setTimeout(() => {
            error.style.opacity = "0";
        }, 4000)
        if (window.matchMedia("(max-width: 576px)").matches) {
            alert("کاراکتر های رمز باید بین ۸ تا ۱۵ باشند");
            error.style.display = "none";
            return animation();
        }
        return animation()
    }
    else if (email.value == "@gmail.com") {
        error.style.right = "17.9rem";
        error.style.top = "27.9rem";
        error.innerHTML = "ایمیل نا معتبر است😕";

        setTimeout(() => {
            error.style.opacity = "0";
        }, 4000)
        setTimeout(() => {
            error.style.opacity = "1";
        }, 1000)
        if (window.matchMedia("(max-width: 576px)").matches) {
            alert("ایمیل نا معتبر است😕");
            error.style.display = "none";
            return animation();
        }
        return animation()
    }

    else if (famale_radio.value == "not_selected" && (male.value == "not_selected")) {
        error.style.right = "13.9rem";
        error.style.top = "27.9rem";
        error.style.opacity = "1";
        setTimeout(() => {
            error.innerHTML = "جنسیت خود را انتخاب کنید" + " " + "🙍‍♀️🙎‍♂️";
            error.style.top = "27.9rem";
            error.style.opacity = "1";
        }, 700)
        setTimeout(() => {
            error.style.opacity = "0";
        }, 3700)
        if (window.matchMedia("(max-width: 576px)").matches) {
            alert("جنسیت خود را انتخاب کنید🙍‍♀️🙎‍♂️");
            error.style.display = "none";
            return animation();
        }
        return animation()
    }
    else {
        error.style.opacity = "1";
        error.style.top = "30.9rem";
        error.style.right = "19.8rem";
        error.innerHTML = "انجام شد" + '<i class="fas fa-check" style="color: green;padding-right: 0.5rem;animation: wave-hand 2.6s .3s;"></i>';
        if (window.matchMedia("(max-width: 576px)").matches) {
            error.style.display = " block";   
        }
    }
    if (error.style.right == "19.8rem") {
        setTimeout(() => {
            btn.style.animation = "fade-out .76s ease";
            btn.style.pointerEvents = "none";
        }, 300)
        setTimeout(() => {
            btn.style.opacity = "0";
        }, 760)
    }
})