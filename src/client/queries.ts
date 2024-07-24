import gql from 'graphql-tag';
import {gqlToString} from './format';

export const helloQuery = gqlToString(gql`
  query {
    hello(name: String!): String
  }
`);
