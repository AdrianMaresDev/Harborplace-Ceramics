/*const itemsShown = 3;

function moveSlide(direction) {
    const items = document.querySelectorAll(".featured-item");
    const totalItems = items.length;
    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = totalItems - itemsShown;
    } else if (currentSlide > (totalItems - itemsShown)) {
        currentSlide = 0;
    }
}

const offset = -currentSlide * (100 / itemsShown);
const container = document.querySelector(".featured-container");

container.style.transform = `translateX(${offset})`;*/

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
    currentSlide += itemsVisible;
    if(currentSlide >= carouselItems.length) {
        currentSlide = 0;
    }
    updateCarousel();
}

function slidePrev() {
    currentSlide -= itemsVisible;
    if(currentSlide < 0) {
        currentSlide = Math.max(0, carouselItems.length - itemsShown);
    }
    updateCarousel();
}

updateCarousel();