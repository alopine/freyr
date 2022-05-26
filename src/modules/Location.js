async function getByName(query) {
  const response = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q="${query}"&appid=${process.env.API_KEY}`,
    { mode: 'cors' },
  );
  const locationData = await response.json();
  // Return null if location data cannot be retrieved
  return locationData[0] || null;
}

async function getByZip(query) {
  const response = await fetch(
    `http://api.openweathermap.org/geo/1.0/zip?zip=${query}&appid=${process.env.API_KEY}`,
    { mode: 'cors' },
  );
  const locationData = await response.json();
  // Return null if an error has occurred
  return locationData.cod ? null : locationData;
}

async function getLocation(query) {
  const locationByName = await getByName(query);
  // Attempt API call by ZIP code if direct call fails
  if (!locationByName) {
    const locationByZip = await getByZip(query);
    return locationByZip;
  }
  return locationByName;
}

export default getLocation;
