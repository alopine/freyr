import handleRequest from './App';
import Search from './Search';
import Display from './Display';

let fahrenheit = true;

export default class Events {
  static loadPage() {
    handleRequest('San Francisco').then((weather) => {
      Display.displayCurrentWeather(weather);
    });
    this.searchbarListener();
    this.unitToggleListener();
  }

  static searchbarListener() {
    const searchButton = document.getElementById('searchButton');
    searchButton.addEventListener('click', () => {
      handleRequest(Search.handleSearch());
    });
  }

  static unitToggleListener() {
    const toggleButton = document.getElementById('toggleButton');
    toggleButton.addEventListener('click', () => {
      fahrenheit = !fahrenheit;
      Display.toggleUnits(fahrenheit);
    });
  }
}
