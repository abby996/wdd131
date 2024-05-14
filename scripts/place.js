const today = new Date();
const currentyear = document.querySelector("#currentyear");
currentyear.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

// Static values for temperature and wind speed (in Celsius and meters per second)
const temperature = 36; // Example temperature in Celsius
const windSpeed = 19; // Example wind speed in kilometers per hour

// Function to calculate windchill factor
function calculateWindChill(temperature, windSpeed) {
    // Windchill calculation formula
    const windChill = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
    return windChill;
}

// Function to display windchill factor on the page
function displayWindChill() {
    const windChillFactor = calculateWindChill(temperature, windSpeed);
    document.getElementById("windChill").innerText = `${windChillFactor.toFixed(2)}°C`;
}

// Call the displayWindChill function when the page loads
window.onload = displayWindChill;

