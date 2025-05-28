/* Script pour carrousel */
const track = document.getElementById("image-track");

/*
const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

const handleOnUp = () => {
  track.dataset.mouseDownAt = "0";
  track.dataset.prevPercentage = track.dataset.percentage;
}
*/

const handleOnMove = e => {
  track.dataset.mouseDownAt = e.clientX;
  if(track.dataset.mouseDownAt === "0") return;
  
  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth;
  
  const percentage = (e.clientX / maxDelta) * -100,
        nextPercentage = Math.max(Math.min(percentage, 0), -100);
  
  track.dataset.percentage = nextPercentage;
  
  track.animate({
    transform: `translate(${nextPercentage}%, -50%)`
  }, { duration: 1500, fill: "forwards" });
  
  for(const image of track.getElementsByClassName("car_projets3d_container")) {
    image.animate({
      objectPosition: `${100 + nextPercentage}% center`
    }, { duration: 1500, fill: "forwards" });
  }
}

/* -- Had to add extra lines for touch events -- */

/*
window.onmousedown = e => handleOnDown(e);

window.ontouchstart = e => handleOnDown(e.touches[0]);

window.onmouseup = e => handleOnUp(e);

window.ontouchend = e => handleOnUp(e.touches[0]);
*/

window.onmousemove = e => handleOnMove(e);

window.ontouchmove = e => handleOnMove(e.touches[0]);
/* Fin du carrousel */