const { User } = require('../models');

const userData = [
    
        {
          username: "Desiree",
          email: "desiree@live.com",
          password: "Password1234"
        },
        {
          username: "Phon",
          email: "phon@gmail.com",
         password: "Password1234"
        },
        {
          username: "Cooper",
          email: "cooper@aol.com",
         password: "Password1234"
        },
        {
          username: "Samira",
          email: "samira@hotmail.com",
         password: "Password1234"
        }
      
      
];

const seedUserData = () => User.bulkCreate(userData);

module.exports = seedUserData;