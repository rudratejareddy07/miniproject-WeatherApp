import SearchBox from './SearchBox.jsx';
import InfoBox from './InfoBox.jsx';
import ForecastBox from './ForecastBox.jsx';
import { useState } from "react";

export default function WeatherApp() {
    let [weatherInfo, setWeatherInfo] = useState({
        city: "Hyderabad",
        feelslike: 34,
        temp: 32,
        tempMin: 28,
        tempMax: 36,
        humidity: 65,
        weather: "haze"
    });

    let [forecast, setForecast] = useState([]);

    let updateInfo = (newinfo) => {
        setWeatherInfo(newinfo);
    }

    let updateForecast = (newForecast) => {
        setForecast(newForecast);
    }

    return (
        <div>
            <h1 style={{textAlign:'center', marginTop: '20px'}}>Weather App</h1>
            <SearchBox updateInfo={updateInfo} updateForecast={updateForecast} />
            <InfoBox info={weatherInfo} />
            <ForecastBox forecast={forecast} />
        </div>
    )
}