import handleRequest from './App';
import Search from './Search';
import Display from './Display';

export default class Events {
  static loadPage() {
    handleRequest('San Francisco').then((weather) => {
      Display.displayCurrentWeather(weather);
    });
  }

  static searchbarListener() {
    const searchButton = document.getElementById('searchButton');
    searchButton.addEventListener('click', () => {
      handleRequest(Search.handleSearch());
    });
  }
}
