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
let itemsVisible = numOfItemsVisible();

function numOfItemsVisible() {
    if (window.innerWidth < 600) {
        return 1;
    } else if (window.innerWidth < 900) {
        return 2;
    } else {
        return 3;
    }
}

function updateCarousel() {
    itemsVisible = numOfItemsVisible();
    console.log("Update carousel");
    carouselItems.forEach((item, index) => {
        item.style.display = (index >= currentSlide && index < currentSlide + itemsVisible) ? 'block' : 'none';
    });
}

rightButton.addEventListener("click", slideNext);
leftButton.addEventListener("click", slidePrev);
window.addEventListener("resize", updateCarousel);

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