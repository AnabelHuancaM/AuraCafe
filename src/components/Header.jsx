import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header container flex justify-between items-center">
      <div className="logo flex items-center gap-2">
        <div className="logo-icon"></div>
        <span className="logo-text">Aura Café & Bites</span>
      </div>
      <nav className="nav">
        <ul className="flex gap-8">
          <li><a href="#menu">Menú</a></li>
          <li><a href="#locales">Locales</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
