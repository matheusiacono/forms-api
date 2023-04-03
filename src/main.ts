import express from "express";
import dotenv from "dotenv";

dotenv.config();

const port = process.env["PORT"] ?? 3000;

export const app = express();

app.get("/", (_, res) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
