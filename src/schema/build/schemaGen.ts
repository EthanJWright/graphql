import { readFileSync, writeFileSync } from "fs";
import { join } from "path";
import { buildSchema } from "graphql";
import { printSchemaWithDirectives } from "@graphql-tools/utils";

(() => {
  const schemaTemplate = readFileSync(join(__dirname, "./schemaTemplate.ts"), {
    encoding: "utf-8",
  });
  const graphSchema = readFileSync(join(__dirname, "../graph.gql"), {
    encoding: "utf-8",
  });
  const schema = buildSchema(graphSchema);
  writeFileSync(
    join(__dirname, "../generated/graph.generated.ts"),
    schemaTemplate
      .replace("SCHEMA_SDL", printSchemaWithDirectives(schema))
      .replace("SCHEMA_VAR_NAME", "graphSchema"),
  );
})();
