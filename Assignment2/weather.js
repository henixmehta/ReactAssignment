$(document).ready(function () {
    const weatherData = {
        "new york": {
            temperature: 25,
            description: "Sunny",
            icon: "https://openweathermap.org/img/wn/01d.png"
        },
        "london": {
            temperature: 18,
            description: "Cloudy",
            icon: "https://openweathermap.org/img/wn/03d.png"
        },
        "paris": {
            temperature: 22,
            description: "Rainy",
            icon: "https://openweathermap.org/img/wn/09d.png"
        },
        "surat": {
            temperature: 30,
            description: "Sunny",
            icon: "https://openweathermap.org/img/wn/01d.png"
        },
        "baroda": {
            temperature: 28,
            description: "Partly Cloudy",
            icon: "https://openweathermap.org/img/wn/02d.png"
        },
        "bardoli": {
            temperature: 27,
            description: "Clear",
            icon: "https://openweathermap.org/img/wn/01n.png"
        }
    };

    const cityNameInput = $('#city-name');
    const weatherContainer = $('#weather-container');
    const getWeatherButton = $('#get-weather-btn');
    const refreshButton = $('#refresh-btn');
    const citySpan = $('#city');
    const temperatureSpan = $('#temperature');
    const descriptionSpan = $('#description');
    const weatherIcon = $('#weather-icon');

    // Function to display weather data
    function displayWeather(city) {
        const data = weatherData[city];

        if (data) {
            citySpan.text(city);
            temperatureSpan.text(data.temperature);
            descriptionSpan.text(data.description);
            weatherIcon.attr('src', data.icon);
            weatherContainer.show();
        } else {
            alert("City not found in mock data.");
        }
    }

    // Event listener for the "Get Weather" button
    getWeatherButton.on('click', function () {
        const city = cityNameInput.val().trim();

        if (city) {
            displayWeather(city);
        } else {
            alert("Please enter a city name.");
        }
    });

    // Event listener for the "Refresh" button to refresh the data
    refreshButton.on('click', function () {
        const city = citySpan.text();
        if (city) {
            displayWeather(city); // Refresh weather data for the same city
        }
    });
});
