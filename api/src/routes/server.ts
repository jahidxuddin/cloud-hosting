import { Router } from "express";
import { getAllServer, getServerById } from "../service/serverService";

const serverRouter = Router();

serverRouter.get("/", async (_req, res) => {
    res.json(await getAllServer());
});

serverRouter.get("/:id", async (req, res) => {
    const [server] = await getServerById(req.params.id);
    res.json(server);
});

export default serverRouter;
