export default class Display {
  static displayCurrentWeather(weather) {
    const currentWeather = document.querySelector('.currentWeather');
    currentWeather.innerHTML = `
    <img src="${weather.img}">
    <section>
      <p>Temperature: ${(weather.temperature)}</p>
      <button id="toggleButton">Celsius/Fahrenheit</button>
      <p>Feels Like: ${(weather.feel)}</p>
      <p>Today's Max/Min: ${(weather.max)} / ${(
  weather.min)}</p>
    </section>
    <section>
      <p>Place: ${weather.place}</p>
      <p>Date: ${weather.date}</p>
      <p>Time: ${weather.time}</p>
      <p>Description: ${weather.desc}</p>
    </section>
    <section>
      <p>Pressure: ${weather.pressure}</p>
      <p>Humidity: ${weather.humidity}</p>
      <p>Wind: ${weather.wind}</p>
      <p>Cloudiness: ${weather.cloudiness}</p>
      <p>Rain: ${weather.rain}</p>
      <p>Snow: ${weather.snow}</p>
      <p>Sunrise: ${weather.sunrise}</p>
      <p>Sunset: ${weather.sunset}</p>
    </section>
    `;
  }

  static displayForecast(forecast) {}

  static toggleUnits(coords, fahrenheit) {
    
  }

  static displayError(error) {
    
  }
}
