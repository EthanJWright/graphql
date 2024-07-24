import gql from 'graphql-tag';
import {gqlToString} from './format';

export const helloMutation = gqlToString(gql`
  mutation hello($name: String!)
`);
