import { Router } from "express";
import z from "zod";
import prisma from "../lib/prisma-client";
import { getUserById } from "../service/userService";

const notificationRouter = Router();

const userIdSchema = z.object({
  userId: z.string().uuid(),
});

const notifcationBodySchema = z.object({
  content: z.string(),
});

notificationRouter.get("/read/:userId", async (req, res) => {
  const { userId } = req.params;

  userIdSchema.safeParse({ userId });

  const user = await getUserById(userId);

  if (!user) {
    res.status(404).json({
      status: 404,
      message: `User with id '${userId}' does not exist.`,
    });
    return;
  }

  const notifcation = await prisma.notification.findMany({
    where: {
      userId,
    },
  });

  res.json(notifcation);
});

notificationRouter.post("/send/:userId", async (req, res) => {
  const { userId } = req.params;

  userIdSchema.safeParse({ userId });

  const { content } = req.body;

  notifcationBodySchema.safeParse({ content });

  const user = await getUserById(userId);

  if (!user) {
    res.status(404).json({
      status: 404,
      message: `User with id '${userId}' does not exist.`,
    });
    return;
  }

  const notifcation = await prisma.notification.create({
    data: {
      content,
      userId,
    },
  });

  if (!notifcation) {
    res.status(409).json({
      status: 409,
      message: `Notification already exists or user with id '${userId}' does not exist.`,
    });
  }

  res.json(notifcation);
});

export default notificationRouter;
