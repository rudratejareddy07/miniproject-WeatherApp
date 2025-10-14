// // import Card from '@mui/material/Card';
// // import CardContent from '@mui/material/CardContent';
// // import CardMedia from '@mui/material/CardMedia';
// // import Typography from '@mui/material/Typography';
// // import './ForecastBox.css';

// // export default function ForecastBox({ forecast }) {
// //   if (!forecast || forecast.length === 0) {
// //     return null;
// //   }

// //   const getWeatherImage = (weather) => {
// //     const weatherLower = weather.toLowerCase();
// //     if (weatherLower.includes('rain')) {
// //       return 'https://images.unsplash.com/photo-1428908728789-d2de25dbd4e2?w=400';
// //     } else if (weatherLower.includes('cloud')) {
// //       return 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=400';
// //     } else if (weatherLower.includes('clear')) {
// //       return 'https://images.unsplash.com/photo-1601297183305-6df142704ea2?w=400';
// //     } else {
// //       return 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=400';
// //     }
// //   };

// //   const formatDate = (dateString) => {
// //     const date = new Date(dateString);
// //     return date.toLocaleDateString('en-US', { 
// //       weekday: 'short', 
// //       month: 'short', 
// //       day: 'numeric' 
// //     });
// //   };

// //   return (
// //     <div className='ForecastBox'>
// //       <h2 style={{ color: "black", textAlign: "center", marginBottom: "20px" }}>
// //         7-Day Forecast
// //       </h2>
// //       <div className='forecast-grid'>
// //         {forecast.map((day, index) => (
// //           <Card key={index} className='forecast-card'>
// //             <CardMedia
// //               sx={{ height: 100 }}
// //               image={getWeatherImage(day.weather)}
// //               title={day.weather}
// //             />
// //             <CardContent>
// //               <Typography variant="h6" component="div" style={{ fontWeight: 'bold' }}>
// //                 {formatDate(day.date)}
// //               </Typography>
// //               <Typography variant="body2" color="text.secondary" style={{ textTransform: 'capitalize' }}>
// //                 {day.weather}
// //               </Typography>
// //               <Typography variant="body1" style={{ marginTop: '10px', fontWeight: 'bold' }}>
// //                 {Math.round(day.temp)}°C
// //               </Typography>
// //               <Typography variant="body2" color="text.secondary">
// //                 Min: {Math.round(day.tempMin)}°C | Max: {Math.round(day.tempMax)}°C
// //               </Typography>
// //               <Typography variant="body2" color="text.secondary">
// //                 Humidity: {day.humidity}%
// //               </Typography>
// //             </CardContent>
// //           </Card>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }







// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import './ForecastBox.css';

// export default function ForecastBox({ forecast }) {
//   if (!forecast || forecast.length === 0) {
//     return null;
//   }

//   // Filter out today's date and show only future dates
//   const today = new Date();
//   today.setHours(0, 0, 0, 0);
  
//   const futureForecast = forecast.filter(day => {
//     const forecastDate = new Date(day.date);
//     forecastDate.setHours(0, 0, 0, 0);
//     return forecastDate > today;
//   });

