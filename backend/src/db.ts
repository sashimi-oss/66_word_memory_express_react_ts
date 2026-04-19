import { Pool } from "pg";

// データベース接続の設定
export const pool = new Pool({
  host: "db",
  port: 5432,
  user: "user",
  password: "password",
  database: "mydb",
});