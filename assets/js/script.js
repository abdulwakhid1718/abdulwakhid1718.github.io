/*====================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

/*====================== MENU SHOW ====================*/
if (navToggle) {
    navToggle.addEventListener('click', function () {
        navMenu.classList.add('show-menu')
    });
}

/*====================== MENU HIDDEN
====================*/
if (navClose) {
    navClose.addEventListener('click', function () {
        navMenu.classList.remove('show-menu')
    });
}

/*====================== REMOVE MENU MOBILE
====================*/
const navLink = document.querySelectorAll('.nav-link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*====================== OPEN SKILL ====================*/
const skillContent = document.getElementsByClassName('skill-content'),
    skillHeader = document.querySelectorAll('.skill-header');

function toggleSkills() {
    let itemClass = this.parentNode.className;

    for (i = 0; i < skillContent.length; i++) {
        skillContent[i].className = 'skill_content skill-close';
    }

    if (itemClass === 'skill-content skill-close') {
        this.parentNode.className = 'skill-content skill-open';
    }
}

skillHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
});


/*====================== SWIPER PORTOFOLIO ====================*/
let swiper = new Swiper('.portofolio-container', {
    // Optional parameters
    direction: 'horizontal',
    cssMode: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

/*====================== CHANGE COLOR BG MENU ====================*/
function ubahWarnaHeader() {
    const nav = document.getElementById('header');
    if (this.scrollY >= 80) {
        nav.classList.add('ubah-warna-header');
    } else {
        nav.classList.remove('ubah-warna-header');
    }
}

window.addEventListener('scroll', ubahWarnaHeader);

/*====================== SHOW SCROLL UP ====================*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    if (this.scrollY >= 500) {
        scrollUp.classList.add('show-scroll-up');
    } else {
        scrollUp.classList.remove('show-scroll-up');
    }
}
window.addEventListener('scroll', scrollUp);

/*====================== LIGHT/DARK THEME ====================*/
const themeBtn = document.getElementById('dark-mode')
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeBtn.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeBtn.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme);
}

themeBtn.addEventListener('click', function () {
    document.body.classList.toggle(darkTheme);
    themeBtn.classList.toggle(iconTheme);
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
})


const yellow = document.getElementById('yellow'),
    biru = document.getElementById('biru'),
    merah = document.getElementById('merah'),
    ungu = document.getElementById('ungu');
const html = document.querySelector('html');

yellow.addEventListener('click', function () {
    html.dataset.warna = 'yellow';
});
biru.addEventListener('click', function () {
    html.dataset.warna = 'biru';
});
merah.addEventListener('click', function () {
    html.dataset.warna = 'merah';
});
ungu.addEventListener('click', function () {
    html.dataset.warna = 'ungu';
});

/*====================== GSAP ANIMATION ====================*/
function myFunction(x) {
    if (x.matches) {
        // mobile
        gsap.from('.home-sosial', {
            duration: 1.5,
            x: -100,
            opacity: 0.5
        })
    } else {
        // desktop
        gsap.from('.header', {
            duration: 1.5,
            y: -100,
            opacity: 0.5,
            ease: 'bounce'
        });

        gsap.from('.home-sosial', {
            duration: 1.5,
            y: -500,
            opacity: 0.5
        });

        gsap.from('.home-scroll', {
            duration: 1.5,
            y: 200,
            opacity: 0.5
        });
    }
}

var x = window.matchMedia("(max-width: 768px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes

gsap.from('.home-blob-img', {
    duration: 1.2,
    delay: 1,
    y: 200,
    opacity: 0.5
});

gsap.to(".home-title", {
    duration: 2,
    text: "Hai, Namaku Wakhid",
    ease: "none",
    delay: 1
});

gsap.from(".home-subtitle", {
    duration: 1,
    opacity: 0,
    delay: 1.5
});

gsap.from('.home-description', {
    duration: 1,
    opacity: 0,
    delay: 1.8
});


/*====================== AOS ANIMATION ====================*/
AOS.init();