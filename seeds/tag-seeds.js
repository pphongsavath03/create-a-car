const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'Red',
  },
  {
    tag_name: 'Black',
  },
  {
    tag_name: 'White',
  },
  {
    tag_name: 'Blue',
  },
  {
    tag_name: 'Wheel Type 1',
  },
  {
    tag_name: 'Wheel Type 2',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;