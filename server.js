import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import riddleRouter from "./src/routes/riddleRouter.js";
import playerRouter from "./src/routes/playerRouter.js";
import userRouter from "./src/routes/authRouter.js";
import cookieParser from "cookie-parser";

const PORT = 5000;
const server = express();
server.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "https://riddle-game-web.netlify.app",
    ],
    credentials: true,
  })
);
server.use(cookieParser());
server.use(express.json());

server.use("/users", userRouter);
server.use("/riddles", riddleRouter);
server.use("/players", playerRouter);

server.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
