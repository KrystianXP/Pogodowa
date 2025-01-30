const API_KEY = '9cd202f507b3305cadeb8928725a4d08';

const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const fetchWeatherData = async (city) => {
const response = await fetch(`${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`);

    if (!response.ok) {
        throw new Error('Failed to fetch weather data');
    }
    return response.json();
};

export const fetchForecastData = async (city) => {
    const response = await fetch(`${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`);
    if (!response.ok) {
        throw new Error('Failed to fetch forecast data');
    }
    return response.json();
};