//   const getWeatherImage = (weather) => {
//     const weatherLower = weather.toLowerCase();
//     if (weatherLower.includes('rain')) {
//       return 'https://images.unsplash.com/photo-1428908728789-d2de25dbd4e2?w=400';
//     } else if (weatherLower.includes('cloud')) {
//       return 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=400';
//     } else if (weatherLower.includes('clear')) {
//       return 'https://images.unsplash.com/photo-1601297183305-6df142704ea2?w=400';
//     } else {
//       return 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=400';
//     }
//   };

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString('en-US', { 
//       weekday: 'short', 
//       month: 'short', 
//       day: 'numeric' 
//     });
//   };

//   return (
//     <div className='ForecastBox'>
//       <h2 style={{ color: "black", textAlign: "center", marginBottom: "20px" }}>
//         7-Day Forecast
//       </h2>
//       <div className='forecast-grid'>
//         {futureForecast.map((day, index) => (
//           <Card key={index} className='forecast-card'>
//             <CardMedia
//               sx={{ height: 100 }}
//               image={getWeatherImage(day.weather)}
//               title={day.weather}
//             />
//             <CardContent>
//               <Typography variant="h6" component="div" style={{ fontWeight: 'bold' }}>
//                 {formatDate(day.date)}
//               </Typography>
//               <Typography variant="body2" color="text.secondary" style={{ textTransform: 'capitalize' }}>
//                 {day.weather}
//               </Typography>
//               <Typography variant="body1" style={{ marginTop: '10px', fontWeight: 'bold' }}>
//                 {Math.round(day.temp)}°C
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 Min: {Math.round(day.tempMin)}°C | Max: {Math.round(day.tempMax)}°C
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 Humidity: {day.humidity}%
//               </Typography>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// }



// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import './ForecastBox.css';

// export default function ForecastBox({ forecast }) {
//   if (!forecast || forecast.length === 0) {
//     return null;
//   }

//   const getWeatherImage = (weather) => {
//     const weatherLower = weather.toLowerCase();
//     if (weatherLower.includes('rain')) {
//       return 'https://images.unsplash.com/photo-1428908728789-d2de25dbd4e2?w=400';
//     } else if (weatherLower.includes('cloud')) {
//       return 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=400';
//     } else if (weatherLower.includes('clear')) {
//       return 'https://images.unsplash.com/photo-1601297183305-6df142704ea2?w=400';
//     } else {
//       return 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=400';
//     }
//   };

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     const today = new Date();
//     today.setHours(0, 0, 0, 0);
//     const forecastDate = new Date(date);
//     forecastDate.setHours(0, 0, 0, 0);
    
//     // Check if it's today
//     if (forecastDate.getTime() === today.getTime()) {
//       return 'Today, ' + date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
//     }
    
//     return date.toLocaleDateString('en-US', { 
//       weekday: 'short', 
//       month: 'short', 
//       day: 'numeric' 
//     });
//   };

//   return (
//     <div className='ForecastBox'>
//       <h2 style={{ color: "black", textAlign: "center", marginBottom: "20px" }}>
//         5-Day Forecast
//       </h2>
//       <div className='forecast-grid'>
//         {forecast.map((day, index) => (
//           <Card key={index} className='forecast-card'>
//             <CardMedia
//               sx={{ height: 100 }}
//               image={getWeatherImage(day.weather)}
//               title={day.weather}
//             />
//             <CardContent>
//               <Typography variant="h6" component="div" style={{ fontWeight: 'bold' }}>
//                 {formatDate(day.date)}
//               </Typography>
//               <Typography variant="body2" color="text.secondary" style={{ textTransform: 'capitalize' }}>
//                 {day.weather}
//               </Typography>
//               <Typography variant="body1" style={{ marginTop: '10px', fontWeight: 'bold' }}>
//                 {Math.round(day.temp)}°C
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 Min: {Math.round(day.tempMin)}°C | Max: {Math.round(day.tempMax)}°C
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 Humidity: {day.humidity}%
//               </Typography>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// }





// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import './ForecastBox.css';

// export default function ForecastBox({ forecast }) {
//   if (!forecast || forecast.length === 0) {
//     return null;
//   }

//   const getWeatherImage = (weather) => {
//     const weatherLower = weather.toLowerCase();
//     if (weatherLower.includes('rain')) {
//       return 'https://images.unsplash.com/photo-1428908728789-d2de25dbd4e2?w=400';
//     } else if (weatherLower.includes('cloud')) {
//       return 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=400';
//     } else if (weatherLower.includes('clear')) {
//       return 'https://images.unsplash.com/photo-1601297183305-6df142704ea2?w=400';
//     } else {
//       return 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=400';
//     }
//   };

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     const today = new Date();
//     today.setHours(0, 0, 0, 0);
//     const forecastDate = new Date(date);
//     forecastDate.setHours(0, 0, 0, 0);
    
//     // Check if it's today
//     if (forecastDate.getTime() === today.getTime()) {
//       return 'Today, ' + date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
//     }
    
//     return date.toLocaleDateString('en-US', { 
//       weekday: 'short', 
//       month: 'short', 
//       day: 'numeric' 
//     });
//   };

//   return (
//     <div className='ForecastBox'>
//       <h2 style={{ color: "black", textAlign: "center", marginBottom: "20px" }}>
//         5-Day Forecast
//       </h2>
//       <div className='forecast-grid'>
//         {forecast.map((day, index) => (
//           <Card key={index} className='forecast-card'>
//             <CardMedia
//               sx={{ height: 100 }}
//               image={getWeatherImage(day.weather)}
//               title={day.weather}
//             />
//             <CardContent>
//               <Typography variant="h6" component="div" style={{ fontWeight: 'bold' }}>
//                 {formatDate(day.date)}
//               </Typography>
//               <Typography variant="body2" color="text.secondary" style={{ textTransform: 'capitalize' }}>
//                 {day.weather}
//               </Typography>
//               <Typography variant="body1" style={{ marginTop: '10px', fontWeight: 'bold' }}>
//                 {Math.round(day.temp)}°C
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 Min: {Math.round(day.tempMin)}°C | Max: {Math.round(day.tempMax)}°C
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 Humidity: {day.humidity}%
//               </Typography>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// }











import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './ForecastBox.css';

export default function ForecastBox({ forecast }) {
  if (!forecast || forecast.length === 0) {
    return null;
  }

  // Filter out today's date and show only future dates (next 5 days)
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const futureForecast = forecast.filter(day => {
    const forecastDate = new Date(day.date);
    forecastDate.setHours(0, 0, 0, 0);
    return forecastDate > today;
  }).slice(0, 5); // Limit to 5 days

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
        5-Day Forecast
      </h2>
      <div className='forecast-grid'>
        {futureForecast.map((day, index) => (
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