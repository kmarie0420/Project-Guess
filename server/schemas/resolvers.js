const { jwtSecret } = require('../config/config'); 
const { User, Capsule } = require('../models');
const { AuthenticationError } = require("apollo-server-express");
const jwt = require('jsonwebtoken');

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
      console.log("Login mutation triggered. Attempting to login with:", username);
      
      const user = await User.findOne({ username });
      
      if (!user) {
        console.error("User not found in database:", username);
        throw new AuthenticationError('Invalid username or password');
      }
    
      console.log("User retrieved from database:", user);
    
      const validPassword = await user.isCorrectPassword(password);
      if (!validPassword) {
        console.error("Password does not match for user:", username);
        throw new AuthenticationError('Invalid username or password');
      }
    
      // Check if user data is available
      if (!user._id || !user.username || !user.email) {
        console.error("User data is missing:", user);
        throw new Error('User data is missing or incomplete');
      }
    
      const token = jwt.sign({ id: user._id, username: user.username }, jwtSecret, { expiresIn: '24h' });
      
      return user;
    },
    registerUser: async (parent, { username, email, password }) => {
      console.log("Register mutation triggered with details:", username, email, password); 
      const user = new User({ username, email, password });
      await user.save();
      return user;
    },
    createCapsule: async (parent, args) => {
      console.log('Create capsule mutation triggered. Creating capsule with input:', args); 

      try {
          const capsule = new Capsule(args);
          console.log('Capsule to be saved:', capsule);
          await capsule.save();
          console.log('Successfully created capsule:', capsule); 
          return capsule;
      } catch (error) {
          console.error("Error in createCapsule resolver:", error);
          throw error;
      }
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

      // Check if the capsule exists
      if (!capsule) {
          throw new Error("Capsule not found");
      }

      const currentDate = new Date();
      const openDate = new Date(capsule.openDate);

      if (currentDate < openDate) {
          throw new Error("The capsule is not ready to be opened yet.");
      }

      capsule.isOpened = true;
      await capsule.save();

      return capsule;
    }
  }  
};  

console.log('resolvers loaded');
module.exports = resolvers;

