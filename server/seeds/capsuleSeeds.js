const { Capsule } = require("../models");

const capsuleData = [
  {
    id: "285996805147",
    title: "Time Capsule Chronicles",
    letter: "We were here.",
    userId: "276910941798",
    openDate: "01/25/2023",
    photoURLs: "http://dummyphotoURLs.com/135x100.png/5fa2dd/ffffff",
  },
  {
    id: "791973575654",
    title: "Time Capsule Chronicles",
    letter: "This is a message from the past.",
    userId: "338742578780",
    openDate: "05/01/2023",
    photoURLs: "http://dummyphotoURLs.com/104x100.png/5fa2dd/ffffff",
  },
  {
    id: "653341503546",
    title: "Memories Vault",
    letter: "We were here.",
    userId: "315428625785",
    openDate: "03/24/2023",
    photoURLs: "http://dummyphotoURLs.com/139x100.png/ff4444/ffffff",
  },
  {
    id: "400386803737",
    title: "Eternal Remembrance",
    letter: "Hello future generations!",
    userId: "651c62f2dc635c687b8e04e6",
    openDate: "12/22/2025",
    photoURLs: "http://dummyphotoURLs.com/185x100.png/dddddd/000000",
  },
  {
    id: "461250297323",
    title: "Time Capsule 2022",
    letter: "We were here.",
    userId: "651c62f2dc635c687b8e04e6",
    openDate: "03/16/2025",
    photoURLs: "http://dummyphotoURLs.com/195x100.png/cc0000/ffffff",
  },
  {
    id: "706385120631",
    title: "Time Capsule of Dreams",
    letter: "We were here.",
    userId: "651c62f2dc635c687b8e04e6",
    openDate: "05/27/2023",
    photoURLs: "http://dummyphotoURLs.com/163x100.png/dddddd/000000",
  },
  {
    id: "156069729439",
    title: "Time Capsule 1",
    letter: "We were here.",
    userId: "814196610786",
    openDate: "07/09/2023",
    photoURLs: "http://dummyphotoURLs.com/102x100.png/cc0000/ffffff",
  },
  {
    id: "063779916915",
    title: "Memories Vault",
    letter: "This is a message from the past.",
    userId: "623422687152",
    openDate: "03/31/2023",
    photoURLs: "http://dummyphotoURLs.com/182x100.png/cc0000/ffffff",
  },
  {
    id: "663999665232",
    title: "Time Capsule Treasures",
    letter: "This is a message from the past.",
    userId: "774251401495",
    openDate: "02/10/2023",
    photoURLs: "http://dummyphotoURLs.com/135x100.png/cc0000/ffffff",
  },
  {
    id: "901395490561",
    title: "Time Capsule Treasures",
    letter: "We were here.",
    userId: "393760348531",
    openDate: "06/24/2023",
    photoURLs: "http://dummyphotoURLs.com/152x100.png/ff4444/ffffff",
  },
];

const seedCapsules = () => Capsule.insertMany(capsuleData);

module.exports = seedCapsules;
