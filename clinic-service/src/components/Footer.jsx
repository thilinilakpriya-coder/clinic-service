import React from "react";
import { Link } from "react-router-dom"; // 👉 Import Link
import "../assets/footer.css"; // CSS path
import FooterLogo from "../assets/FooterLogo.png"; // Logo path

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* 🔷 Logo + About Section */}
        <div className="footer-section about">
          <img src={FooterLogo} alt="MediCare Logo" className="footer-logo" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum.
          </p>
        </div>

        {/* 🔶 Contact Section */}
        <div className="footer-section contact">
          <h3>Contact us</h3>
          <p><strong>Address</strong> Milton Str. 26–27 London UK</p>
          <p><strong>Phone</strong> +53 345 7953 32453</p>
          <p><strong>Email</strong> yourmail@gmail.com</p>
        </div>

        {/* 🔶 Useful Links Section */}
        <div className="footer-section links">
          <h3>Useful Links</h3>
          <ul>
            <li><Link to="/" className="footer-link">Home</Link></li>
            <li><Link to="/about" className="footer-link">About us</Link></li>
            <li><Link to="/departments" className="footer-link">Departments</Link></li>
            <li><Link to="/contact" className="footer-link">Contact</Link></li>
            <li><Link to="/faq" className="footer-link">FAQ</Link></li>
            <li><Link to="/testimonials" className="footer-link">Testimonials</Link></li>
          </ul>
        </div>

      </div>

      {/* 🔸 Bottom Section */}
      <div className="footer-bottom">
        <p>© 2025 All rights reserved. MediCare Clinic</p>
      </div>
    </footer>
  );
}

export default Footer;
