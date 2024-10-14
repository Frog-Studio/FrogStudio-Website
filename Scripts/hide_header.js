var header_hideout = window.innerHeight - 100;
var header_shown = Date.now();

window.addEventListener("scroll", function() {
  //si 3000ms se sont écoulé & la fenêtre à été scroll sous le landing
  if (header_shown < Date.now() - 3000 && window.scrollY > header_hideout) {
    window.setTimeout(function() {
      document.querySelector("header").style.transform = "translateY(-100%)";
      document.querySelector("header").style.animation = "1s ease-out 0s 0 normal none running none";
    }, 0);
  } else if (header_shown < Date.now() - 3000 && window.scrollY < header_hideout) {
    document.querySelector("header").style.transform = "translateY(0)";
    document.querySelector("header").style.animation = "1s ease-in 0s 0 normal none running none";
  }
});

document.addEventListener("mousemove", (e) => {
  //si 3000ms se sont écoulé & la fenêtre à été scroll sous le landing & la souris se siture dans la zone du header
    if (header_shown < Date.now() - 3000 && e.clientY > 100 && window.scrollY > header_hideout) {
    document.querySelector("header").style.transform = "translateY(-100%)";
    document.querySelector("header").style.animation = "1s ease-out 0s 0 normal none running none";
  } else if (header_shown < Date.now() - 3000 && e.clientY < 100 && window.scrollY > header_hideout) {
    document.querySelector("header").style.transform = "translateY(0)";
    document.querySelector("header").style.animation = "1s ease-in 0s 0 normal none running none";
  }
});