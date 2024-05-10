import cors from "cors";
import "dotenv/config";
import express, { json } from "express";
import { zodMiddleware } from "./middleware/zodMiddleware";

const app = express();

app.use(zodMiddleware);
app.use(json());
app.use(
  cors({
    origin: "localhost:3000",
  })
);

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
