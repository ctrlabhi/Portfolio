$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Software Devloper", "Graphic Designer", "Content Writer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Software Devloper", "Graphic Designer", "Content Writer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});
// Password Protected CV Download

const downloadCV = document.getElementById("downloadCV");

downloadCV.addEventListener("click", function () {
    const passwordInput = document.createElement("input");

    passwordInput.type = "password";
    passwordInput.id = "cvPasswordInput";
    passwordInput.placeholder = "Enter Password";
    passwordInput.setAttribute("aria-label", "Enter Password");

    passwordInput.style.cssText = `
        display: inline-block;
        background: white;
        color: #222;
        font-family: inherit;
        font-size: 20px;
        font-weight: 500;
        padding: 10px 30px;
        margin-top: 20px;
        border: 2px solid crimson;
        border-radius: 6px;
        box-sizing: border-box;
        width: 224px;
        height: 56px;
        outline: none;
    `;

    downloadCV.replaceWith(passwordInput);
    passwordInput.focus();

    passwordInput.addEventListener("keydown", function (event) {
        if (event.key !== "Enter") return;

        if (passwordInput.value === "February") {
            window.open(
                "https://drive.google.com/file/d/1tjMJfVXhOtt1KprI2sQ8wVfKUMa3olRB/view?usp=drivesdk"
            );
        } else {
            passwordInput.value = "";
            passwordInput.placeholder = "Incorrect Password";
            passwordInput.focus();
        }
    });
});
;
    }
});
