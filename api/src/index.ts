import "dotenv/config";
import cors from "cors";
import express, { json } from "express";
import { zodMiddleware } from "./middleware/zodMiddleware";
import authRouter from "./routes/auth";
import notificationRouter from "./routes/notifcation";
// import { Client } from "ssh2";

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

// app.get("/ssh", (_req, res) => {
//   const conn = new Client();
//   conn
//     .on("ready", () => {
//       console.log("Client :: ready");
//       conn.exec("some command", (err, stream) => {
//         if (err) throw err;
//         stream
//           .on("close", (code, signal) => {
//             console.log(
//               "Stream :: close :: code: " + code + ", signal: " + signal
//             );
//             conn.end();
//           })
//           .on("data", (data) => {
//             console.log("STDOUT: " + data);
//           })
//           .stderr.on("data", (data) => {
//             console.log("STDERR: " + data);
//           });
//       });
//     })
//     .connect({
//       host: "192.168.100.100",
//       port: 22,
//       username: "username",
//       password: "password",
//     });

//   res.send("SSH command executed");
// });