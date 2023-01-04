const form = document.querySelector("form");
const input = document.querySelectorAll("input");
const sectionSuccess = document.querySelector(".paymentSuccess");
const btnContinue = document.getElementById("btn-continue");

const cardNumber = document.querySelector(".card-number");
const cardName = document.getElementById("card-name-txt");
const cardDateMonth = document.getElementById("card-date-month-txt");
const cardDateYear = document.getElementById("card-date-year-txt");
const cardCvc = document.getElementById("card-back-cvc");
const inputCardNumber = document.getElementById("card-number");
const inputCardName = document.getElementById("card-name");
const inputCardDateMonth = document.getElementById("card-date-MM");
const inputCardDateYear = document.getElementById("card-date-YY");
const inputCardCvc = document.getElementById("card-cvc");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("FORM SUBMITTED");
    form.style.display = "none";
    sectionSuccess.style.display = "flex";
});

input.forEach((input) => {
    input.addEventListener("input", (e) => {
        console.log(e.target.value);
        if (e.target.id === "card-number") {
            if(inputCardNumber.value.length > 0)
                cardNumber.innerHTML = e.target.value.replace(/(.{4})/g, "$1 ");
            else
                cardNumber.innerHTML = "0000 0000 0000 0000";
        }
        if (e.target.id === "card-name") {
            if(inputCardName.value.length > 0)
                cardName.innerHTML = e.target.value;
            else
                cardName.innerHTML = "Jane Appleseed";
        }
        if (e.target.id === "card-date-MM") {
            if(inputCardDateMonth.value.length > 0)
                cardDateMonth.innerHTML = e.target.value + "/";
            else
                cardDateMonth.innerHTML = "MM/";
        }
        if (e.target.id === "card-date-YY") {
            if(inputCardDateYear.value.length > 0)
                cardDateYear.innerHTML = e.target.value;
            else
                cardDateYear.innerHTML = "YY";
        }
        if (e.target.id === "card-cvc") {
            if(inputCardCvc.value.length > 0)
                cardCvc.innerHTML = e.target.value;
            else
                cardCvc.innerHTML = "000";
        }
    });
});

btnContinue.addEventListener("click", () => {
    form.style.display = "flex";
    sectionSuccess.style.display = "none";
    inputCardNumber.value = "";
    inputCardName.value = "";
    inputCardDateMonth.value = "";
    inputCardDateYear.value = "";
    inputCardCvc.value = "";
    cardNumber.innerHTML = "0000 0000 0000 0000";
    cardName.innerHTML = "Jane Appleseed";
    cardDateMonth.innerHTML = "00/";
    cardDateYear.innerHTML = "00";
    cardCvc.innerHTML = "000";
});

addEventListener("DOMContentLoaded", () => {
    console.log("test");
});