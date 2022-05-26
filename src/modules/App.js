import getCurrentWeather from './CurrentWeather';
import getLocation from './Location';

export default async function handleRequest(location) {
  try {
    const response = await getLocation(location);
    if (!response) {
      throw new Error('Location not found');
    } else {
      const weather = await getCurrentWeather(response);
      console.log(weather);
      return weather;
    }
  } catch (error) {
    console.log(error);
  }
}
