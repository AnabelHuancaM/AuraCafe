export const matchaProducts = {
  product1: { image: 'src/assets/img/matcha/1.png', name: 'Matcha green tea frappe', description: 'Una mezcla perfecta de té verde matcha, leche y hielo', price: '$ 4.50' },
  product2: { image: 'src/assets/img/matcha/2.png', name: 'Iced milk matcha latte', description: 'Leche fría con hielo y un toque de té matcha, una bebida refrescante', price: '$ 5.50' },
  product3: { image: 'src/assets/img/matcha/3.webp', name: 'Refreshing matcha boba tea', description: 'Té verde matcha con boba pearls, leche y hielo, una delicia refrescante', price: '$ 5.80' },
  product4: { image: 'src/assets/img/matcha/4.png', name: 'Iced matcha latte', description: 'Bebida a base de matcha y leche fría sobre hielo, con un sabor ligeramente dulce', price: '$ 4.50' }
};

export const latteProducts = {
    product1: { image: 'src/assets/img/latte/1.webp', name: 'Caramel latte with whipped cream', description: 'Un dulce y suave latte con caramelo, servido helado o caliente con crema', price: '$ 4.50' },
    product2: { image: 'src/assets/img/latte/2.webp', name: 'Chocolate milk', description: 'Leche fría o caliente combinada con un rico y cremoso sabor a chocolate', price: '$ 3.50' },
    product3: { image: 'src/assets/img/latte/3.webp', name: 'Chocolate milkshake', description: 'Un batido cremoso y dulce de chocolate, con leche y helado de chocolate, perfecto para el calor', price: '$ 5.50' },
    product4: { image: 'src/assets/img/latte/4.webp', name: 'Iced coffee drink with whipped cream', description: 'Bebida de café con hielo, leche y un toque de vainilla, coronado con crema batida para los más golosos', price: '$ 6.50' }
};

export const dessertProducts = {
    product1: { image: 'src/assets/img/desserts/1.webp', name: 'Caramel latte with whipped cream', description: 'Un dulce y suave latte con caramelo, servido helado o caliente con crema', price: '$ 4.50' },
    product2: { image: 'src/assets/img/desserts/2.webp', name: 'Chocolate milk', description: 'Leche fría o caliente combinada con un rico y cremoso sabor a chocolate', price: '$ 3.50' },
    product3: { image: 'src/assets/img/desserts/3.webp', name: 'Chocolate milkshake', description: 'Un batido cremoso y dulce de chocolate, con leche y helado de chocolate, perfecto para el calor', price: '$ 5.50' },
    product4: { image: 'src/assets/img/desserts/4.webp', name: 'Iced coffee drink with whipped cream', description: 'Bebida de café con hielo, leche y un toque de vainilla, coronado con crema batida para los más golosos', price: '$ 6.50' }
};

const images = import.meta.glob(
  "../assets/img/products/**/*.{png,webp,jpg,jpeg}",
  {
    eager: true,
    import: "default",
  }
);

export const matchaProducts = [
  {
    image: images["../assets/img/products/matcha/1.png"],
    name: "Matcha green tea frappe",
    
  },
];