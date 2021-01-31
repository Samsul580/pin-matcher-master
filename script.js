// random number generate
function randomNumberGenerate() {
    const random = Math.random() * 10000;
    const pin = (random + '').split('.')[0];
    if (pin.length === 4) {
        document.getElementById("random-input").value = pin;
    }
    else {
        randomNumberGenerate();
    }
    document.getElementById("calculator-input").value = '';
}
// handle calculator buttons
const calculatorContainer = document.getElementById("calculator-container");
calculatorContainer.addEventListener("click", function (event) {
    const digits = event.target.innerText;
    if (isNaN(digits)) {
        if (digits == 'C') {
            document.getElementById("calculator-input").value = '';
        }
        if (digits == 'B') {
            document.getElementById("calculator-input").value = document.getElementById("calculator-input").value.substring(0, document.getElementById("calculator-input").value.length - 1);
        }
    }
    else {
        document.getElementById("calculator-input").value = document.getElementById("calculator-input").value + digits;
    }
})
// match button handler
function doMatch() {
    const generateInput = document.getElementById("calculator-input").value; 
    const calculatorInput = document.getElementById("random-input").value;
    const match = document.getElementById("match");
    const notMatch = document.getElementById("not-match");
    if (generateInput === calculatorInput) {
        match.style.display = "block";
        notMatch.style.display = "none";
    }
    else {
        notMatch.style.display = "block";
        match.style.display = "none";
    }
}