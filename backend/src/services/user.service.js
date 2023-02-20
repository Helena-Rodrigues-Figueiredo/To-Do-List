const { User } = require('../models');

const findEmail = async (email) => {
    const userEmail = await User.findOne({ where: { email } });
    return userEmail;
};

const createUser = async ({ name, email, password }) => {
    const userEmail = await findEmail(email);
  
    if (userEmail === null) {
     return User.create({ name, email, password });
    }
  };

module.exports = {
    findEmail,
    createUser
  };
  