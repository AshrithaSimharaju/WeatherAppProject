import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import '../App.css';
const InfoBox=({info})=>{
    const RAIN_URL="https://media.istockphoto.com/id/538643314/photo/summer-rain-storm.jpg?s=612x612&w=0&k=20&c=6IAo7_K5vHlnLOk5vmi64seK2t2_apQNUIQ1JVeE8mk=";
    const HOT_URL="https://media.istockphoto.com/id/1268330725/photo/asphalt-road-panorama-in-countryside-on-sunny-spring-day.jpg?s=612x612&w=0&k=20&c=l2o6whhgLrM_7zskf0O45eoH9vctFzdyFgSUFC9XOPU=";
    const COLD_URL="https://images.unsplash.com/photo-1418985991508-e47386d96a71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8";
    return(
      <>
      <br></br>
      <div className="InfoBox">
    <Card sx={{ maxWidth: 360 }}>
      <CardMedia
        sx={{ height: 150 }}
        image={
          info.humidity > 80 
          ? RAIN_URL
           : info.temp >15 
           ? HOT_URL 
           : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
          {info.humidity >80 ? (
            <ThunderstormIcon />
          ) : info.temp >15 ? (
            <WbSunnyIcon />
          ) :(
            <AcUnitIcon />
          )}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
            <p>Temparature:{info.temp}&deg;C</p>
            <p>Humidity:{info.humidity}</p>
            <p>Min Temp:{info.tempMin}&deg;C</p>
            <p>Max Temp:{info.tempMax}&deg;C</p>
            <p>The weather can be described as {info.weather} and feels like{" "}{info.temp}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
      </div>
      </>
    );
}
export default InfoBox;