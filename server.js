import express from "express";
import riddleRouter from "./src/routes/riddleRouter.js";
import playerRouter from "./src/routes/playerRouter.js";

const PORT = 5000;
const server = express();
server.use(express.json());

server.use('/riddles', riddleRouter);
server.use('/players', playerRouter);


server.listen(PORT, () => {
    console.log(`listening to port ${PORT}`);
});
