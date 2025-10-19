import { useState } from "react";
import "../App.css";

function Search() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const API_KEY = import.meta.env.VITE_WEATHER_KEY;

  const getWeather = async () => {
    if (!city) {
      setError("Please enter a city name");
      return;
    }
    try {
      setError("");
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await res.json();

      if (data.cod === "404") {
        setError("City not found!");
        setWeather(null);
      } else {
        setWeather(data);
      }
    } catch (err) {
      setError("Failed to fetch weather data");
    }
  };

  return (
    <div className="bgclr hs py-3 d-flex flex-column">
      <h1 className="text-center my-5 text-primary fw-bold px-4">
        Weather Forecast
      </h1>

      {/* Search bar */}
      <form
        className="d-flex w-100 justify-content-center mb-4 px-4"
        onSubmit={(e) => {
          e.preventDefault();
          getWeather();
        }}
      >
        <input
          type="text"
          className="form-control me-3 px-3"
          placeholder="Enter city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          style={{ maxWidth: "500px" }}
        />
        <button
          className="btn btn-primary text-white fw-bold px-4"
          type="submit"
        >
          Search
        </button>
      </form>

      {/* Error Message */}
      {error && (
        <p className="text-center bgclr text-danger fw-semibold">{error}</p>
      )}

      {/* Weather Display */}
      {weather && (
        <div className="container my-5">
          <div className="card bgclr text-center py-5 shadow-lg border-0">
            <div className="card-body">
              <h2
                className="text-primary fw-bold mb-4"
                style={{ fontSize: "2rem" }}
              >
                {weather.name}, {weather.sys?.country}
              </h2>

              <div className="row justify-content-center g-4">
                <div className="col-md-3 col-sm-6">
                  <div className="card text-center weather-card p-4 h-100">
                    <div className="emoji fs-1">🌡️</div>
                    <p className="mb-1 fs-5 fw-bold text-muted">Temperature</p>
                    <h2 className="temp-display">{weather.main?.temp}°C</h2>
                  </div>
                </div>

                <div className="col-md-8 col-sm-12">
                  <div className="row text-center g-3">
                    <div className="col-md-4 col-sm-6">
                      <div className="card p-3 humidity">
                        Humidity: {weather.main?.humidity}%
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div className="card p-3 wind">
                        Wind: {weather.wind?.speed} m/s
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div className="card p-3 direction">
                        Direction: {weather.wind?.deg}°
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div className="card p-3 cloud">
                        Cloudiness: {weather.clouds?.all}%
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div className="card p-3 visibility">
                         Visibility: {weather.visibility / 1000} km
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 ">
                      <div className="card p-3 sun1">
                        Sunrise:{" "}
                        {new Date(
                          weather.sys?.sunrise * 1000
                        ).toLocaleTimeString()}
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div className="card p-3 sun2">
                         Sunset:{" "}
                        {new Date(
                          weather.sys?.sunset * 1000
                        ).toLocaleTimeString()}
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 ">
                      <div className="card text-capitalize p-3 smoke">
                        {weather.weather?.[0]?.description}
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                    <div className="card p-3 pressure">
                       Pressure: {weather.main?.pressure} hPa
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
