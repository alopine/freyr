import { k2c, k2f, hpa2inhg } from 'weather-units-conversion';

const d2d = require('degrees-to-direction');

function formatDate(timestamp, offset) {
  return new Date((timestamp + offset) * 1000).toUTCString().split(' ');
}

function formatTime(date) {
  return date[4].slice(0, -3);
}

export default function formatWeather(weather, fahrenheit) {
  const localDate = formatDate(weather.dt, weather.timezone);
  const tempConvert = fahrenheit ? k2f : k2c;
  const degree = fahrenheit ? '°F' : '°C';
  const currentWeather = {
    img: `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`,
    temperature: `${tempConvert(weather.main.temp)} ${degree}`,
    feel: `${tempConvert(weather.main.feels_like)} ${degree}`,
    max: `${tempConvert(weather.main.temp_max)} ${degree}`,
    min: `${tempConvert(weather.main.temp_min)} ${degree}`,
    place: `${weather.name}, ${weather.sys.country}`,
    date: `${localDate[0]} ${localDate[2]} ${localDate[1]}, ${localDate[3]}`,
    time: formatTime(localDate),
    desc: weather.weather[0].description,
    pressure: `${hpa2inhg(weather.main.pressure, 2)} in`,
    humidity: `${weather.main.humidity}%`,
    windDir: d2d(weather.wind.deg),
    wind: fahrenheit ? `${Math.round(weather.wind.speed * 2.237)} mph` : `${weather.wind.speed} m/s`,
    cloudiness: `${weather.clouds.all}%`,
    rain: `${weather.rain ? weather.rain['1h'] : 'No rain'}`,
    snow: `${weather.snow ? weather.snow['1h'] : 'No snow'}`,
    sunrise: formatTime(formatDate(weather.sys.sunrise, weather.timezone)),
    sunset: formatTime(formatDate(weather.sys.sunset, weather.timezone)),
  };
  return currentWeather;
}
