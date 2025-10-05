import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({updateInfo, updateForecast}) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const FORECAST_URL = "https://api.openweathermap.org/data/2.5/forecast";
    const API_KEY = "ce19788a8f0600d6cc248e6b4dedcf24";

    let getWeatherInfo = async () => {
        try {
            // Get current weather
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelslike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };
            return result;
        } catch (err) {
            throw err;
        }
    }

    let getForecastInfo = async () => {
        try {
            // Get 5-day/3-hour forecast
            let response = await fetch(`${FORECAST_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            
            // Process forecast data to get daily forecasts
            let dailyForecasts = [];
            let processedDates = new Set();
            
            jsonResponse.list.forEach(item => {
                let date = new Date(item.dt * 1000).toLocaleDateString();
                
                // Take one forecast per day (around noon)
                if (!processedDates.has(date) && dailyForecasts.length < 7) {
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

    let handleSubmit = async (event) => {
        try {
            event.preventDefault();
            setError(false);
            console.log("handleSubmit function invoked");
            console.log(city);
            
            // Get both current weather and forecast
            let newinfo = await getWeatherInfo();
            let forecast = await getForecastInfo();
            
            updateInfo(newinfo);
            updateForecast(forecast);
        } catch {
            setError(true);
        }
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
                />
                <br></br>
                <br></br>
                <Button type="submit" variant="contained">Search</Button>
                {error && <h2 style={{color:"red"}}>No such city found</h2>}
            </form>
        </div>
    )
}