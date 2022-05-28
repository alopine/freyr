import getWeather from './Weather';
import getLocation from './Location';
import Display from './Display';

// Gets value from searchbar
function handleSearch() {
  const searchbar = document.getElementById('searchbar');
  return searchbar.value.trim();
}

// Handles API call to ensure location is valid, throwing error if not
async function handleRequest(location) {
  try {
    const response = await getLocation(location);
    if (!response) {
      throw new Error('Location not found.');
    } else {
      const weather = await getWeather(response.lat, response.lon);
      return weather;
    }
  } catch (error) {
    Display.displayError(error);
  }
  return null;
}

// Object for storing the coordinates of last location
// to be used when recalling API for unit toggle
class LastCoords {
  constructor(lat, lon) {
    this.lat = lat;
    this.lon = lon;
  }

  getLat() {
    return this.lat;
  }

  setLat(arg) {
    this.lat = arg;
  }

  getLon() {
    return this.lon;
  }

  setLon(arg) {
    this.lon = arg;
  }
}

export { handleSearch, handleRequest, LastCoords };
