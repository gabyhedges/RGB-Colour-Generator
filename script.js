const redSlider = document.getElementById("redSlider");
const greenSlider = document.getElementById("greenSlider");
const blueSlider = document.getElementById("blueSlider");

const redValueSpan = document.getElementById("redValue");
const greenValueSpan = document.getElementById("greenValue");
const blueValueSpan = document.getElementById("blueValue");

const colourBox = document.getElementById("colour-box");
const copyButton = document.getElementById("copyButton");
const inputTypeRGBValue = document.getElementById("inputType");

redSlider.addEventListener("input", updateColour);
greenSlider.addEventListener("input", updateColour);
blueSlider.addEventListener("input", updateColour);
copyButton.addEventListener("click", copyRGBColour);

function updateColour() {
    const redValue = redSlider.value;
    const greenValue = greenSlider.value;
    const blueValue = blueSlider.value;

    const rgbColour = `rgb(${redValue}, ${greenValue}, ${blueValue})`;

    colourBox.style.backgroundColor = rgbColour;

    redValueSpan.textContent = redValue;
    greenValueSpan.textContent = greenValue;
    blueValueSpan.textContent = blueValue;
    inputTypeRGBValue.textContent = rgbColour;
}



