var LandingCarouselBtnL = document.getElementById("LandingCarouselBtnLeft")
var LandingCarouselBtnR = document.getElementById("LandingCarouselBtnRight")
var LandingCarouselContent = document.getElementsByClassName("LandingProjectContainer")
var LandingCarouselSize = LandingCarouselContent.length
var ScreenSize = window.innerWidth

function ScrollLandingCarousel(a) {
    if (a == 0) {
        console.log("ScrollRight")
        setTimeout(1000)
    } else if (a == 1) {
        console.log("ScrollLeft")
        setTimeout(1000)
    } else {
        console.log("autoscroll")
        setTimeout(300)
    }
}

function RepeatScrollCarousel() {
    ScrollLandingCarousel()
}

LandingCarouselBtnL.addEventListener("click", ScrollLandingCarousel(0))
LandingCarouselBtnL.addEventListener("click", ScrollLandingCarousel(1))
window.onload(RepeatScrollCarousel())