var header_hideout = window.innerHeight - 85;
var header_shown = Date.now();
const timerHidding = 3000

window.addEventListener("scroll", function() {
  //console.log("scrolled")
  //si 3000ms se sont écoulé & la fenêtre à été scroll sous le landing
  if (window.scrollY > header_hideout) {
    //console.log("scrolled & under hero")
    if (!menuToggle.classList.contains("active")) {
      //console.log("active")
      window.setTimeout(function() {
        document.querySelector("header").style.transform = "translateY(-100%)";
        document.querySelector("header").style.animation = "1s ease-out 0s 0 normal none running none";
        //console.log("Hide header")
      }, 0);
    }
  } else if (window.scrollY < header_hideout) {
    window.setTimeout(function() {
      document.querySelector("header").style.transform = "translateY(0)";
      document.querySelector("header").style.animation = "1s ease-in 0s 0 normal none running none";
      //console.log("Show header")
    }, 0);
  }
});

//!menuToggle.classList.contains("active")

document.addEventListener("mousemove", (e) => {
  //console.log("Mouse moved")
  //si 3000ms se sont écoulé & la fenêtre à été scroll sous le landing & la souris se siture dans la zone du header
  if (window.scrollY > header_hideout) {  
    //console.log("Mouse moved & under hero")
    if (e.clientY > 100) {
      if (!menuToggle.classList.contains("active")) {
        //console.log("active")
        window.setTimeout(function() {
          document.querySelector("header").style.transform = "translateY(-100%)";
          document.querySelector("header").style.animation = "1s ease-out 0s 0 normal none running none";
          //console.log("Hide header")
        }, 0);
      }
    } else if (e.clientY < 100) {
      window.setTimeout(function() {
        document.querySelector("header").style.transform = "translateY(0)";
        document.querySelector("header").style.animation = "1s ease-in 0s 0 normal none running none";
        //console.log("Show header")
      }, 0);
    }
  }
});