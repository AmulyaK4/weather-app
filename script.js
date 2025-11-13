
const API_KEY = 'enter your key';
const API_BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const weatherDisplay = document.getElementById('weatherDisplay');
const errorMessage = document.getElementById('errorMessage');

const cityName = document.getElementById('cityName');
const temperature = document.getElementById('temperature');
const weatherCondition = document.getElementById('weatherCondition');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('windSpeed');
const weatherIcon = document.getElementById('weatherIcon');


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


function displayWeather(data) {
    
    errorMessage.classList.add('hidden');
    weatherDisplay.classList.remove('hidden');
    
   
    cityName.textContent = data.name;
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    weatherCondition.textContent = data.weather[0].description;
    humidity.textContent = data.main.humidity;
    windSpeed.textContent = Math.round(data.wind.speed * 3.6); 
    
    
    const iconCode = data.weather[0].icon;
    weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    weatherIcon.alt = data.weather[0].description;
}


function displayError() {
    errorMessage.classList.remove('hidden');
    weatherDisplay.classList.add('hidden');
}


async function handleSearch() {
    const city = cityInput.value.trim();
    
    
    if (!city) {
        displayError();
        return;
    }
    
    
    searchBtn.classList.add('loading');
    searchBtn.disabled = true;
    
    try {
        const weatherData = await fetchWeatherData(city);
        displayWeather(weatherData);
    } catch (error) {
        displayError();
    } finally {
        
        searchBtn.classList.remove('loading');
        searchBtn.disabled = false;
    }
}


function handleEnterKey(event) {
    if (event.key === 'Enter') {
        handleSearch();
    }
}


searchBtn.addEventListener('click', handleSearch);
cityInput.addEventListener('keypress', handleEnterKey);

window.addEventListener('load', () => {
    cityInput.focus();
});


