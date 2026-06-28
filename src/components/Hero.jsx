import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container flex items-center justify-between">
        <div className="hero-content flex-col">
          <h1 className="title-hero">Tu pausa, preparada con intención</h1>
          <p className="hero-subtitle">
            Cada receta está pensada para convertir un momento cotidiano en un pequeño ritual.
          </p>
          <button className="hero-cta">Encuentra tu favorita</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
