/* eslint-disable import/first */
/* eslint-disable-next-line no-process-env */
process.env.NODE_ENV = "test"
require("tsconfig-paths").register()
require("dotenv-flow").config({ silent: true })
import db from "db"
import seed from "db/seeds"

let dbSetup = false

const pluginConfig: Cypress.PluginConfig = (on, _config) => {
  on("task", {
    "db:reset": async () => {
      if (!dbSetup) {
        try {
          // Only need to do this once at startup
          console.log("Resetting database...")
          await db.$reset()
          console.log("Database reset.")
          dbSetup = true
        } catch (error) {
          console.log(error)
          throw new Error("Failed to set up database in cypress/plugins/index.ts")
        }
      }
      return true
    },
    "db:clear": async () => {
      // Delete all data without dropping tables, so migration isn't required
      await db.$executeRaw(`
        do
        $$
        declare
          l_stmt text;
        begin
          select 'truncate ' || string_agg(format('%I.%I', schemaname, tablename), ',')
          into l_stmt from pg_tables
          where schemaname in ('public');
          execute l_stmt;
        end;
        $$
      `)
      return true
    },
    "db:seed": async () => {
      await seed()
      return true
    },
  })
}
export default pluginConfig
