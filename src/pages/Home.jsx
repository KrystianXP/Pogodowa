import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setWeatherData, setForecastData } from '../slices/weatherSlice';
import { fetchWeatherData, fetchForecastData } from '../functions';
import { useNavigate } from 'react-router-dom';
import './Home.css';


const cities = [
    { name: 'Warszawa', id: 1 },
    { name: 'Kraków', id: 2 },
    { name: 'Wrocław', id: 3 },
    { name: 'Gdańsk', id: 4 },
    { name: 'Poznań', id: 5 },
];

export function Home() {
    const [searchTerm, setSearchTerm] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleCityClick = async (city) => {
        console.log(`Fetching weather data for ${city.name}`);
        try {
            const weatherData = await fetchWeatherData(city.name);
            const forecastData = await fetchForecastData(city.name);
            console.log('Weather data fetched:', weatherData);
            console.log('Forecast data fetched:', forecastData);
            dispatch(setWeatherData(weatherData));
            dispatch(setForecastData(forecastData));
            navigate('/details');
        } catch (error) {
            console.error('Error fetching weather data:', error);
            setErrorMessage('Failed to fetch weather data. Please try again.');
        }
    };

    const filteredCities = cities.filter(city =>
        city.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div id="app">
            <div id="header">
                <div id ="napis">
                    <h1 className="header">Weather App</h1>
                    {errorMessage && <p className="error">{errorMessage}</p>} 
                </div>
                <div id = "wyszukiwarka">
                    <input
                        type="text"
                        placeholder="Wyszukaj miasto..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        />
                </div>
            </div>
            <div id = "miasta">
            <ul className="Cities">
                {filteredCities.map(city => (
                    <li key={city.id} onClick={() => handleCityClick(city)} style={{ cursor: 'pointer' }}>
                        {city.name}
                    </li>
                ))}
            </ul>
            </div>
            <div id = "zdjęcie" >
            <img src="src/Img/Dolomity-latem-–-najpiekniejsze-jeziora-w-gorach-shutterstock.com-Alina-Troeva.jpg" alt="Scenic view" />
            </div>
        </div>
    );
}
