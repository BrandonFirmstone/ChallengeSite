let menuButton = document.getElementById("menu-toggle");
menuButton.addEventListener('click', openNavigationMenu);

let closeMenuButton = document.getElementById("menu-close");
closeMenuButton.addEventListener('click', closeNavigationMenu);

function openNavigationMenu(){
    document.getElementById("responsive-menu").style.height = "100%";
    console.log("openNavigationMenu ran");
}

function closeNavigationMenu(){
    document.getElementById("responsive-menu").style.height = "0";
    console.log("closeNavigationMenu ran");
}

if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}

let slides = document.querySelectorAll('#slides .slide');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide,2000);

function nextSlide(){
	slides[currentSlide].className = 'slide';
	currentSlide = (currentSlide+1)%slides.length;
	slides[currentSlide].className = 'slide showing';
}

let slidesA = document.querySelectorAll('#slides-a .slide-a');
let currentSlideA = 0;
let slideIntervalA = setInterval(nextSlideAnglesey,3000);

function nextSlideAnglesey(){
	slidesA[currentSlideA].className = 'slide-a';
	currentSlideA = (currentSlideA+1)%slidesA.length;
	slidesA[currentSlideA].className = 'slide-a showing-a';
}

let slidesB = document.querySelectorAll('#slides-b .slide-b');
let currentSlideB = 0;
let slideIntervalB = setInterval(nextSlideBetws,3000);

function nextSlideBetws(){
	slidesB[currentSlideB].className = 'slide-b';
	currentSlideB = (currentSlideB+1)%slidesB.length;
	slidesB[currentSlideB].className = 'slide-b showing-b';
}