import { gql } from "graphql-request";

const getAllCategoriesQuery = gql`
  query CategoryCollection {
    categoryCollection(first: 10) {
      edges {
        node {
          name
          shortname
          description
          parentID
          id
        }
      }
    }
  }
`;

const createCategoryMutation = gql`
  mutation CategoryCreate {
  categoryCreate(input: CategoryCreateInput!) {
    category {
      name
      shortname
      description
      parentID
      id
    }
  }
}
`;

export { getAllCategoriesQuery, createCategoryMutation };
