# weather-app
A sleek and responsive web application to display real-time weather updates for any city, built using HTML, CSS, and JavaScript. The project uses the OpenWeatherMap API to fetch current temperature, weather conditions, humidity, wind speed, and a visual icon, all within a modern and animated UI.
Features
Search by City: Instantly fetch up-to-date weather data for any city worldwide with a simple search input and button.

API Integration: Utilizes OpenWeatherMap's REST API for accurate real-time weather data.

Dynamic UI: Shows city name, temperature, condition, humidity, wind speed, and a weather-specific icon.

User Feedback: Handles invalid input with clear error display. Loading indicators enhance user experience during API requests.

Responsive Design: Mobile-friendly layout adapts gracefully to smaller screens, ensuring usability on any device.

Animated Visuals: Subtle fade-in effects and clean iconography provide a modern, engaging interface with customized error and loading animations.

Screenshots
(Optional: Add images here if desired)

How It Works
Enter a City Name: The user types a city name (e.g., "London") and clicks the search icon or presses Enter.

Fetch Weather Data: The app queries the OpenWeatherMap API for that city's latest weather.

Display Results: If found, weather details update with animated transitions; if not, an error message is shown.

Technologies Used
HTML: App structure and content.

CSS: Responsive design, custom gradients, animations for smooth UI.

JavaScript: Fetches and processes weather data, dynamically updates the DOM, and handles user interaction.

OpenWeatherMap API: For weather information and condition icons.

Font Awesome: For UI icons.

Getting Started
Clone the repository:

bash
git clone https://github.com/your-username/weather-app.git
OpenWeatherMap API Key:

Replace the sample API key in script.js with your own from https://openweathermap.org/api.

Open index.html:

Simply open the file in your favorite browser.

Project Structure
File	Purpose
index.html	Main web page—input, search, and sections for weather data and errors.
style.css	Styles for layout, animations, and themes.
script.js	Fetches weather, handles logic, and updates elements dynamically.
