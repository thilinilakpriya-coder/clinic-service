import React from "react"; // Import the CSS file for styling
import Logo from "../assets/rectangle.png";


function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-container">
        <div className="nav-left">
          <img src={Rectangle} alt="logo" className="brand-image" />
        </div>

        <button className="book-btn">📅 BOOK APPOINTMENT</button>
      </div>
    </header>
  );
}

export default Navbar;
