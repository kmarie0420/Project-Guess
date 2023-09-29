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

  type AuthResponse {
    token: String!
    user: User!
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
    deleteCapsule(id: ID!): Boolean
    openCapsule(id: ID!): Capsule
    registerUser(username: String!, email: String!, password: String!): AuthResponse!
  }

  input CapsuleInput {
    note: String
    userId: ID
  }
`;

console.log('typeDefs loaded');

module.exports = typeDefs;
