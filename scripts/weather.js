const apiKey = '1251cbed296ad9a9bb5cbf8652649a8d'; 
const weatherElement = document.getElementById('weather');
const weatherConditionElement = document.getElementById('weather-condition');
const weatherIconElement = document.getElementById('weather-icon');

async function fetchWeather() {
    const city = 'Masaka'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        // Display temperature
        weatherElement.textContent = `${data.main.temp}°C`;

        // Display weather condition
        weatherConditionElement.textContent = data.weather[0].description;

        // Display weather icon
        const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        weatherIconElement.src = iconUrl;
        weatherIconElement.alt = data.weather[0].description;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

window.onload = fetchWeather;
