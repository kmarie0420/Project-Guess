const { Capsule } = require('../models');

const capsuleData = [
  {
    title: "Title for first capsule",
    letter: "This is the first note",
    userId: "65137a456f9d6741dbbea4c7",
  },
  {
    title: "Title for second capsule",
    letter: "This is the second note",
    userId: "65137a456f9d6741dbbea4c8", 
  },
 
];

const seedCapsules = () => Capsule.insertMany(capsuleData);

module.exports = seedCapsules;
