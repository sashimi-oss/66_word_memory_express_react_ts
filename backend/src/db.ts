import { Pool } from "pg";

export const pool = new Pool({
  host: "db",
  port: 5432,
  user: "user",
  password: "password",
  database: "mydb",
});