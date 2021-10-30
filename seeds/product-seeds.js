const { Product } = require('../models');

const productData = [
  {
    product_name: 'Model C',
    price: 29999.99,
    stock: 1,
    category_id: 1,
  },
  {
    product_name: 'Model D',
    price: 39999.99,
    stock: 1,
    category_id: 1,
  },
  {
    product_name: 'Model P',
    price: 49999.99,
    stock: 1,
    category_id: 1,
  },
  {
    product_name: 'Model S',
    price: 100000.00,
    stock: 1,
    category_id: 1,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;