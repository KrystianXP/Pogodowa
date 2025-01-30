import React from 'react';


const weatherIcons = {
    clear: '☀️', 
    fewClouds: '🌤️', 
    scatteredClouds: '🌥️', 
    brokenClouds: '☁️', 
    showerRain: '🌧️', 
    rain: '🌧️', 
    thunderstorm: '⛈️', 
    snow: '❄️', 
    mist: '🌫️', 
};

const WeatherIcon = ({ cloudiness, rain }) => {
    let icon = weatherIcons.clear; 

    if (rain && rain > 0) {
        icon = weatherIcons.rain; 
    } else if (cloudiness < 20) {
        icon = weatherIcons.clear; 
    } else if (cloudiness < 50) {
        icon = weatherIcons.fewClouds; 
    } else if (cloudiness < 80) {
        icon = weatherIcons.scatteredClouds; 
    } else {
        icon = weatherIcons.brokenClouds; 
    }

    return <span>{icon}</span>; 
};

export default WeatherIcon;
