function rgbToHex(red, green, blue) {
    function componentToHex(component) {
        const hex = component.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    }

    const redHex = componentToHex(red);
    const greenHex = componentToHex(green);
    const blueHex = componentToHex(blue);
    return `#${redHex}${greenHex}${blueHex}`;
}

function convertToHex() {
    const redValue = document.getElementById('red').value;
    const greenValue = document.getElementById('green').value;
    const blueValue = document.getElementById('blue').value;

    const hexColorCode = rgbToHex(parseInt(redValue), parseInt(greenValue), parseInt(blueValue));
    //parseInt in JavaScript turns a string into a whole number (integer) if it is possible.


    document.getElementById('hexCode').textContent = hexColorCode;
}