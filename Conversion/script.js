// script.js

// Temperature conversions
function convertCtoF() {
    let c = parseFloat(document.getElementById("tempInput").value);
    if (!isNaN(c)) {
        let f = (c * 9/5) + 32;
        document.getElementById("tempResult").innerText = `${c}°C = ${f.toFixed(2)}°F`;
    } else {
        alert("Please enter a valid number.");
    }
}

function convertFtoC() {
    let f = parseFloat(document.getElementById("tempInput").value);
    if (!isNaN(f)) {
        let c = (f - 32) * 5/9;
        document.getElementById("tempResult").innerText = `${f}°F = ${c.toFixed(2)}°C`;
    } else {
        alert("Please enter a valid number.");
    }
}

// Distance conversions
function convertMtoF() {
    let m = parseFloat(document.getElementById("distInput").value);
    if (!isNaN(m)) {
        let ft = m * 3.28084;
        document.getElementById("distResult").innerText = `${m} meters = ${ft.toFixed(2)} feet`;
    } else {
        alert("Please enter a valid number.");
    }
}

function convertFtoM() {
    let ft = parseFloat(document.getElementById("distInput").value);
    if (!isNaN(ft)) {
        let m = ft / 3.28084;
        document.getElementById("distResult").innerText = `${ft} feet = ${m.toFixed(2)} meters`;
    } else {
        alert("Please enter a valid number.");
    }
}
