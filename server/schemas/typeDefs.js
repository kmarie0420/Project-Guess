const { gql } = require('apollo-server-express');
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
  }
  type Capsule {
    _id: ID
    note: String
    userId: User
  }
  type Query {
    getTimeCapsules: [Capsule]
    getTimeCapsule(id: ID!): Capsule
  }
  type Mutation {
    createCapsule(input: CapsuleInput): Capsule
    updateCapsule(id: ID!, input: CapsuleInput): Capsule
    deleteCapsule(id: ID!): Capsule
    openCapsule(id: ID!): Capsule
  }
  input CapsuleInput {
    note: String
    userId: ID
  }
`;
console.log('typeDefs loaded');
module.exports = typeDefs;