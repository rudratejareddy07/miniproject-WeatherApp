import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import AirIcon from '@mui/icons-material/Air';
import ActivitySuggester from './ActivitySuggester';

export default function InfoBox({info}) {
    const getWeatherImage = (weather) => {
        const weatherLower = weather.toLowerCase();
        if (weatherLower.includes('rain')) {
            return 'https://images.unsplash.com/photo-1428908728789-d2de25dbd4e2?w=400';
        } else if (weatherLower.includes('cloud')) {
            return 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=400';
        } else if (weatherLower.includes('clear')) {
            return 'https://images.unsplash.com/photo-1601297183305-6df142704ea2?w=400';
        } else if (weatherLower.includes('smoke')) {
            return 'https://images.unsplash.com/photo-1585435465943-3453396695a7?w=400';
        } else if (weatherLower.includes('mist')) {
            return 'https://images.unsplash.com/photo-1543964197-033b2333d2e2?w=400';
        } else {
            return 'https://images.unsplash.com/photo-1500740516770-92807e196fe5?w=400';
        }
    };

    const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1500740516770-92807e196fe5?w=400';
 
  return (
    <div className='InfoBox'>
      <Card>
        <CardMedia
          sx={{ height: 140 }}
          image={getWeatherImage(info.weather)}
          title="Weather Image"
          onError={(e) => {
            e.target.onerror = null; // Prevent infinite loop
            e.target.src = FALLBACK_IMAGE;
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city?.toUpperCase()} - <i>{info.weather}</i>
          </Typography>
          <Typography variant="body2" color="text.secondary" component="div" className="weather-details">
            <p>Temperature: {info.temp}°C</p>
            <p>Feels Like: {info.feelslike}°C</p>
            <p>Min: {info.tempMin}°C | Max: {info.tempMax}°C</p>
            <p>Humidity: {info.humidity}%</p>
            <p><AirIcon /> Wind Speed: {info.windSpeed} m/s</p>
            <p><WbSunnyIcon /> Sunrise: {info.sunrise}</p>
            <p><NightsStayIcon /> Sunset: {info.sunset}</p>
          </Typography>
          <ActivitySuggester weather={info.weather} />
        </CardContent>
      </Card>
    </div>
  );
}
