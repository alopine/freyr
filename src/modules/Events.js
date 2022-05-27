import { handleSearch, handleRequest, LastCoords } from './App';
import Display from './Display';
import { formatWeather, formatForecast } from './Format';
import getWeather from './Weather';

let fahrenheit = true;
const coords = new LastCoords();

export default class Events {
  static loadPage() {
    handleRequest('San Francisco').then((weather) => {
      this.getWeather(weather);
    }).then(() => {
      this.searchListener();
      this.unitToggleListener();
    });
  }

  static searchListener() {
    const search = document.querySelector('.search');
    search.addEventListener('submit', () => {
      this.submitSearch();
    });
  }

  static submitSearch() {
    handleRequest(handleSearch()).then((weather) => {
      // Store coordinates based on first JSON object in array
      this.getWeather(weather);
    }).then(() => {
      // Add listener to unit toggle button
      this.unitToggleListener();
      // Clear searchbar
      document.getElementById('searchbar').value = '';
    });
  }

  static unitToggleListener() {
    const toggleButton = document.getElementById('toggleButton');
    toggleButton.addEventListener('click', () => {
      getWeather(coords.getLat(), coords.getLon()).then((weather) => {
        // Toggle fahrenheit active state
        fahrenheit = !fahrenheit;
        this.getWeather(weather);
      }).then(() => {
        this.unitToggleListener();
      });
    });
  }

  static getWeather(weather) {
    coords.setLat(weather[0].coord.lat);
    coords.setLon(weather[0].coord.lon);
    Display.displayCurrentWeather(formatWeather(weather[0], fahrenheit));
    Display.displayForecast(formatForecast(weather[1], fahrenheit));
  }
}
