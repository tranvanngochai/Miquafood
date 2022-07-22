
//Effect WOW
new WOW().init();



var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


var swiper = new Swiper(".sliderProduct", {
    slidesPerView: 3,
    spaceBetween: 5,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        375: {
            slidesPerView: 2,
            spaceBetween: 5,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 5,
        },
    },
});


var swiper = new Swiper(".product-concerned", {
    slidesPerView: 4,
    spaceBetween: 5,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        375: {
            slidesPerView: 2,
            spaceBetween: 5,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 5,
        },
    },
});


var swiper = new Swiper(".home-news-slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    effect: "fade",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


var swiper = new Swiper(".image-thumb", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 1,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".slider-product-detail", {
    loop: true,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});





let tgmn = document.querySelector('.toggle-nav');
let mbmenu = document.querySelector('#mobile-menu');
let outmn = document.querySelector(".menu-overlay");
tgmn.addEventListener('click', () => {
    mbmenu.classList.add("active");
})
outmn.addEventListener('click', () => {
    mbmenu.classList.remove('active');
})
let showProduct = document.querySelector("#showProduct");
let productmn = document.querySelector("#productmn");
let outProduct = document.querySelector("#outProduct");

showProduct.addEventListener('click', () => {
    productmn.classList.add("active");
})
outProduct.addEventListener('click', () => {
    productmn.classList.remove("active");
})

jQuery(document).ready(function () {
    let showMess = document.querySelector("#showMess");
    let fchat = document.querySelector(".fchat");
    let delImg = document.querySelector(".delImage");
    let messImg = document.querySelector(".messImage");
    fchat.style.display = "none";
    showMess.addEventListener('click', () => {
        if (fchat.style.display === "none") {
            fchat.style.display = "block";
            delImg.style.display = "block";
            messImg.style.display = "none";
        } else {
            fchat.style.display = "none";
            delImg.style.display = "none";
            messImg.style.display = "block";
        }
    })
});

let iconOne = document.querySelector('.d-md-none.one');
let iconTrue = document.querySelector('.d-md-none.true');
let listmenuOne = document.querySelector('.list-menu.one');
let listmenuTrue = document.querySelector('.list-menu.true');


iconOne.addEventListener('click', () => {
    listmenuOne.classList.toggle("hide")
})

iconTrue.addEventListener('click', () => {
    listmenuTrue.classList.toggle("hide")
})






