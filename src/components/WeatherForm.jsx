import React,{useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'

const WeatherForm = ({sendData}) => {
  const[cityName,setCityName]=useState('')
  const [weatherData, setWeatherData] = useState(null);
 
  // const appid=process.env.REACT_APP_API_KEY;
const url=`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=4ae1037be9689befbc7edc7c6be7abf8`;
   const message=''
   const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(url);
      setWeatherData(response.data);
      toast.success('Weather data fetched successfully');
      sendData(response.data);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        // City not found
        toast.error('City not found');
      } else {
        // Other error
        toast.error('An error occurred');
      }
      setWeatherData(null);
    }
  }
  return (
    <>
        <form className="temp_form" onSubmit={handleSubmit}>
        <input
          type="text"
          id="cityName"
          placeholder="Enter your city name..."
          autoComplete="off"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
        />
        <br />
        <input type="submit" value="Search" id="submitBtn" />
      </form>
    </>
  )
}

export default WeatherForm