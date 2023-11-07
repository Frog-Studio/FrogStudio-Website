window.onload = () => {
    getDominantImageColor = ()=>{
        // get the image
        let sourceImage = document.querySelectorAll("img");
        // get the background element
        let background = document.querySelectorAll(".project");
        // initialize colorThief
        let colorThief = new ColorThief();
        // get color palette
        let color = colorThief.getColor(sourceImage);
        // set the background color
        background.style.backgroundColor = "rgb(" + color + ")";
    }
    getDominantImageColor();
}