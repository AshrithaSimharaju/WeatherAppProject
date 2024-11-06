import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useState} from 'react';
import '../App.css';
const SearchBox=({updateInfo})=>{
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="409f1463f4a687ea4d2bf3e4626e05bc";
    const [city,setCity]=useState("")
    const [err,setError]=useState(false)
    let getweatherinfo=async()=>{
        try{
      let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      let jsonresponse=await response.json();
      console.log(jsonresponse);
       const result={
        city:city,
        FeelLike:jsonresponse.main.feels_like,
        temp:jsonresponse.main.temp,
        tempMax:jsonresponse.main.temp_max,
        tempMin:jsonresponse.main.temp_min,
        humidity:jsonresponse.main.humidity,
        weather:jsonresponse.weather[0].description,
   }
   console.log(result);
   return result;
}
catch(err){
    throw err;
}
}
    const handler=(event)=>{
          setCity(event.target.value);
    }
    const handleform=async(event)=>{
        try{
        event.preventDefault();
        console.log(city);
        setCity("");
        let newinfo=await getweatherinfo();
        updateInfo(newinfo);
        }
        catch(err){
            setError(true);
        }
    }
    return(
         <div>
         <form onSubmit={handleform}>
            <div className="search-box">
                <div>
                <TextField id="outlined-basic" label="cityname" variant="outlined" value={city} onChange={handler} required/>
                <br></br><br></br>
                <Button variant="contained" type="submit" className="btn" style={{marginBottom:"25px"}}>Search</Button>
                {err && <p style={{color:'green'}}>No such place exist!</p>}
                </div>
            </div>
          </form>
        </div>
    );
}
export default SearchBox;