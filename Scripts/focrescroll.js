var scrollToTopBtn = document.getElementById("littybityscrolly")
var rootElement = document.documentElement

function scrollToTop() {
    // Scroll to top logic
    rootElement.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    })
  }

scrollToTopBtn.addEventListener("click", scrollToTop)