import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './InfoBox.css';

export default function InfoBox({info}) {
 

  return (
    <div className='InfoBox'>
      <h1 style={{ color: "black" }}>Weather Info - {info.weather}</h1>
      <Card className='innerInfoBox'>
        <CardMedia
          sx={{ height: 140 }}
          image="https://d2j02ha532z66v.cloudfront.net/wp-content/uploads/2023/01/clouds.jpg"
          title="Weather Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city?.toUpperCase() || "City"}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Temperature: {info.temp}°C<br />
            Feels Like: {info.feelslike}°C<br />
            Min: {info.tempMin}°C | Max: {info.tempMax}°C<br />
            Humidity: {info.humidity}%
          </Typography>
        </CardContent>
        
      </Card>
    </div>
  );
}






