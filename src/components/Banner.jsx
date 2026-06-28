import React from 'react';
import './Banner.css';

const TIPO = {
  matcha: {
    class: "matcha-title",
  },
  latte: {
    class: "latte-title",
  },
  dessert: {
    class: "dessert-title",
  }
};

const Banner = ({ bgimage, title, subtitle, sectionType}) => {  
  const BannerType= TIPO[sectionType];
  return (
    <section className={`section-banner background-image`} style={{ backgroundImage: `url(${bgimage})` }}>
      <div className="container">
        <div className="col-6">
          <h5 className={`title-banner ${BannerType.class}`}> {title}</h5>
          <p className="section-subtitle">{subtitle}</p>
        </div>
      </div>
    </section>
  );
}
export default Banner;