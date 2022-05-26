import {
  k2c, k2f, km2miles, hpa2inhg,
} from 'weather-units-conversion';

const d2d = require('degrees-to-direction');

export default class Display {
  static displayCurrentWeather(weather, units) {
    console.log(
      `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`,
    );
    console.log(`Temperature: ${k2f(weather.main.temp)}`);
    console.log(`Feels Like: ${k2f(weather.main.feels_like)}`);
    console.log(`Today's Min: ${k2f(weather.main.temp_min)}`);
    console.log(`Today's Max: ${k2f(weather.main.temp_max)}`);
    console.log(`Place: ${weather.name}, ${weather.sys.country}`);
    const date = new Date(weather.dt * 1000);
    const locale = window.navigator.language;
    console.log(
      `Date: ${date.toLocaleDateString(locale, {
        weekday: 'long',
      })}, ${date.toLocaleDateString(locale, {
        month: 'long',
        day: 'numeric',
      })}, ${date.toLocaleDateString(locale, {
        year: 'numeric',
      })}`,
    );
    console.log(`Time: ${date.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    })}`);
    console.log(`Description: ${weather.weather[0].description}`);
    console.log(`Pressure: ${hpa2inhg(weather.main.pressure, 2)} in`);
    console.log(`Humidity: ${weather.main.humidity}%`);
    console.log(`Wind: ${d2d(weather.wind.deg)} ${Math.round(weather.wind.speed * 2.237)} mph`);
    console.log(`Cloudiness: ${weather.clouds.all}%`);
    // Precipitation
    if (weather.rain) {
      console.log(`Rain: ${weather.rain['1h']} mm`);
    }
    if (weather.snow) {
      console.log(`Snow: ${weather.snow['1h']} mm`);
    }
    const sunrise = new Date(weather.sys.sunrise * 1000).toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
    const sunset = new Date(weather.sys.sunset * 1000).toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
    console.log(`Sunrise: ${sunrise}`);
    console.log(`Sunset: ${sunset}`);
  }

  static displayForecast(forecast, units) {}

  static toggleUnits(unit) {
    // Reruns this.displayCurrentWeather and this.displayForecast but with
  }
}
