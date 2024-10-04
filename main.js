//NAVIGATION BAR

const sidebar = document.querySelector('.sidebar');
const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');

menuIcon.addEventListener('click', showSidebar);
closeIcon.addEventListener('click', hideSidebar);

function showSidebar() {
    sidebar.style.display = 'flex';
}

function hideSidebar() {
    sidebar.style.display = 'none';
}

//CAROUSEL

const carouselItems = document.querySelectorAll(".featured-item");
const leftButton = document.querySelector(".left-button");
const rightButton = document.querySelector(".right-button");

let currentSlide = 0;
const itemsVisible = 3;

function updateCarousel() {
    carouselItems.forEach((item, index) => {
        item.style.display = (index >= currentSlide && index < currentSlide + itemsVisible) ? 'block' : 'none';
    })
}

rightButton.addEventListener("click", slideNext);
leftButton.addEventListener("click", slidePrev);

function slideNext() {
    currentSlide += 1;

    if (currentSlide > carouselItems.length - itemsVisible) {
        currentSlide = 0;
    }
    updateCarousel();
}

function slidePrev() {
    currentSlide -= 1;

    if (currentSlide < 0) {
        currentSlide = carouselItems.length - itemsVisible;
    }
    updateCarousel();
}

updateCarousel();