import "dotenv/config";
import cors from "cors";
import express, { json } from "express";
import { zodMiddleware } from "./middleware/zodMiddleware";
import authRouter from "./routes/auth";
import notificationRouter from "./routes/notifcation";

const app = express();

app.use(zodMiddleware);
app.use(json());
app.use(
  cors({
    origin: "localhost:3000",
  })
);

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/notification", notificationRouter);

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
