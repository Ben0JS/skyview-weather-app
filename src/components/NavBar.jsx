import { BrowserRouter as Router, Routes, Route , Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary ">
    <div className="container">
    <a className="navbar-brand fs-1 fw-bold text-white" href="#">Ben-Sky-View</a>
 <button className="navbar-toggler text-white border border-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
    <span className="navbar-toggler-icon text-white"></span>
  </button>
      <div className="collapse navbar-collapse pt-4" id="navbarContent">
      <ul className="navbar-nav ms-auto fs-5 custom-mobile-list" >
        <li className="nav-item text-center  p-1 fs-3 fw-bold"><Link className="nav-link  active  text-white" to="/">Home</Link></li>
        <li className="nav-item text-center  p-1 fs-3 fw-bold"><Link className="nav-link  active  text-white" to="/search">Search</Link></li>
        <li className="nav-item text-center  p-1 fs-3 fw-bold"><Link className="nav-link  active  text-white" to="/about">About</Link></li>
      </ul>
      </div>
    </div>

    </nav>
  );
}
