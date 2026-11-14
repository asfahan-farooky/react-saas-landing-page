import React from "react";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return(
    <>
      <style>
        {`
        * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;}
        
        .navbar {
        display: flex;
        justify-content: space-between;
        background: #111;
        align-items: center;
        height: 75px;
        width: 100%;
        padding: 0 7%;
        position: relative;
        z-index: 1000;
        font-size: 20px
        }

        .nav-link {
        display: flex;
        gap: 20px;
        list-style: none;
        }

        .nav-link a {
        text-decoration: none;
        color: White;
        transition: 0.3s;
        }

        .nav-link a:hover {
        color: green;
        }

        .logo {
        color: white;
        }

        .menu-btn {
        display: none;
        color: white;
        background: #111;
        border-radius: 10px;
        font-size: 25px;
        border: none;
        }

        @media (max-width: 768px) {
        .navbar{
        padding: 0 20px;
        }

        .menu-btn {
        display: block;
        }

        .nav-link{
        flex-direction: column;
        display: none;
        background: #111;
        top: 75px;
        position: absolute;
        left: 0;
        width: 100%;
        display: 25px 0;
        gap: 25px;
        align-items: center;
        }

        .nav-link.active{
        display: flex;
        }
        `}
      </style>

      <nav className="navbar">
        <div className="logo">
          Logo Image
        </div>

        <ul className={`nav-link ${menuOpen ? "active" : ""}`}>
          <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#features" onClick={() => setMenuOpen(false)}>Features</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a></li>
          <li><a href="#contect" onClick={() => setMenuOpen(false)}>Contect</a></li>
        </ul>

        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>
    </>
  );
}

export default Navbar;