import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({updateWeather, history}) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    let [loading, setLoading] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const FORECAST_URL = "https://api.openweathermap.org/data/2.5/forecast";
    const API_KEY = "ce19788a8f0600d6cc248e6b4dedcf24";

    let getWeatherInfo = async (cityName) => {
        try {
            // Get current weather
            let response = await fetch(`${API_URL}?q=${cityName}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            if (jsonResponse.cod !== 200) {
                throw new Error(jsonResponse.message);
            }
            
            let result = {
                city: cityName,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelslike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
                windSpeed: jsonResponse.wind.speed,
                sunrise: new Date(jsonResponse.sys.sunrise * 1000).toLocaleTimeString(),
                sunset: new Date(jsonResponse.sys.sunset * 1000).toLocaleTimeString(),
            };
            return result;
        } catch (err) {
            throw err;
        }
    }

    let getForecastInfo = async (cityName) => {
        try {
            // Get 5-day/3-hour forecast
            let response = await fetch(`${FORECAST_URL}?q=${cityName}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            if (jsonResponse.cod !== "200") {
                throw new Error(jsonResponse.message);
            }
            
            // Process forecast data to get daily forecasts
            let dailyForecasts = [];
            let processedDates = new Set();
            let today = new Date().toLocaleDateString();

            jsonResponse.list.forEach(item => {
                let date = new Date(item.dt * 1000).toLocaleDateString();
                
                // Take one forecast per day (around noon), excluding today
                if (date !== today && !processedDates.has(date) && dailyForecasts.length < 4) {
                    processedDates.add(date);
                    dailyForecasts.push({
                        date: item.dt_txt,
                        temp: item.main.temp,
                        tempMin: item.main.temp_min,
                        tempMax: item.main.temp_max,
                        humidity: item.main.humidity,
                        weather: item.weather[0].description,
                    });
                }
            });
            
            return dailyForecasts;
        } catch (err) {
            throw err;
        }
    }

    let change = (event) => {
        setCity(event.target.value);
    }

    const fetchWeather = async (cityName) => {
        if (!cityName) return;
        setLoading(true);
        setError(false);
        try {
            // Get both current weather and forecast
            let newinfo = await getWeatherInfo(cityName);
            let forecast = await getForecastInfo(cityName);
            
            updateWeather(newinfo, forecast);
            setCity(""); // Clear input after search
        } catch(err) {
            setError(true);
        } finally {
            setLoading(false);
        }
    }

    let handleSubmit = async (event) => {
        event.preventDefault();
        fetchWeather(city);
    }

    let handleHistoryClick = (historyItem) => {
        updateWeather(historyItem.weatherInfo, historyItem.forecast);
    }

    return (
        <div className="SearchBox">
            <form onSubmit={handleSubmit}>
                <TextField 
                    id="outlined-basic" 
                    label="Enter City Name" 
                    value={city} 
                    onChange={change} 
                    variant="outlined" 
                    fullWidth
                />
                <Button type="submit" variant="contained" fullWidth disabled={loading}>
                    {loading ? <CircularProgress size={24} color="inherit" /> : "Search"}
                </Button>
            </form>
            {error && <p className="error">No such city found</p>}
            {history && history.length > 0 && (
                <div className="history-container">
                    <p>Recent Searches:</p>
                    <Stack direction="row" spacing={1}>
                        {history.map((item, index) => (
                            <Chip
                                key={index}
                                label={item.weatherInfo.city}
                                onClick={() => handleHistoryClick(item)}
                            />
                        ))}
                    </Stack>
                </div>
            )}
        </div>
    )
}
