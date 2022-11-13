const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const boxSize = 50;
const boxColors = ["red", "blue", "orange", "yellow", "skyblue", "green", "white"];

function setCanvasSize() {
    const windowSizeWidth = document.body.offsetWidth;
    const windowSizeHeight = document.body.offsetHeight;
    
    canvas.width = windowSizeWidth;
    canvas.height = windowSizeHeight;

    return [windowSizeWidth, windowSizeHeight];
}

function getRandomColor(boxColors) {
    const theNumberOfColors = boxColors.length;
    min = 0;
    max = theNumberOfColors;
    return boxColors[Math.floor(Math.random() * (max - min)) + min];
}

function makeBox(width, height, boxSize, boxColors) {

    const theNumberOfColors_X = Math.floor(width / boxSize) + 1;
    const theNumberOfColors_Y = Math.floor(height / boxSize) + 1;

    for (let x = 0; x < theNumberOfColors_X; x++) {
        for (let y = 0; y < theNumberOfColors_Y; y++) {
            ctx.fillStyle = getRandomColor(boxColors);
            ctx.fillRect(boxSize*x, boxSize*y, boxSize, boxSize);
        }
    }
}

function appStart() {
    const [width, height] = setCanvasSize();
    makeBox(width, height, boxSize, boxColors);
}

window.addEventListener("load", appStart());
window.addEventListener("resize", appStart());