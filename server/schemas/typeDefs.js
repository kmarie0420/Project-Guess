const { gql } = require('apollo-server-express');

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
    isOpened: Boolean
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
  input CapsuleInput {
    title: String!
    userId: ID
    letter: String!
}
`;
console.log('typeDefs loaded');
module.exports = typeDefs;
