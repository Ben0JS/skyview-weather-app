import { BrowserRouter as Router, Routes, Route , Link } from "react-router-dom";
import { useEffect } from "react";

// Bootstrap imports
import * as bootstrap from "bootstrap"; 
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; 
export default function NavBar() {

  useEffect(() => {
    const navLinks = document.querySelectorAll(".nav-link");
    const menuToggle = document.getElementById("navbarContent");

    if (!menuToggle) return;

    const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        bsCollapse.hide();
      });
    });

    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener("click", () => {
          bsCollapse.hide();
        });
      });
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary ">
    <div className="container">
    <a className="navbar-brand fs-1 fw-bold text-white" href="#">Ben-Sky-View</a>
 <button className="navbar-toggler text-white border border-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
    <span className="navbar-toggler-icon text-white"></span>
  </button>
      <div className="collapse navbar-collapse pt-4" id="navbarContent">
      <ul className="navbar-nav ms-auto fs-5 custom-mobile-list" >
        <li className="nav-item text-center  p-1 fs-4 fw-bold"><Link className="nav-link  active  text-white" to="/">Home</Link></li>
        <li className="nav-item text-center  p-1 fs-4 fw-bold"><Link className="nav-link  active  text-white" to="/search">Search</Link></li>
        <li className="nav-item text-center  p-1 fs-4 fw-bold"><Link className="nav-link  active  text-white" to="/about">About</Link></li>
      </ul>
      </div>
    </div>

    </nav>
  );
}
