const decreaseButton = document.getElementById("Decrease");
const resetButton = document.getElementById("Reset");
const increaseButton = document.getElementById("Increase");
const countLabel = document.getElementById("countLable");

let count = 0;

increaseButton.onclick = function() {
    count++;
    countLabel.textContent = count;
}

resetButton.onclick = function() {
    count = 0;
    countLabel.textContent = count;
}

decreaseButton.onclick = function() {
    count--;
    countLabel.textContent = count;
}