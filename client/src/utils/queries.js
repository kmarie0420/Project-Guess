import { gql } from '@apollo/client';
export const GET_ALL_CAPSULES = gql`
  query GetAllCapsules {
    getAllCapsules {
      _id
      title
      openDate
    }
  }
`;

// get one capsule

export const GET_ONE_CAPSULE = gql`
  query GetOneCapsule($capsuleId: ID!) {
    getOneCapsule(capsuleId: $capsuleId) {
      _id
      title
      letter
      photoURLs
    }
  }
`;

