import React from 'react';
import './ProductSection.css';


const TIPO = {
  MATCHA: {
    title: "Matcha",
    class: "matcha-title",
  },
  LATTE: {
    title: "Latte",
        class: "latte-title",
      },
      DESSERT: {
        title: "Dessert",
        class: "dessert-title",
      }
    };
    
  const ProductSection = ({ products, type }) => {
    const section = TIPO[type];
  return (
    <section className='section'>
      <div className='container'>
          <div className="grid grid-cols sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product, index) => (
              <div key={index} className="product-card">
                <div className="product-image-container">
                  <img src={product.image} alt="" />
                </div>

                <h3 className={`product-name ${section.class}`}> {product.name}</h3>
                <p className="product-desc">{product.description}</p>
                <h5 className="product-price">{product.price}</h5>
              </div>
            ))}
          </div>
      </div>
    </section>
  );
};

export default ProductSection;