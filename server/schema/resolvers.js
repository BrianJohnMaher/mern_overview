const User = require('../models/User');

const resolvers = {
  Query: {
    async getAllUsers() {
      const users = await User.find();

      return users;
    }
  }
}
  module.exports = resolvers;