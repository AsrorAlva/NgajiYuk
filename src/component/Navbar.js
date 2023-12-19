import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";

function Navbar() {
  return (
    <nav className="app-header fixed-navbar">
      <div className="header-left">
        <Link to="/">
          <img src={Logo} alt="Logo Aplikasi" className="logo" />
        </Link>
      </div>
      <div className="header-right">
        <ul className="menu">
          <li className="dropdown">
            <Link to="/quran">Qur'an</Link>
          </li>
          <li>
            <Link to="/tentang">Tentang</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
