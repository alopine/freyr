import { handleSearch, handleRequest, LastCoords } from './App';
import Display from './Display';
import formatWeather from './Format';
import getCurrentWeather from './Weather';

let fahrenheit = true;
const coords = new LastCoords();

export default class Events {
  static loadPage() {
    handleRequest('San Francisco').then((weather) => {
      coords.setLat(weather.coord.lat);
      coords.setLon(weather.coord.lon);
      Display.displayCurrentWeather(formatWeather(weather, fahrenheit));
    }).then(() => {
      this.searchbarListener();
      this.unitToggleListener();
    });
  }

  static searchbarListener() {
    const searchButton = document.getElementById('searchButton');
    searchButton.addEventListener('click', () => {
      handleRequest(handleSearch()).then((weather) => {
        coords.setLat(weather.coord.lat);
        coords.setLon(weather.coord.lon);
        Display.displayCurrentWeather(formatWeather(weather, fahrenheit));
      }).then(() => {
        this.unitToggleListener();
      });
    });
  }

  static unitToggleListener() {
    const toggleButton = document.getElementById('toggleButton');
    toggleButton.addEventListener('click', () => {
      getCurrentWeather(coords.getLat(), coords.getLon()).then((weather) => {
        fahrenheit = !fahrenheit;
        Display.displayCurrentWeather(formatWeather(weather, fahrenheit));
      }).then(() => {
        this.unitToggleListener();
      });
    });
  }
}
