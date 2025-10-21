import { Link } from "react-router-dom";
import "../App.css";

export default function Home() {
  return (
    <div className="text-center mb-5">
      <div className=" p-5 bg-white">
        <h2 className="mb-3 text-dark fw-bold">Welcome to Ben's Sky View</h2>
        <p className="lead text-secondary">
          Your personal weather companion — providing real-time forecasts,
          temperature updates, and global weather insights with just one click.
        </p>

        <hr className="my-4" />

          <ul className="list-group list-group-flush mb-4">
            <li className="list-group-item">
              🌍 <strong>Global Weather Access:</strong> Search for any city worldwide.
            </li>
            <li className="list-group-item">
              ☀️ <strong>Live Temperature & Humidity:</strong> Stay updated with real-time data.
            </li>
            <li className="list-group-item">
              🌧️ <strong>Forecast Reports:</strong> Check daily and weekly weather predictions.
            </li>
            <li className="list-group-item">
              🌪️ <strong>Severe Weather Alerts:</strong> Stay safe with instant notifications.
            </li>
            <li className="list-group-item">
              🌅 <strong>Sunrise & Sunset Times:</strong> Plan your day more efficiently.
            </li>
            <li className="list-group-item">
              🌈 <strong>Visual Dashboard:</strong> View weather trends and climate summaries.
            </li>
          </ul>

        <div className="mt-4">
          <Link to="/search" className="btn btn-primary text-white fw-bold btn-lg px-4">
            Get Started
          </Link>
        </div>

        <p className="text-muted mt-4 mb-0">
          Simple • Fast • Reliable — That’s <strong>Ben-Sky-View</strong>
        </p>
      </div>
    </div>
  );
}
