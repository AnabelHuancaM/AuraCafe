import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer container flex justify-between items-center">
      <div className="footer-logo">
        <div className="logo-icon"></div>
      </div>
      <div className="footer-links flex gap-4">
        <a href="#terminos">Términos y condiciones</a>
        <a href="#privacidad">Aviso de privacidad</a>
      </div>
    </footer>
  );
};

export default Footer;
