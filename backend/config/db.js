import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";

dotenv.config();

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

// Creates a SQL connection using our env variables
export const sql = neon(
    `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmode=require&channel_binding=require`
)

// # psql 'postgresql://neondb_owner:npg_6vwxXNQjV8Lh@ep-round-cherry-a8fkitg3-pooler.eastus2.azure.neon.tech/neondb?sslmode=require&channel_binding=require'

// this sql function we export is used as a tagged template literal, which allows us to write SQL queries safely