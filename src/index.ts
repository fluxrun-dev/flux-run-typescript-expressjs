require("dotenv").config();
import express, { Request, Response } from "express";

const app = express();
const port = process.env.PORT || 32000;

app.get("/", async (req: Request, res: Response) => {
  res.send("Typescript ExpressJS: Hello world");
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
