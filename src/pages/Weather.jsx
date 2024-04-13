import React, { useState } from 'react';
import WeatherForm from '../components/WeatherForm';
import WeatherIcon from '../components/WeatherIcon';

const Weather = () => {
  const currentDate = new Date();
  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const day = weekdays[currentDate.getDay()];
  const date = currentDate.getDate();
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const month = months[currentDate.getMonth()];
  const year = currentDate.getFullYear();
  const today_date = `${month} ${date}, ${year}`;

  const [weatherData, setWeatherData] = useState(null);

  const receiveDataFromForm = (data) => {
    setWeatherData(data);
  };

  return (
    <>
      <div className="main_header">
        <div className="row">
          <div className="col-md-10 col-12 mx-auto">
            <div className="container-fluid main_content">
              <WeatherForm sendData={receiveDataFromForm} />
              {weatherData && (
                <div className="tempInformation">
                  <div className="top_layer">
                    <p id="day">{day}</p>
                    <p id="today_date">{today_date}</p>
                  </div>
                  <div className="main_layer">
                    <p id="city_name">{weatherData.name + ', ' + weatherData.sys.country}</p>
                    <div className="middle_layer">
                      <p id="temp_status"><WeatherIcon iconCode={weatherData.weather[0].icon} /></p>
                      <p id="temp"><span id="temp_real_val">{weatherData.main.temp}</span><sup>o</sup>C</p>
                      <p id="weather-desc">{weatherData.weather[0].description}</p>
                    </div>
                    <div className='weath-details'>
                      <div className='left-details'>
                        <div>
                          <p className="label">Min Temp</p>
                          <p>{weatherData.main.temp_min}</p>
                        </div>
                        <div>
                          <p className="label">Max Temp</p>
                          <p>{weatherData.main.temp_max}</p>
                        </div>
                      </div>
                      <div className='right-details'>
                        <div>
                          <p className="label">Wind Speed</p>
                          <p>{weatherData.wind.speed}</p>
                        </div>
                        <div>
                          <p className="label">Humidity</p>
                          <p>{weatherData.main.humidity}</p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Weather;
