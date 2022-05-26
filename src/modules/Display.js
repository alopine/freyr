import { k2c, k2f, km2miles } from 'weather-units-conversion';

export default class Display {
  static displayCurrentWeather(weather) {
    console.log(`Temperature: ${k2f(weather.main.temp)}`)
  }

  static displayForecast(forecast) {

  }

  static toggleUnits(unit) {

  }
}
