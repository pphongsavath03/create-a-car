const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Cars',
  },
  {
    category_name: 'exteriorColor',
  },
  {
    category_name: 'interiorColor',
  },
  {
    category_name: 'wheels',
  }
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;