import React from 'react';
import { RiSunFill, RiMoonClearFill, RiCloudyFill, RiShowersFill, RiRainyFill, RiThunderstormsFill, RiSnowyFill, RiMistFill } from 'react-icons/ri';

const WeatherIcon = ({ iconCode, size = 64 }) => {
  let color;
  switch (iconCode) {
    case '01d':
      color = '#ffcd00'; // Yellow for clear sky (day)
      break;
    case '01n':
      color = '#b3cde0'; // Light blue for clear sky (night)
      break;
    case '02d':
    case '02n':
    case '03d':
    case '03n':
    case '04d':
    case '04n':
      color = '#a6a6a6'; // Gray for clouds
      break;
    case '09d':
    case '09n':
    case '10d':
    case '10n':
      color = '#1565c0'; // Blue for rain
      break;
    case '11d':
    case '11n':
      color = '#1e88e5'; // Dark blue for thunderstorm
      break;
    case '13d':
    case '13n':
      color = '#ffffff'; // White for snow
      break;
    case '50d':
    case '50n':
      color = '#bdbdbd'; // Light gray for mist
      break;
    default:
      color = 'black'; // Default color
  }

  return (
    <span style={{ color }}>
      {iconCode === '01d' ? <RiSunFill size={size} /> :
        iconCode === '01n' ? <RiMoonClearFill size={size} /> :
        iconCode === '09d' || iconCode === '09n' || iconCode === '10d' || iconCode === '10n' ? <RiRainyFill size={size} /> :
        iconCode === '11d' || iconCode === '11n' ? <RiThunderstormsFill size={size} /> :
        iconCode === '13d' || iconCode === '13n' ? <RiSnowyFill size={size} /> :
        iconCode === '50d' || iconCode === '50n' ? <RiMistFill size={size} /> :
        <RiCloudyFill size={size} />}
    </span>
  );
};

export default WeatherIcon;
