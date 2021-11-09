const { User } = require('../models');

const userData = [
    
        {
          username: "Samira",
          email: "samira@gmail.com",
          password: "password1"
        },
        {
          username: "Cooper",
          email: "cooper@gmail.com",
          password: "password2"
        },
        {
          username: "Phon",
          email: "phon@gmail.com",
          password: "password3"
        },
        {
          username: "Desiree",
          email: "desiree@gmail.com",
          password: "password4"
        },
 
      
];

const seedUserData = () => User.bulkCreate(userData, {individualHooks: true, returning: true});

module.exports = seedUserData;