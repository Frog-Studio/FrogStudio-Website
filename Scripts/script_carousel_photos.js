// Get the carousel element from the DOM
const carousel = document.querySelector(".all-images");

// Get all of the img elements in the carousel
const imageElements = carousel.querySelectorAll("img");

// Create an object to store the image URLs and their positions in the carousel
const imagePositions = {};

// Iterate over the img elements and add them to the object, along with their positions in the carousel
imageElements.forEach((imageElement, index) => {
  imagePositions[index] = imageElement.src;
});

// Create a function to change the images in the carousel
function changeCarouselImages(imagePositions) {
  // Update the src attribute of the img elements with the image URLs, based on their positions in the carousel
  for (const index in imagePositions) {
    imageElements[index].src = imagePositions[index];
  }
}

// Call the function to change the images in the carousel with the object containing the image URLs and their positions
changeCarouselImages(imagePositions);


const carouselView = document.querySelector(".carousel-view");
const carouselPrev = document.querySelector(".carousel-prev");
const carouselNext = document.querySelector(".carousel-next");

let currentSlide = 0;

carouselPrev.addEventListener("click", () => {
  if (currentSlide > 0) {
    currentSlide--;
    carouselView.style.transform = `translateX(-${currentSlide}00%)`;
  }
});

carouselNext.addEventListener("click", () => {
  if (currentSlide < carouselImages.length - 1) {
    currentSlide++;
    carouselView.style.transform = `translateX(-${currentSlide}00%)`;
  }
});

// A ECRIRE LE GET PATH DE L'IMAGE
function getImagePath(Place) {
    if (Place)
        
}