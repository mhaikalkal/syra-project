window.onresize = function () {
    widthFunction();
};

// Phone
const width = window.innerWidth;
const nav = document.getElementsByTagName("nav")[0];
const navBrand = document.getElementsByClassName("navbar-brand")[0];
const brandJumbo = document.getElementsByClassName("brand-jumbo")[0];

if (width < 768) {
    nav.classList.add("class", "bg-red");
    navBrand.classList.add("class", "norm");
    brandJumbo.classList.add("class", "norm");
}

// Laptop, PC
function widthFunction() {
    const width = window.innerWidth;
    const nav = document.getElementsByTagName("nav")[0];
    const navBrand = document.getElementsByClassName("navbar-brand")[0];
    const brandJumbo = document.getElementsByClassName("brand-jumbo")[0];

    if (width < 768) {
        nav.classList.add("class", "bg-red");
        navBrand.classList.add("class", "norm");
        brandJumbo.classList.add("class", "norm");
    } else {
        nav.classList.remove("class", "bg-red");
        navBrand.classList.remove("class", "norm");
        brandJumbo.classList.remove("class", "norm");
    }
}

window.onscroll = function () {
    scrollFunc();
};

function scrollFunc() {
    const nav = document.getElementsByTagName("nav")[0];
    const width = window.innerWidth;
    const navBrand = document.getElementsByClassName("navbar-brand")[0];

    if (document.documentElement.scrollTop > 60) {
        nav.classList.add("class", "bg-red");
        navBrand.classList.add("class", "norm");
    } else if (document.documentElement.scrollTop > 60 || width > 767) {
        nav.classList.remove("class", "bg-red");
        navBrand.classList.remove("class", "norm");
    }
}
