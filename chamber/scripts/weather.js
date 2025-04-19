const apiKey = '1251cbed296ad9a9bb5cbf8652649a8d'; 
const city = 'Masaka';
const units = 'metric'; // or 'imperial' for Fahrenheit

const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&appid=${apiKey}`;

async function fetchWeather() {
    try {
        const response = await fetch(weatherURL);
        const data = await response.json();
        document.getElementById('temperature').textContent = `Temperature: ${data.main.temp.toFixed(1)}°C`;
        document.getElementById('description').textContent = `Condition: ${data.weather[0].description}`;
    } catch (error) {
        console.error('Error fetching current weather:', error);
    }
}

async function fetchForecast() {
    try {
        const response = await fetch(forecastURL);
        const data = await response.json();
        const forecastDiv = document.getElementById('forecast');
        forecastDiv.innerHTML = '<h3>3-Day Forecast</h3>';

        const dailyTemps = {};
        data.list.forEach(item => {
            const date = item.dt_txt.split(' ')[0];
            if (!dailyTemps[date]) {
                dailyTemps[date] = [];
            }
            dailyTemps[date].push(item.main.temp);
        });

        const days = Object.keys(dailyTemps).slice(1, 4); // skip today

        days.forEach(day => {
            const temps = dailyTemps[day];
            const avg = temps.reduce((sum, val) => sum + val, 0) / temps.length;
            forecastDiv.innerHTML += `<p><strong>${day}</strong>: ${avg.toFixed(1)}°C</p>`;
        });
    } catch (error) {
        console.error('Error fetching forecast:', error);
    }
}

fetchWeather();
fetchForecast();
