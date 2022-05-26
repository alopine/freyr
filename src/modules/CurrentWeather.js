async function getCurrentWeather(location) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${process.env.API_KEY}`,
    { mode: 'cors' },
  );
  const weatherData = await response.json();
  return weatherData;
}

export default getCurrentWeather;
