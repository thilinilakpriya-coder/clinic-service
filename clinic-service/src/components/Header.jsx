import React from "react";
import { Link } from "react-router-dom"; // Import Link


function Header() {
  return (
    <header className="navbar">
      <div className="nav-container">
        <nav className="nav-links">
          <Link to="/" className="home-link">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/DoctorList">Doctors</Link>
          <Link to="/contact">Contact Us</Link>
        </nav>
        <Link to="/ManageAppointments">
          <button className="book-btn">📅 BOOK APPOINTMENT</button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
