// Returns current weather and forecast data for a given location as an array of two JSON objects
async function getWeather(lat, lon) {
  const currentResponse = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}`,
    { mode: 'cors' },
  );
  const currentWeatherData = await currentResponse.json();
  const forecastResponse = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=${process.env.API_KEY}`,
    { mode: 'cors' },
  );
  const forecastData = await forecastResponse.json();
  return [currentWeatherData, forecastData];
}

export default getWeather;
