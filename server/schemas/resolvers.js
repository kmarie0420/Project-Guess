const { User, Capsule } = require('../models');
const { AuthenticationError } = require("apollo-server-express");
// const { signToken } = require('../middleware/auth');

const resolvers = {
  Query: {
    getTimeCapsules: async () => {
      return await Capsule.find();
    },
    getTimeCapsule: async (parent, { id }) => {
      return await Capsule.findById(id);
    },
   
  },
  Mutation: {
    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });
    
      if (!user) {
        throw new AuthenticationError('Invalid username or password');
      }
    
      const validPassword = await user.isCorrectPassword(password);
      
      if (!validPassword) {
        throw new AuthenticationError('Invalid username or password');
      }
    
      // session or token logic.
      // const token = signToken(user);
      // return { token, user };
      return user;
    },
    registerUser: async (parent, { username, email, password }) => {
      console.log(username, email, password); // For debugging purposes
      const user = new User({ username, email, password });
      await user.save();
      return user;
    },
    createCapsule: async (parent, { input }) => {
      const capsule = new Capsule(input);
      await capsule.save();
      return capsule;
    },
    updateCapsule: async (parent, { id, input }) => {
      const capsule = await Capsule.findByIdAndUpdate(id, input, { new: true });
      return capsule;
    },
    deleteCapsule: async (parent, { id }) => {
      const capsule = await Capsule.findByIdAndDelete(id);
      return capsule ? true : false;
    },
    openCapsule: async (parent, { id }) => {
      const capsule = await Capsule.findById(id);
      return capsule;
    },
    // registerUser: async (parent, { username, email, password }) => {
    //   const user = await User.create({ username, email, password });
    //   const token = signToken(user);
    //   return { token, user };
    // },
  
  },
};

console.log('resolvers loaded');
module.exports = resolvers;
