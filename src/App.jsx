import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductSection from './components/ProductSection';
import FooterBanner from './components/FooterBanner';
import Banner from './components/Banner';
import Footer from './components/Footer';
import './App.css';

function App() {
  const matchaProducts = [
    { image: 'src/assets/img/products/matcha/1.png', name: 'Matcha green tea frappe', description: 'Una mezcla perfecta de té verde matcha, leche y hielo', price: '$ 4.50' },
    { image: 'src/assets/img/products/matcha/2.png', name: 'Iced milk matcha latte', description: 'Leche fría con hielo y un toque de té matcha, una bebida refrescante', price: '$ 5.50' },
    { image: 'src/assets/img/products/matcha/3.webp', name: 'Refreshing matcha boba tea', description: 'Té verde matcha con boba pearls, leche y hielo, una delicia refrescante', price: '$ 5.80' },
    { image: 'src/assets/img/products/matcha/4.png', name: 'Iced matcha latte', description: 'Bebida a base de matcha y leche fría sobre hielo, con un sabor ligeramente dulce', price: '$ 4.50' }
  ];

  const latteProducts = [
    { image: 'src/assets/img/products/latte/1.webp', name: 'Caramel latte with whipped cream', description: 'Un dulce y suave latte con caramelo, servido helado o caliente con crema', price: '$ 4.50' },
    { image: 'src/assets/img/products/latte/2.webp', name: 'Chocolate milk', description: 'Leche fría o caliente combinada con un rico y cremoso sabor a chocolate', price: '$ 3.50' },
    { image: 'src/assets/img/products/latte/3.webp', name: 'Chocolate milkshake', description: 'Un batido cremoso y dulce de chocolate, con leche y helado de chocolate, perfecto para el calor', price: '$ 5.50' },
    { image: 'src/assets/img/products/latte/4.webp', name: 'Iced coffee drink with whipped cream', description: 'Bebida de café con hielo, leche y un toque de vainilla, coronado con crema batida para los más golosos', price: '$ 6.50' }
  ];

  const dessertProducts = [
    { image: 'src/assets/img/products/desserts/1.webp', name: 'Caramel latte with whipped cream', description: 'Un dulce y suave latte con caramelo, servido helado o caliente con crema', price: '$ 4.50' },
    { image: 'src/assets/img/products/desserts/2.webp', name: 'Chocolate milk', description: 'Leche fría o caliente combinada con un rico y cremoso sabor a chocolate', price: '$ 3.50' },
    { image: 'src/assets/img/products/desserts/3.webp', name: 'Chocolate milkshake', description: 'Un batido cremoso y dulce de chocolate, con leche y helado de chocolate, perfecto para el calor', price: '$ 5.50' },
    { image: 'src/assets/img/products/desserts/4.webp', name: 'Iced coffee drink with whipped cream', description: 'Bebida de café con hielo, leche y un toque de vainilla, coronado con crema batida para los más golosos', price: '$ 6.50' }
  ];

  return (
    <div className="app">
      <Header />
      <Hero />
      <Features bgColor="#FFF5E4" />
      <Banner 
      bgimage="/src/assets/img/banners/banner1.webp" 
      title="Lo mejor del Matcha" 
      subtitle="Sabores frescos y ligeros que aportan equilibrio y acompañan tu ritmo diario." 
      sectionType="matcha" />
      <ProductSection type="MATCHA" products={matchaProducts}  />

        <Banner 
        bgimage="/src/assets/img/banners/banner2.webp" 
        title="Milkshake & Latte" 
        subtitle="Elaborados con intención para acompañar tu ritmo diario."
        sectionType="latte" />
      <ProductSection type="LATTE" products={latteProducts}  />

        <Banner 
        bgimage="/src/assets/img/banners/banner3.webp" 
        title="Bocados dulces" 
        subtitle="Texturas y sabores horneados cada mañana para endulzar tu pausa."
        sectionType="dessert" />
      <ProductSection type="DESSERT" products={dessertProducts}  />

      <FooterBanner />
      <Footer />
    </div>
  );
}

export default App;
