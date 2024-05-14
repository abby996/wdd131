

const temperature = 10; // in Celsius
const windSpeed = 5; // in kilometers per hour
const windChillFactor = calculateWindChill(temperature, windSpeed);
console.log(windChillFactor); // Output will be something like "9.80°C"





const newDate = new Date();
let fullYear = newDate.getFullYear();
let lastModified = document.lastModified;

blockYearEdition.innerHTML = fullYear;
blockLastModified.innerHTML = lastModified;

const displayList = (data, block) => {
    for (var i = 0; i<data.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = `<strong>${data[i][0]}:</strong> <span>${data[i][1]}</span>`;    
        if(li) {
            block.appendChild(li);
        }
    }
}

const calculateWindChill = (temperature, windSpeed) => {
    // Windchill calculation formula
    const windChill = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
    return windChill.toFixed(2) + "°C";
}


// data
let dataSquareArea = ['Area', '587,000 sq km'];
let dataPopulation = ['Population','30,000,000'];
let dataCapitale = ['Capitale','Antananarivo'];
let dataLanguage = ['Languages','Malagasy, French'];
let dataCurrency = ['Currency','Malagasy Ariary'];
let dataTimezone = ['Time Zone','UTC+3'];
let dataCallingCode = ['Calling Code','+261'];
let dataInternetTld = ['Internet TLD','.mg'];
let data = [dataSquareArea, dataPopulation, dataCapitale, dataLanguage, dataCurrency, dataTimezone,
            dataCallingCode, dataInternetTld];

let blockDataList = document.querySelector('#data-list');
displayList(data, blockDataList);   

//weather data
let weatherTemperature = [ 'Temperature', '10°C'];
let weatherConditions = [ 'Conditions','Partly Cloudly' ];
let weatherWind = [ 'Wind','5km/h' ];
let weatherWindChill = [ 'Wind Chill','9.8°C' ];
let weatherData = [weatherTemperature, weatherConditions, weatherWind, weatherWindChill];

let blockWeatherList = document.getElementById('weather-list');
displayList(weatherData, blockWeatherList);


