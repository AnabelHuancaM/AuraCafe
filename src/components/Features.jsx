import React from 'react';
import './Features.css';

const Features = ({bgColor}) => {
  return (
    <section className="section" style={{ backgroundColor: bgColor }}>
      <div className="container mx-auto px-6">
        <h2 className="section-title text-3xl font-semibold mb-8">¿Por qué elegir Aura Café & Bites?</h2>
        <div className='grid lg:grid-cols-2 gap-8 items-center py-12'>
            <div className="space-y-5">
              <div className="features_card">
                  <h3 className="feature-title">Ingredientes seleccionados</h3>
                  <p className="feature-subtitle">Elegimos ingredientes de calidad y origen natural para lograr sabores auténticos en cada preparación.</p>
              </div>
              <div className="features_card">
                  <h3 className="feature-title">Preparación artesanal</h3>
                  <p className="feature-subtitle">Cada bebida se prepara al momento, cuidando cada detalle para ofrecer una experiencia única.</p>
              </div>
              <div className="features_card">
                  <h3 className="feature-title">Alternativas vegetales</h3>
                  <p className="feature-subtitle">Bebidas elaboradas con opciones vegetales que combinan sabor, bienestar y calidad.</p>
              </div>
            </div>

            <div className='flex justify-center'>
              <img src="/src/assets/img/why1.webp" alt="img" className='rounded-xl max-w-md w-full object-cover'/>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Features;
