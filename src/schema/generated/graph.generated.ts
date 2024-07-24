export const graphSchema = `#graphql
schema {
  query: Query
  mutation: Mutation
}

scalar JSON

type Query {
  hello(name: String!): String
}

type Mutation {
  hello(name: String!): String
}
`;
