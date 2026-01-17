const searchBtn = document.getElementById('search-btn');
const cityInput = document.getElementById('city-input');

searchBtn.addEventListener('click', handleSearch);
cityInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') handleSearch(); });

async function handleSearch() {
    const city = cityInput.value.trim();
    if (!city) return;

    suggestionsDiv.innerHTML = '';

    try {
        // Fetching from OUR backend, not OpenWeather directly
        const response = await fetch(`/api/weather?city=${city}`);
        if (!response.ok) throw new Error('City not found');
        
        const data = await response.json();
        displayCurrent(data.current);
        displayForecast(data.forecast);
    } catch (error) {
        alert(error.message);
    }
}

function displayCurrent(data) {
    const weatherDiv = document.getElementById('current-weather');
    weatherDiv.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
        <p style="font-size: 2rem; font-weight: bold;">${Math.round(data.main.temp)}°C</p>
        <p>${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}% | Wind: ${data.wind.speed} m/s</p>
    `;
}

function displayForecast(data) {
    const forecastDiv = document.getElementById('forecast');
    document.getElementById('forecast-title').style.display = 'block';
    forecastDiv.innerHTML = '';

    // Filter for 12:00 PM readings
    const dailyData = data.list.filter(item => item.dt_txt.includes("12:00:00"));

    dailyData.forEach(day => {
        const date = new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' });
        forecastDiv.innerHTML += `
            <div class="forecast-item">
                <p><strong>${date}</strong></p>
                <img src="https://openweathermap.org/img/wn/${day.weather[0].icon}.png">
                <p>${Math.round(day.main.temp)}°C</p>
            </div>
        `;
    });
}

// --- NEW DROPDOWN LOGIC (Add to bottom of file) ---
const suggestionsDiv = document.getElementById('suggestions');

cityInput.addEventListener('input', async (e) => {
    const query = e.target.value.trim();
    
    // Only search if the user has typed at least 3 characters
    if (query.length < 3) {
        suggestionsDiv.innerHTML = '';
        return;
    }

    try {
        const response = await fetch(`/api/suggestions?q=${query}`);
        const cities = await response.json();
        
        displaySuggestions(cities);
    } catch (err) {
        console.error("Error fetching suggestions:", err);
    }
});

function displaySuggestions(cities) {
    suggestionsDiv.innerHTML = '';
    
    cities.forEach(city => {
        const div = document.createElement('div');
        div.className = 'suggestion-item';
        // Format: City Name, State (if available), Country
        div.textContent = `${city.name}${city.state ? ', ' + city.state : ''}, ${city.country}`;
        
        div.onclick = () => {
            cityInput.value = city.name;
            suggestionsDiv.innerHTML = ''; // Clear dropdown
            handleSearch(); // Run the weather search immediately
        };
        suggestionsDiv.appendChild(div);
    });
}

// Close dropdown if user clicks anywhere else
document.addEventListener('click', (e) => {
    if (e.target !== cityInput) suggestionsDiv.innerHTML = '';
});
