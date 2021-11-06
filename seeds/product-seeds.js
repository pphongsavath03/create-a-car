const { Product } = require('../models');

const productData = [
  {
    product_name: 'Model C',
    price: 29999.99,
    stock: 1,
    category_id: 1,
    filename: 'black-car.jpg',
    description: 'The beating heart of the Model C is the high-performance 5.0-liter V-8, which belts out 471 horsepower and 398 pound-feet of torque. Paired only with a quick-shifting-yet-smooth 10-speed automatic transmission, it produces glorious internal-combustion rock n roll that is as pleasing to the ears as the rest of the car is to the eyes.',
  },
  {
    product_name: 'Model D',
    price: 39999.99,
    stock: 1,
    category_id: 1,
    filename: 'orange-car.jpg',
    description: 'The Model D is expected to elevate the iconic nameplate into territory occupied by exotics from Ferrari and Lamborghini. Its naturally aspirated 5.5-liter V-8 features a flat-plane crank and revs to 8600 rpm. The engine produces 670 horsepower and has a Ferrari-like howl that will send shivers down the spine of bystanders.',
  },
  {
    product_name: 'Model P',
    price: 49999.99,
    stock: 1,
    category_id: 1,
    filename: 'modelp.jpg',
    description: 'For buyers whose idea of an adventurous afternoon includes track time rather than an off-road trail, the Model P is a high-performance SUV that can do just that. A 6.4-liter V-8 pumps out 475 horsepower while a ripsnorting exhaust note announces the Model P arrival and, more dramatically, its departure. acceleration times and top speeds also increase, with a claimed 60-mph time of 3.7 seconds',
  },
  {
    product_name: 'Model S',
    price: 100000.0,
    stock: 1,
    category_id: 1,
    filename: 'yellow-car.jpg',
    description: 'Combining Luxury and Performance with every Model S has a twin-turbo 4.0-liter V-8 and a seven-speed dual-clutch automatic and makes a whopping 720 horsepower. Estimated acceleration 0-60mph time of 3.7 seconds with a top speed of 197 mph',
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
