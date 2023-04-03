import express, { type Request, type Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";

import formsRouter from "../forms/api/forms-router";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("tiny"));

app.use("/forms", formsRouter);

app.use((_, res) => {
  res.status(404).send("Not Found!");
});

app.use((err: Error, req: Request, res: Response) => {
  console.error(err.stack);
  res.status(500).send("Server Error!");
});

export default app;
