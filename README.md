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

## Why

This repo bootstraps

- Defining your graph in a `.gql` file instead of a string (hello linting)
- Auto generating TS types for your graph resolvers
- Setting up client requests that have gql formatting

## Notes

### Pretty Neovim

If you use neovim, make sure to add a graphqlrc
location: `~/.graphqlrc`
content:

```txt
schema: https://countries.trevorblades.com/
documents: ./*.graphql
```

Get a [treesitter plugin](https://github.com/bkegley/tree-sitter-graphql)
If using lazyvim you can run `:TSInstall graphql`

## Resources

- [Apollo Getting Started](https://www.apollographql.com/docs/apollo-server/getting-started/)
- [GraphQL Docs](https://graphql.org/learn/)
- [GraphQL Playground](https://www.apollographql.com/docs/apollo-server/testing/graphql-playground/)
