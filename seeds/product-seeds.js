const { Product } = require('../models');

const productData = [
  {
    product_name: 'Model C',
    price: 29999.99,
    stock: 1,
    category_id: 1,
    filename: 'black-car.jpg',
    description: 'Lexus',
  },
  {
    product_name: 'Model D',
    price: 39999.99,
    stock: 1,
    category_id: 1,
    filename: 'orange-car.jpg',
    description: 'Brand name',
  },
  {
    product_name: 'Model P',
    price: 49999.99,
    stock: 1,
    category_id: 1,
    filename: 'blue-car.jpg',
    description: 'Chevy',
  },
  {
    product_name: 'Model S',
    price: 100000.0,
    stock: 1,
    category_id: 1,
    filename: 'yellow-car.jpg',
    description: 'Mercedes Benz',
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
