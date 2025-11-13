// API Configuration
const API_KEY = 'c2ba580e784bb44d819ba93b7fa0afe0';
const API_BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

// DOM Elements
const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const weatherDisplay = document.getElementById('weatherDisplay');
const errorMessage = document.getElementById('errorMessage');

// Weather display elements
const cityName = document.getElementById('cityName');
const temperature = document.getElementById('temperature');
const weatherCondition = document.getElementById('weatherCondition');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('windSpeed');
const weatherIcon = document.getElementById('weatherIcon');

/**
 * Fetches weather data from OpenWeatherMap API
 * @param {string} city - The city name to search for
 * @returns {Promise<Object>} Weather data object
 */
async function fetchWeatherData(city) {
    try {
        const url = `${API_BASE_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error('City not found');
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
}

/**
 * Displays weather information on the UI
 * @param {Object} data - Weather data from API
 */
function displayWeather(data) {
    // Hide error message and show weather display
    errorMessage.classList.add('hidden');
    weatherDisplay.classList.remove('hidden');
    
    // Update weather information
    cityName.textContent = data.name;
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    weatherCondition.textContent = data.weather[0].description;
    humidity.textContent = data.main.humidity;
    windSpeed.textContent = Math.round(data.wind.speed * 3.6); // Convert m/s to km/h
    
    // Set weather icon from OpenWeatherMap
    const iconCode = data.weather[0].icon;
    weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    weatherIcon.alt = data.weather[0].description;
}

/**
 * Displays error message
 */
function displayError() {
    errorMessage.classList.remove('hidden');
    weatherDisplay.classList.add('hidden');
}

/**
 * Handles the search functionality
 */
async function handleSearch() {
    const city = cityInput.value.trim();
    
    // Validate input
    if (!city) {
        displayError();
        return;
    }
    
    // Show loading state
    searchBtn.classList.add('loading');
    searchBtn.disabled = true;
    
    try {
        const weatherData = await fetchWeatherData(city);
        displayWeather(weatherData);
    } catch (error) {
        displayError();
    } finally {
        // Remove loading state
        searchBtn.classList.remove('loading');
        searchBtn.disabled = false;
    }
}

/**
 * Handles Enter key press in the input field
 */
function handleEnterKey(event) {
    if (event.key === 'Enter') {
        handleSearch();
    }
}

// Event Listeners
searchBtn.addEventListener('click', handleSearch);
cityInput.addEventListener('keypress', handleEnterKey);

// Focus on input when page loads
window.addEventListener('load', () => {
    cityInput.focus();
});

