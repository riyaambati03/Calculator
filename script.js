let display = document.getElementById('display');
function appendInput(value) {
    if (display.innerText === "0") display.innerText = "";
    display.innerText += value;
}
function clearDisplay() {
    display.innerText = "0";
}
function calculate() {
    try {
        display.innerText = eval(display.innerText);
    } catch {
        display.innerText = "Error";
    }
}

