import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './ForecastBox.css';

export default function ForecastBox({ forecast }) {
  if (!forecast || forecast.length === 0) {
    return null;
  }

  const getWeatherImage = (weather) => {
    const weatherLower = weather.toLowerCase();
    if (weatherLower.includes('rain')) {
      return 'https://images.unsplash.com/photo-1428908728789-d2de25dbd4e2?w=400';
    } else if (weatherLower.includes('cloud')) {
      return 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=400';
    } else if (weatherLower.includes('clear')) {
      return 'https://images.unsplash.com/photo-1601297183305-6df142704ea2?w=400';
    } else {
      return 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=400';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <div className='ForecastBox'>
      <h2 style={{ color: "black", textAlign: "center", marginBottom: "20px" }}>
        7-Day Forecast
      </h2>
      <div className='forecast-grid'>
        {forecast.map((day, index) => (
          <Card key={index} className='forecast-card'>
            <CardMedia
              sx={{ height: 100 }}
              image={getWeatherImage(day.weather)}
              title={day.weather}
            />
            <CardContent>
              <Typography variant="h6" component="div" style={{ fontWeight: 'bold' }}>
                {formatDate(day.date)}
              </Typography>
              <Typography variant="body2" color="text.secondary" style={{ textTransform: 'capitalize' }}>
                {day.weather}
              </Typography>
              <Typography variant="body1" style={{ marginTop: '10px', fontWeight: 'bold' }}>
                {Math.round(day.temp)}°C
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Min: {Math.round(day.tempMin)}°C | Max: {Math.round(day.tempMax)}°C
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Humidity: {day.humidity}%
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}