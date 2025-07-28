import dotenv from "dotenv";
dotenv.config();

import express from "express";
import riddleRouter from "./src/routes/riddleRouter.js";
import playerRouter from "./src/routes/playerRouter.js";
import userRouter from "./src/routes/authRouter.js";
import cookieParser from "cookie-parser";

const PORT = 5000;
const server = express();
server.use(cookieParser());
server.use(express.json());

server.use('/users', userRouter);
server.use('/riddles', riddleRouter);
server.use('/players', playerRouter);


server.listen(PORT, () => {
    console.log(`listening to port ${PORT}`);
});
