"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const pg_1 = require("pg");
exports.pool = new pg_1.Pool({
    host: "db",
    port: 5432,
    user: "user",
    password: "password",
    database: "mydb",
});
