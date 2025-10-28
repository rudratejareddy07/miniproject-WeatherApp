import SearchBox from './SearchBox.jsx';
import InfoBox from './InfoBox.jsx';
import ForecastBox from './ForecastBox.jsx';
import { useState, useEffect } from "react";
import './WeatherApp.css';

export default function WeatherApp() {
    let [weatherInfo, setWeatherInfo] = useState(null);
    let [forecast, setForecast] = useState([]);
    let [history, setHistory] = useState([]);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const FORECAST_URL = "https://api.openweathermap.org/data/2.5/forecast";
    const API_KEY = "ce19788a8f0600d6cc248e6b4dedcf24";

    const getWeatherInfo = async (cityName) => {
        try {
            let response = await fetch(`${API_URL}?q=${cityName}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            if (jsonResponse.cod !== 200) {
                throw new Error(jsonResponse.message);
            }
            return {
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
        } catch (err) {
            console.error("Error fetching weather info:", err);
            return null; // Return null on error
        }
    };

    const getForecastInfo = async (cityName) => {
        try {
            let response = await fetch(`${FORECAST_URL}?q=${cityName}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            if (jsonResponse.cod !== "200") {
                throw new Error(jsonResponse.message);
            }
            let dailyForecasts = [];
            let processedDates = new Set();
            let today = new Date().toLocaleDateString();

            jsonResponse.list.forEach(item => {
                let date = new Date(item.dt * 1000).toLocaleDateString();
                if (date !== today && !processedDates.has(date) && dailyForecasts.length < 4) {
                    processedDates.add(date);
                    dailyForecasts.push({
                        date: item.dt_txt,
                        temp: item.main.temp,
                        weather: item.weather[0].description,
                        tempMin: item.main.temp_min,
                        tempMax: item.main.temp_max,
                        humidity: item.main.humidity,
                    });
                }
            });
            return dailyForecasts;
        } catch (err) {
            console.error("Error fetching forecast info:", err);
            return []; // Return empty array on error
        }
    };

    const fetchInitialWeather = async () => {
        let initialCity = "Hyderabad";
        let newWeatherInfo = await getWeatherInfo(initialCity);
        if (newWeatherInfo) {
            let newForecast = await getForecastInfo(initialCity);
            setWeatherInfo(newWeatherInfo);
            setForecast(newForecast);
        }
    };

    useEffect(() => {
        fetchInitialWeather();
    }, []); // Empty dependency array ensures this runs only once on mount

    const updateWeather = (newWeatherInfo, newForecast) => {
        setWeatherInfo(newWeatherInfo);
        setForecast(newForecast);
        const existingIndex = history.findIndex(item => item.weatherInfo.city.toLowerCase() === newWeatherInfo.city.toLowerCase());
        if (existingIndex === -1) {
            setHistory([{ weatherInfo: newWeatherInfo, forecast: newForecast }, ...history]);
        }
    };

    return (
        <div className="weather-app">
            <h1>Weather App</h1>
            <SearchBox updateWeather={updateWeather} history={history} />
            <div className="main-content">
              {weatherInfo ? <InfoBox info={weatherInfo} /> : <p>Loading weather...</p>}
              <ForecastBox forecast={forecast} />
            </div>
        </div>
    )
}
