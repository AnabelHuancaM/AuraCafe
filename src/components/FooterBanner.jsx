import React from 'react';
import './FooterBanner.css';

const FooterBanner = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-banner bg-img">
          <div className='cta-content'>
              <h2 className="cta-title">Comparte tu momento Aura</h2>
              <p className="cta-subtitle">
                Cada pausa tiene una historia. Comparte tus fotografías, experiencias y bebidas favoritas utilizando nuestros hashtags y forma parte de la comunidad Aura.
              </p>
              <span className='badge'>@AuraCafeBites</span>
              <span className='badge'>@#MiMomentoAura</span>
            </div>
          </div>
       
      </div>
    </section>
  );
};

export default FooterBanner;
