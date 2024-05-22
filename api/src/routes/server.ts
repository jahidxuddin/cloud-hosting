import { Router } from "express";
import {getServer, getServerById} from "../service/serverService";

const serverRouter = Router();

serverRouter.get("/", async (req, res) => {
    const [server] = await getServer();
    res.send(server);
})

serverRouter.get("/:id", async (req, res) => {
    const [server] = await getServerById(req.params.id);
    res.send(server);
})

export default serverRouter;