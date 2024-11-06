import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import '../App.css';
import {useState} from 'react';
const Weatherapp=()=>{ 
    const [weatherInfo,setWeatherInfo]=useState({
        city:"Delhi",
        feelslike:24.84,
        temp:25.05,
        tempMin:25.05,
        tempMax:25.05,
        humidity:47,
        weather:"haze",
    });
    let updateinfo=(newinfo)=>{
        setWeatherInfo(newinfo);
    }
    return(
      <div className="outer">
        <h2 style={{textAlign:"center"}} >Weather in Your City</h2>
        <SearchBox updateInfo={updateinfo}/>
        <br></br>
        <InfoBox info={weatherInfo}/>  
      </div>
    );
}
export default Weatherapp;
