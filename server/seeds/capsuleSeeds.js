const { Capsule } = require('../models');

const capsuleData = [
  {
    note: "This is the first note",
    userId: "65137a456f9d6741dbbea4c7",
  },
  {
    note: "This is the second note",
    userId: "65137a456f9d6741dbbea4c8", 
  },
 
];

const seedCapsules = () => Capsule.insertMany(capsuleData);

module.exports = seedCapsules;
