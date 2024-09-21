let currentSlide = 0;
const itemsShown = 3;

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

container.style.transform = `translateX(${offset})`;