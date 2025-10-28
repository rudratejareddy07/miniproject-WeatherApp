import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './ForecastBox.css';

const formatDate = (dateString) => {
  const options = { weekday: 'short', month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

const getWeatherImage = (weather) => {
    const weatherLower = weather.toLowerCase();
    if (weatherLower.includes('rain')) {
        return 'https://images.unsplash.com/photo-1428908728789-d2de25dbd4e2?w=400';
    } else if (weatherLower.includes('cloud')) {
        return 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=400';
    } else if (weatherLower.includes('clear')) {
        return 'https://images.unsplash.com/photo-1601297183305-6df142704ea2?w=400';
    } else if (weatherLower.includes('smoke')) {
        return 'https://www.google.com/imgres?q=smoke%20weathet&imgurl=https%3A%2F%2Fsmartcdn.gprod.postmedia.digital%2Fedmontonjournal%2Fwp-content%2Fuploads%2F2024%2F05%2Fmg_4364.jpg%3Fquality%3D90%26strip%3Dall%26w%3D288%26h%3D216%26sig%3DC9Ytwdr53L4lB4uEJiyPLg&imgrefurl=https%3A%2F%2Fedmontonjournal.com%2Fnews%2Flocal-news%2Fedmonton-weather-widespread-wildfire-smoke-prompts-air-quality-advisory&docid=8F63-jXYfg8NcM&tbnid=dxNTnUoi5--IQM&vet=12ahUKEwiyzI-p8sWQAxVEd2wGHRX_Mk0QM3oECCsQAA..i&w=288&h=216&hcb=2&ved=2ahUKEwiyzI-p8sWQAxVEd2wGHRX_Mk0QM3oECCsQAA';
    } else if (weatherLower.includes('mist')) {
        return 'https://www.google.com/imgres?q=mist&imgurl=https%3A%2F%2Fimg.freepik.com%2Ffree-vector%2F3d-realistic-illustration-fog-grey-mist-cigarette-smoke_33099-754.jpg%3Fsemt%3Dais_hybrid%26w%3D740%26q%3D80&imgrefurl=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Ffog-mist&docid=ishDPhRq-mom9M&tbnid=_K2BbCimM79n2M&vet=12ahUKEwi9pJWg8cWQAxXhcWwGHQjjHaIQM3oECBkQAA..i&w=740&h=518&hcb=2&ved=2ahUKEwi9pJWg8cWQAxXhcWwGHQjjHaIQM3oECBkQAA';
    } else {
        return 'https://images.unsplash.com/photo-1500740516770-92807e196fe5?w=400'; // Default sky image for haze and other cases
    }
};

const FALLBACK_IMAGE = 'https://www.google.com/imgres?q=clouds&imgurl=https%3A%2F%2Fssec.si.edu%2Fsites%2Fdefault%2Ffiles%2FThinkstockPhotos-72967326.jpg&imgrefurl=https%3A%2F%2Fssec.si.edu%2Fstemvisions-blog%2Fwhat-are-clouds&docid=W-mn_vHVxw_LzM&tbnid=NMkO99dkbd2BhM&vet=12ahUKEwiHuLiA8sWQAxUWTWwGHWFjGM4QM3oECBgQAA..i&w=499&h=344&hcb=2&ved=2ahUKEwiHuLiA8sWQAxUWTWwGHWFjGM4QM3oECBgQAA';

export default function ForecastBox({ forecast }) {
  if (!forecast || forecast.length === 0) {
    return null; 
  }

  return (
      <div className='ForecastBox'>
        <h2>4-Day Forecast</h2>
        <div className='forecast-grid'>
          {forecast.map((day, index) => (
            <Card key={index} className='forecast-card'>
              <CardMedia
                sx={{ height: 100 }}
                image={getWeatherImage(day.weather)}
                title={day.weather}
                onError={(e) => {
                  e.target.onerror = null; // Prevent infinite loop
                  e.target.src = FALLBACK_IMAGE;
                }}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {formatDate(day.date)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {day.weather}
                </Typography>
                <Typography variant="body1">
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
