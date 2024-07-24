import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: ["./src/schema/graph.gql"],
  generates: {
    "./src/schema/generated/graphTypes.generated.ts": {
      plugins: ["typescript", "typescript-operations", "typescript-resolvers"],
      config: {
        nonOptionalTypename: true,
        scalars: {
          DateTime: {
            input: "string",
            output: "Date",
          },
          Percentage: "number",
          JSON: "any",
        },
      },
      hooks: {
        afterOneFileWrite: ["prettier --write"],
      },
    },
  },
};

export default config;
