const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
  }
  type Capsule {
    _id: ID
    title: String
    userId: User
    openDate: String!
    isOpened: Boolean
    photoURLs: [String]
  }
  input CapsuleInput {
    title: String!
    openDate: String!
    letter: String!
    photoURLs: [String]
  }
  type Query {
    getTimeCapsules: [Capsule]
    getTimeCapsule(id: ID!): Capsule
  }
  type Mutation {
    login(username: String!, password: String!): User
    registerUser(username: String!, email: String!, password: String!): User
    createCapsule(input: CapsuleInput): Capsule
    updateCapsule(id: ID!, input: CapsuleInput): Capsule
    deleteCapsule(id: ID!): Capsule
    openCapsule(id: ID!): Capsule
  }
`;
console.log("typeDefs loaded");
module.exports = typeDefs;
