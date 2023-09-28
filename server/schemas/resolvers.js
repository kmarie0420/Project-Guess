const { User, Capsule } = require('../models');
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
  },
};
console.log('resolvers loaded');
module.exports = resolvers;