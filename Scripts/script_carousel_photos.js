// Get the carousel element from the DOC
const carousel = document.querySelector(".all-images");

// Get all of the img elements in the carousel
const imageElements = carousel.querySelectorAll("img");

// Create an object to store the image URLs and their positions in the carousel
const imagePositions = {};

// Iterate over the img elements and add them to the object, along with their positions in the carousel
imageElements.forEach((imageElement, index) => {
  imagePositions[index] = imageElement.src;
  //console.log(index);
  //console.log(imagePositions[index]);
});

// Create a function to change the images in the carousel
function changeCarouselImages(imagePositions) {
  // Update the src attribute of the img elements with the image URLs, based on their positions in the carousel
  for (const index in imagePositions) {
    imageElements[index].src = imagePositions[index];
  }
};

// Call the function to change the images in the carousel with the object containing the image URLs and their positions
changeCarouselImages(imagePositions);

let ClickedImg = document.querySelectorAll(".images");

var currentSlide = imagePositions;

ClickedImg.forEach((image) => {
  image.onclick = function () {
    carouseldiv.style.display = 'block';
    AllImages.style.top = '-100dvh';
    currentSlide = [...this.parentElement.parentElement.children].indexOf(this.parentElement);
    
    if ( currentSlide === imageElements.length - 1 ) {
      document.getElementById("v0").src = imagePositions[currentSlide];
      document.getElementById("n1").src = imagePositions[0];
      document.getElementById("p1").src = imagePositions[currentSlide-1];
    }
    else if (currentSlide === 0) {
      document.getElementById("v0").src = imagePositions[currentSlide];
      document.getElementById("n1").src = imagePositions[currentSlide+1];
      document.getElementById("p1").src = imagePositions[imageElements.length-1];
    }
    else {
      document.getElementById("v0").src = imagePositions[currentSlide];
      document.getElementById("n1").src = imagePositions[currentSlide+1];
      document.getElementById("p1").src = imagePositions[currentSlide-1];
    }
    //console.log(image);
    //console.log(currentSlide);
    //console.log(imagePositions[index]);
  }
});

function NextImg() {
  currentSlide++;
  
  if (currentSlide > imageElements.length -1) {
    currentSlide = 0;
  }

  if ( currentSlide === imageElements.length - 1 ) {
    document.getElementById("v0").src = imagePositions[currentSlide];
    document.getElementById("n1").src = imagePositions[0];
    document.getElementById("p1").src = imagePositions[currentSlide-1];
  }
  else if (currentSlide === 0) {
    document.getElementById("v0").src = imagePositions[currentSlide];
    document.getElementById("n1").src = imagePositions[currentSlide+1];
    document.getElementById("p1").src = imagePositions[imageElements.length-1];
  }
  else {
    document.getElementById("v0").src = imagePositions[currentSlide];
    document.getElementById("n1").src = imagePositions[currentSlide+1];
    document.getElementById("p1").src = imagePositions[currentSlide-1];
  }
}

function PrevImg() {
  currentSlide--;

  if (currentSlide < 0 ) {
    currentSlide = imageElements.length - 1
  }

  if ( currentSlide === imageElements.length - 1 ) {
    document.getElementById("v0").src = imagePositions[currentSlide];
    document.getElementById("n1").src = imagePositions[0];
    document.getElementById("p1").src = imagePositions[currentSlide-1];
  }
  else if (currentSlide === 0) {
    document.getElementById("v0").src = imagePositions[currentSlide];
    document.getElementById("n1").src = imagePositions[currentSlide+1];
    document.getElementById("p1").src = imagePositions[imageElements.length-1];
  }
  else {
    document.getElementById("v0").src = imagePositions[currentSlide];
    document.getElementById("n1").src = imagePositions[currentSlide+1];
    document.getElementById("p1").src = imagePositions[currentSlide-1];
  }
}

// Fermeture du carousel
const CloseBtn = document.getElementById('close-btn');

CloseBtn.addEventListener('click', () => {
  carouseldiv.style.display = 'none';
  AllImages.style.top = '0';
});