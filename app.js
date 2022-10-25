const ID_ATTRIBITE = "id";
const WITDH_ATTRIBUTE = "width";
const HEIGHT_ATTRIBUTE = "height";
const COLORBOX_IDNAME = "colorBox";

//Controll box size.

const colorBoxSizeX = 50;
const colorBoxSizeY = 50;

window.addEventListener("resize", handleCheckWindowSize);

function handleCheckWindowSize() {
    const stageWidth = document.body.clientWidth;
    const stageHeight = document.body.clientHeight;
    createColorBox(stageWidth, stageHeight);
}

function createColorBox(stageWidth, stageHeight) {
    const theNumberOfColorBoxs = Math.ceil(stageWidth / colorBoxSizeX) * Math.ceil(stageHeight / colorBoxSizeY);
    for (let i = 0; i < theNumberOfColorBoxs; i++) {
        const div = document.createElement("div");

        div.setAttribute(WITDH_ATTRIBUTE, `${colorBoxSizeX}px`);        
        div.setAttribute(HEIGHT_ATTRIBUTE, `${colorBoxSizeY}px`);
        div.className = "colorBox";
        const colorBox = div;

        document.body.appendChild(colorBox);
    }
}

handleCheckWindowSize();

