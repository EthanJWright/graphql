import {DocumentNode} from 'graphql';
export const gqlToString = (gql: DocumentNode): string => {
  if (!gql?.loc?.source?.body) {
    throw new Error('Invalid gql');
  }
  return gql.loc.source.body;
};
