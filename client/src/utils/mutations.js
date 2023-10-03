import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
  mutation RegisterUser(
    $username: String!
    $email: String!
    $password: String!
  ) {
    registerUser(username: $username, email: $email, password: $password) {
      _id
      username
      email
    }
  }
`;

export const LOGIN_USER = gql`
  mutation LoginUser($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      _id
      username
      email
    }
  }
`;
export const CREATE_CAPSULE = gql`
  mutation CreateCapsuleWithPhotos($input: CapsuleInput!) {
    createCapsule(input: $input) {
      _id
      title
      openDate
      letter
    }
  }
`;
export const OPEN_CAPSULE = gql`
  mutation OpenCapsule($id: ID!) {
    openCapsule(id: $id) {
      _id
      title
      isOpened
    }
  }
`;
