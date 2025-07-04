const myCheckbox = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visabtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subresult = document.getElementById("subresult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){
    if (myCheckbox.checked) {
        subresult.textContent = "You are subscribed";
    }else {
        subresult.textContent = "You are not subscribed";
    }

    if (visaBtn.checked) {
        paymentResult.textContent = "You have selected Visa";
    } else if (masterCardBtn.checked) {
        paymentResult.textContent = "You have selected MasterCard";
    } else if (payPalBtn.checked) {
        paymentResult.textContent = "You have selected PayPal";
    } else {
        paymentResult.textContent = "No payment method selected";
    }
};