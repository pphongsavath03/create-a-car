const seedCategories = require('./category-seeds');
const seedProducts = require('./product-seeds');
const seedTags = require('./tag-seeds');
const seedProductTags = require('./product-tag-seeds');
const seedUserData = require("./user-seeds")

const sequelize = require('../config/connection');


const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedProducts();
  console.log('\n----- PRODUCTS SEEDED -----\n');

  await seedTags();
  console.log('\n----- TAGS SEEDED -----\n');

  try{
  await seedProductTags();
  }
  catch(err){
    console.log(err)
  }
  
  console.log('\n----- PRODUCT TAGS SEEDED -----\n');
  try{
  await seedUserData(); 
  }
  catch(err){
    console.log(err)
  }

  process.exit(0);
};

seedAll();