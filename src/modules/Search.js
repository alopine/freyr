export default class Search {
  static handleSearch() {
    const searchbar = document.getElementById('searchbar');
    return searchbar.value.trim();
  }
}
