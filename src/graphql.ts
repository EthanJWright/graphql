import {ApolloServer} from '@apollo/server';
import {gql} from 'graphql-tag';
import {graphSchema, QueryResolvers} from './schema';
import {startStandaloneServer} from '@apollo/server/standalone';

const helloQuery: QueryResolvers['hello'] = async (_parent, {name}) => {
  return `Hello, ${name}`;
};

const helloMutation: QueryResolvers['hello'] = async (_parent, {name}) => {
  return `Hello, ${name}`;
};

const resolvers = {
  Query: {
    hello: helloQuery,
  },
  Mutation: {
    hello: helloMutation,
  },
};

console.log('Starting ApolloServer');

const server = new ApolloServer({
  typeDefs: gql(graphSchema),
  resolvers,
  introspection: true,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
(async () => {
  const {url} = await startStandaloneServer(server, {
    listen: {port: 4000},
  });

  console.log(`🚀  Server ready at: ${url}`);
})();
