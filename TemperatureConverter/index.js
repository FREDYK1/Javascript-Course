const textBox = document.getElementById("textBox");
const toCelsius = document.getElementById("toCelsius");
const toFahrenheit = document.getElementById("toFahrenheit");
const result = document.getElementById("result");
let temp;

function convert() {
    if (toFahrenheit.checked) {
        temp = (Number(textBox.value) * 9/5) + 32;
        result.textContent = `${textBox.value} Celsius is ${temp} Fahrenheit`;
    } else if (toCelsius.checked) {
        temp = (Number(textBox.value) - 32) * 5/9;
        result.textContent = `${textBox.value} Fahrenheit is ${temp} Celsius`;
    } else {
        result.textContent = "Please select a conversion option.";
    }
}