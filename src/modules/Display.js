export default class Display {
  static displayCurrentWeather(weather) {
    this.clearError();
    const currentWeather = document.querySelector('.currentWeather');
    currentWeather.innerHTML = `
    <section class="currentMainPanel">
      <div class="currentTemp">
        <div class="tempWrapper">
          <img src="${weather.img}">
          ${weather.temperature} 
          <span id="toggleButton">${weather.symbol}
            <span class="toggle"> | ${weather.oppSymbol}</span>
          </span>
        </div>
      <div>Feels Like ${weather.feel}</div>
      </div>
      <div class="currentHeader">
        <div>${weather.date}</div>
        <div>${weather.time}</div>
        <div class="weatherDesc">${weather.desc}</div>
      </div>
    </section>
    <section class="detailsPanel">
      <section>
        <div class="detailItem">
          <div>Max Temp</div>
          <div>${weather.max}</div>
        </div>
        <div class="detailItem">
          <div>Min Temp</div>
          <div>${weather.min}</div>
        </div>
        <div class="detailItem">
          <div>Pressure</div>
          <div>${weather.pressure}</div>
        </div>
        <div class="detailItem">
          <div>Humidity</div>
          <div>${weather.humidity}</div>
        </div>
        <div class="detailItem">
          <div>Wind</div>
          <div>${weather.wind}</div>
        </div>
    </section>
    <section>
      <div class="detailItem">
        <div>Cloud Cover</div>
        <div>${weather.cloudiness}</div>
      </div>
      <div class="detailItem">
        <div>Rain</div>
        <div>${weather.rain}</div>
      </div>
      <div class="detailItem">
        <div>Snow</div>
        <div>${weather.snow}</div>
      </div>
      <div class="detailItem">
        <div>Sunrise</div>
        <div>${weather.sunrise}</div>
      </div>
      <div class="detailItem">
        <div>Sunset</div>
        <div>${weather.sunset}</div>
      </div>
      </section>
    </section>
    `;
    document.getElementById('locationHeader').innerText = weather.place;
  }

  static displayForecast(forecast) {
    const forecastRow = document.querySelector('.forecast');
    forecastRow.innerHTML = '';
    forecast.forEach((forecastDay) => {
      const forecastCell = document.createElement('div');
      forecastCell.classList.add('forecastCell');
      forecastCell.innerHTML = `
      <div class="dayHeader">${forecastDay.day}</div>
      <img src="${forecastDay.img}">
      <div class="forecastDesc">${forecastDay.desc}</div>
      <div class="forecastMax">${forecastDay.max}</div>
      <div>${forecastDay.min}</div>
      `;
      forecastRow.appendChild(forecastCell);
    });
  }

  static displayError(error) {
    document.querySelector('.errorWrapper').innerHTML = `
      ${error} Please use the format "City, State, Country" or "Postal Code, Country".
    `;
  }

  static clearError() {
    document.querySelector('.errorWrapper').innerHTML = '';
  }
}
