import { GraphQLClient } from "graphql-request";
import { API_URL } from "@/config/consts/apiConst";

const client = new GraphQLClient(API_URL);

const makeGraphQLRequest = async (query: string, variables = {}) => {
  try {
    return await client.request(query, variables);
  } catch (err) {
    throw err;
  }
};

export default makeGraphQLRequest;
