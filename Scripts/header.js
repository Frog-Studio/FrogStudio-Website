window.addEventListener("scroll", function() {
    if (window.scrollY > 100) {
      window.setTimeout(function() {
        document.querySelector("header").classList.add("scrolled");
      }, 1000);
    } else {
      document.querySelector("header").classList.remove("scrolled");
    }
  });