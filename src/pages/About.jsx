export default function About() {
  return (
        <div className=" bg-light py-5 px-3">
          <h2 className="text-center text-primary fw-bold mb-3">About SkyView</h2>
          <p className="text-center text-dark lead mb-4">
            Ben's Sky View is a modern weather forecast application built with <strong>React.js</strong> and powered by the
            <strong> OpenWeather API</strong>. It provides real-time updates and a visually engaging interface to keep
            users informed about weather conditions anytime, anywhere.
          </p>

          <hr className="my-4" />

          <h4 className="text-primary text-center fw-semibold mb-3">Our Mission 🌎</h4>
          <p className="text-center text-muted">
            To make weather information easily accessible, reliable, and beautifully presented — helping users plan their
            day with confidence.
          </p>

          <hr className="my-4" />

          <h4 className="text-primary text-center fw-semibold mb-3">What Makes SkyView Special 🚀</h4>
          <ul className="list-group list-group-flush text-center mb-5">
            <li className="list-group-item">
              💡 <strong>Real-Time Weather:</strong> Get live updates for any city in the world.
            </li>
            <li className="list-group-item">
              📈 <strong>Interactive Interface:</strong> Clean and responsive UI built with React.js & Bootstrap.
            </li>
            <li className="list-group-item">
              🔒 <strong>Reliable Data:</strong> Powered by OpenWeather API for accurate forecasts.
            </li>
            <li className="list-group-item">
              📍 <strong>Location-Based Search:</strong> Instantly view your city’s conditions.
            </li>
            <li className="list-group-item">
              🎨 <strong>User-Friendly Design:</strong> Intuitive, minimal, and visually pleasing layout.
            </li>
          </ul>
        </div>
  );
}
