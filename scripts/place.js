const currentyear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentyear;
const lastModified = document.lastModified;
const date = new Date(lastModified);
document.getElementById("lastModified").textContent = date;
const temperature = parseFloat(document.querySelector('#temperature').textContent);
const wind = parseFloat(document.querySelector('#wind').textContent);
const finalResult = calculateWindChill(temperature, wind);
document.getElementById("windChill").textContent = finalResult + (finalResult !== 'N/A' ? " ºC" : "");

function calculateWindChill(temperature, wind) {
    let result;
    if (temperature <= 10 && wind > 4.8) {
        result = 13.12 + (0.6215 * temperature) - (11.37 * Math.pow(wind, 0.16)) + (0.3965 * temperature * Math.pow(wind, 0.16));
        result = result.toFixed(2);
    } else {
        result = 'N/A';
    }
    return result;
}
