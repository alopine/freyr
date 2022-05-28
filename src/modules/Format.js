import { k2c, k2f, hpa2inhg } from 'weather-units-conversion';

const d2d = require('degrees-to-direction');

// Given a Unix timestamp and timezone offset,
// return a date in that timezone with date elements
// split into array
function formatDate(timestamp, offset) {
  return new Date((timestamp + offset) * 1000).toUTCString().split(' ');
}

// Given a formatted date, return time in 24hr format
function formatTime(date) {
  return date[4].slice(0, -3);
}

// Given a formatted date, return shortened day of week
function formatDay(date) {
  return date[0].slice(0, -1);
}

// Given weather data, return object with formatted current weather data
function formatWeather(weather, fahrenheit) {
  const localDate = formatDate(weather.dt, weather.timezone);
  const tempConvert = fahrenheit ? k2f : k2c;
  const degree = fahrenheit ? '°F' : '°C';
  const currentWeather = {
    img: `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`,
    temperature: Math.round(tempConvert(weather.main.temp)),
    symbol: degree,
    oppSymbol: fahrenheit ? '°C' : '°F',
    feel: `${Math.round(tempConvert(weather.main.feels_like))} ${degree}`,
    max: `${Math.round(tempConvert(weather.main.temp_max))} ${degree}`,
    min: `${Math.round(tempConvert(weather.main.temp_min))} ${degree}`,
    place: `${weather.name}, ${weather.sys.country}`,
    date: `${localDate[0]} ${localDate[2]} ${localDate[1]}, ${localDate[3]}`,
    time: formatTime(localDate),
    desc: weather.weather[0].description,
    pressure: `${hpa2inhg(weather.main.pressure, 2)} in`,
    humidity: `${weather.main.humidity}%`,
    windDir: d2d(weather.wind.deg),
    wind: fahrenheit
      ? `${Math.round(weather.wind.speed * 2.237)} mph`
      : `${weather.wind.speed} m/s`,
    cloudiness: `${weather.clouds.all}%`,
    rain: `${weather.rain ? `${weather.rain['1h']} mm` : 'No rain'}`,
    snow: `${weather.snow ? `${weather.snow['1h']} mm` : 'No snow'}`,
    sunrise: formatTime(formatDate(weather.sys.sunrise, weather.timezone)),
    sunset: formatTime(formatDate(weather.sys.sunset, weather.timezone)),
  };
  return currentWeather;
}

// Given weather data, returns array of objects with weather forecast data
function formatForecast(weather, fahrenheit) {
  const offset = weather.timezone_offset;
  const tempConvert = fahrenheit ? k2f : k2c;
  const degree = fahrenheit ? '°F' : '°C';
  const forecastDays = weather.daily.slice(1);
  const forecastData = [];
  forecastDays.forEach((day) => {
    forecastData.push({
      img: `http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`,
      day: formatDay(formatDate(day.dt, offset)),
      max: `${Math.round(tempConvert(day.temp.max))} ${degree}`,
      min: `${Math.round(tempConvert(day.temp.min))} ${degree}`,
      desc: day.weather[0].description,
    });
  });
  return forecastData;
}

export { formatWeather, formatForecast };
