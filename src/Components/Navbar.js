import React from 'react';
import '../Styles/Navbar.css';

function Navbar() {
  return (
    <nav className="custom-navbar">
      <div className="container">
        <div className="logo-section">
          <img src="/Images/icon_navbar.png" alt="Logo" className="nav-icon" />
          <span className="nav-brand">Nexcent</span>
        </div>

        <div className="nav-links">
          <ul>
            <li><a href="#" className="active">Home</a></li>
            <li><a href="#">Service</a></li>
            <li><a href="#">Feature</a></li>
            <li><a href="#">Product</a></li>
            <li><a href="#">Testimonial</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>

        <div className="auth-buttons">
          <button className="login-btn">Login</button>
          <button className="signup-btn">Sign up</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;