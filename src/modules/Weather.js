async function getCurrentWeather(lat, lon) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}`,
    { mode: 'cors' },
  );
  const weatherData = await response.json();
  return weatherData;
}

// async function getForecast(location) {

// }

export default getCurrentWeather;
