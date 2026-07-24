import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductSection from './components/ProductSection';
import FooterBanner from './components/FooterBanner';
import Banner from './components/Banner';
import Footer from './components/Footer';
import { banners } from './constants/banners.js';
import { matchaProducts, latteProducts, dessertProducts,} from "./data/products.js";

import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Features bgColor="#FFF5E4" />
      <Banner 
      bgimage={banners.matcha.bgimage}
      title={banners.matcha.title} 
      subtitle={banners.matcha.subtitle} 
      sectionType={banners.matcha.sectionType} />
      <ProductSection type="MATCHA" products={matchaProducts}  />

        <Banner 
        bgimage={banners.latte.bgimage}
        title={banners.latte.title}
        subtitle={banners.latte.subtitle}
        sectionType={banners.latte.sectionType} />
      <ProductSection type="LATTE" products={latteProducts}  />

        <Banner 
        bgimage={banners.dessert.bgimage}
        title={banners.dessert.title}
        subtitle={banners.dessert.subtitle}
        sectionType={banners.dessert.sectionType} />
      <ProductSection type="DESSERT" products={dessertProducts}  />

      <FooterBanner />
      <Footer />
    </div>
  );
}

export default App;
