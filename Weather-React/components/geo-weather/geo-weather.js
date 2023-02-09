import { WEATHER_API_KEY } from "../../api";

const Geoweather = (data) => {
  navigator.geolocation.getCurrentPosition((position) => {
    // console.log("Lat:" + position.coords.latitude);
    // console.log("Lon:" + position.coords.longitude);
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    ).then(async (response) => {
      let data = await response.json();
      // console.log(data);
    });
  });
  return (
    <div>
      <div className="weather">
        <div className="top">
          <div>
            <p className="city">Tabriz</p>
            <p className="weather-description">Sunny</p>
          </div>
          <img alt="weather" className="weather-icon" src="icons/10d.png" />
        </div>
        <div className="bottom">
          <p className="temperature">18°C</p>
          <div className="details">
            <div className="parameter-row">
              <span className="parameter-label top">Details</span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">Feels like</span>
              <span className="parameter-value">12°C</span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">Wind</span>
              <span className="parameter-value">2 m/s</span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">humidity</span>
              <span className="parameter-value">6%</span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">pressure</span>
              <span className="parameter-value">15 hPa</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Geoweather;
