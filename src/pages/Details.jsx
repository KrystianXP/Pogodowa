import { useSelector } from 'react-redux';
import './Details.css';
import WeatherIcon from '../components/WeatherIcon';

export function Details() {
    const weatherData = useSelector((state) => state.weather.weatherData);

    if (!weatherData) {
        return (
            <div className="error-container">
                <h1 className="header">No weather data available</h1>
                <p>Please select a city from the home page</p>
            </div>
        );
    }

    const formatWindDirection = (deg) => {
        const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
        return directions[Math.round(deg / 45) % 8];
    };

    return (
        <div className="details-container">
            <header id="header">
                <h2>{weatherData.name}</h2>
                <div id="Ikona">
                    <WeatherIcon 
                        cloudiness={weatherData.clouds.all} 
                        rain={weatherData.rain ? weatherData.rain['1h'] : 0} 
                    />
                </div>
            </header>

            <div id="Warunki">
                <p>
                    <span>Aktualna temperatura</span>
                    <span>{Math.round(weatherData.main.temp)}°C</span>
                </p>
                <p>
                    <span>Warunki</span>
                    <span>{weatherData.weather[0].description}</span>
                </p>
                <p>
                    <span>Opady deszczu</span>
                    <span>{weatherData.rain ? `${weatherData.rain['1h']} mm` : '0 mm'}</span>
                </p>
                <p>
                    <span>Wiatr</span>
                    <span>
                        {weatherData.wind.speed} km/h ({formatWindDirection(weatherData.wind.deg)})
                    </span>
                </p>
                <p>
                    <span>Zachmurzenie</span>
                    <span>{weatherData.clouds.all}%</span>
                </p>
            </div>

            <div id="Przewidywana">
                <h2>Przewidywana pogoda na 5 dni</h2>
                <ul id="forecast">
                    {['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek'].map((day, index) => (
                        <li key={day} style={{ '--i': index }}>
                            <span>{day}</span>
                            <span className="forecast-temp">
                                {Math.round(Math.random() * 10 - 2)}°C
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}