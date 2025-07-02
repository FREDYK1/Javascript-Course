const myLabel = document.getElementById("myLabel");
const myButton = document.getElementsById("myButton");
const min = 1;
const max = 6;
let randomNumber;


myButton.onclick = function() {
    randomNumber = Math.floor(Math.random() * max) + min;
    myLabel.textContent = randomNumber;

}