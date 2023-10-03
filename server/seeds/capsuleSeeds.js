const { Capsule } = require("../models");

const capsuleData = [
  {
    title: "Time Capsule Treasures",
    letter: "This is a message from the past.",
    userId: "136204243050",
    openDate: "06/28/2023",
    image: "http://dummyimage.com/192x100.png/cc0000/ffffff",
  },
  {
    title: "Nostalgia Capsule",
    letter: "Hello future generations!",
    userId: "141381681041",
    openDate: "01/20/2023",
    image: "http://dummyimage.com/172x100.png/cc0000/ffffff",
  },
  {
    title: "Time Capsule 2022",
    letter: "Remember us.",
    userId: "121796990730",
    openDate: "07/21/2023",
    image: "http://dummyimage.com/150x100.png/dddddd/000000",
  },
  {
    title: "Time Capsule Legacy",
    letter: "Remember us.",
    userId: "788101089598",
    openDate: "04/27/2023",
    image: "http://dummyimage.com/242x100.png/5fa2dd/ffffff",
  },
  {
    title: "Memories Vault",
    letter: "This is a message from the past.",
    userId: "815757513382",
    openDate: "08/24/2023",
    image: "http://dummyimage.com/178x100.png/ff4444/ffffff",
  },
  {
    title: "Time Capsule 2022",
    letter: "This is a message from the past.",
    userId: "904526920899",
    openDate: "04/01/2023",
    image: "http://dummyimage.com/204x100.png/dddddd/000000",
  },
  {
    title: "Time Capsule Journey",
    letter: "We were here.",
    userId: "103222157018",
    openDate: "04/02/2023",
    image: "http://dummyimage.com/241x100.png/5fa2dd/ffffff",
  },
  {
    title: "Time Capsule Treasures",
    letter: "We were here.",
    userId: "841897115765",
    openDate: "03/03/2023",
    image: "http://dummyimage.com/222x100.png/dddddd/000000",
  },
  {
    title: "Time Capsule Journey",
    letter: "Hello future generations!",
    userId: "310314161064",
    openDate: "05/04/2023",
    image: "http://dummyimage.com/163x100.png/5fa2dd/ffffff",
  },
  {
    title: "Time Capsule Legacy",
    letter: "Hello future generations!",
    userId: "571380261786",
    openDate: "03/01/2023",
    image: "http://dummyimage.com/159x100.png/cc0000/ffffff",
  },
];

const seedCapsules = () => Capsule.insertMany(capsuleData);

module.exports = seedCapsules;
