import { createSlice } from '@reduxjs/toolkit';
import { TEMPERATURE_UNITS } from '../constants/temperatureUnits';

const initialState = {
    temperatureUnits: TEMPERATURE_UNITS.CELSIUS,
    weatherData: null, 
    forecastData: null, 
};

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        setTemperatureUnits(state, action) {
            state.temperatureUnits = action.payload;
        },
        setWeatherData(state, action) {
            state.weatherData = action.payload; 
        },
        setForecastData(state, action) {
            state.forecastData = action.payload; 
        },
    },
});

export const { setTemperatureUnits, setWeatherData, setForecastData } = weatherSlice.actions;



