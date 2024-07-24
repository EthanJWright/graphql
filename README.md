# GraphQL Playground

This repo is a quick start to mess with GraphQL.

It comes with a graph defined using the gql file in `./src/schema/graph.gql`

The server and resolvers are defined in `./src/graphql.ts`

Example TS client queries can be found in `./src/client/queries.ts`

## Getting Started

Install dependencies:

```bash
npm install
```

To start the server run:

```bash
npm run start
```

Once it's running access the apollo server here:
[http://localhost:4000](http://localhost:4000)

To re-generate the graphql types after changing the `graph.gql` file run:

```bash
npm run build

```

## Resources

[Apollo Getting Started](https://www.apollographql.com/docs/apollo-server/getting-started/)
[GraphQL Docs](https://graphql.org/learn/)
[GraphQL Playground](https://www.apollographql.com/docs/apollo-server/testing/graphql-playground/)
