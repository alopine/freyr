import getCurrentWeather from './Weather';
import getLocation from './Location';

function handleSearch() {
  const searchbar = document.getElementById('searchbar');
  return searchbar.value.trim();
}

async function handleRequest(location) {
  try {
    const response = await getLocation(location);
    if (!response) {
      throw new Error('Location not found');
    } else {
      const weather = await getCurrentWeather(response.lat, response.lon);
      return weather;
    }
  } catch (error) {
    console.log(error);
  }
  return null;
}

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
