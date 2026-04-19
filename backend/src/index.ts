import "reflect-metadata";
import express from "express";
import type { Request, Response } from "express";
import praRouter from "./routers";
import cors from "cors";

const app = express();
const allowedOrigins = (process.env.CORS_ALLOWED_ORIGINS ?? "http://localhost:3000")
  .split(",")
  .map((origin) => origin.trim())
  .filter((origin) => origin.length > 0);

app.use(cors({ 
  origin: allowedOrigins,
  credentials: true
}));

// app.get("/", (req: Request, res:Response) => {
//   res.send("Hello World!");
// });

// マウンティング？してるらしい
app.use("/", praRouter);


app.listen(8000, () => {
  console.log("Server is running on http://localhost:8000");
});