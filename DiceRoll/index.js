const input = document.getElementById("input");
const diceResult = document.getElementById("diceResult");
const diceImages = document.getElementById("diceImages");



function rollDice() {
    randomValues = [];
    images = [];

    let diceRoles = input.value;
    for (let i = 0; i < diceRoles;  i++) {
        const diceValue = Math.floor(Math.random() * 6) + 1;
        randomValues.push(diceValue);
    }
    diceResult.innerHTML = `Dice: ${randomValues.join(", ")}`
    for (let i=0; i< randomValues.length; i++ ) {
        let image = `<img src="DicePics/${randomValues[i]}.png" alt="Dice ${randomValues[i]}">`;
        images.push(image);
    }
    diceImages.innerHTML = images.join("");
    
}