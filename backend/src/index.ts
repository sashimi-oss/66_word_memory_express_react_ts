import express from "express";
import type { Request, Response } from "express";
import router from "./routers";

const app = express();

app.get("/", (req: Request, res:Response) => {
  res.send("Hello World!");
});

// マウンティング？してるらしい
app.use("/router", router);


app.listen(8000, () => {
  console.log("Server is running on http://localhost:8000");
});