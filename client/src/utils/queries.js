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