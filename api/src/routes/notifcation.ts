import { Router } from "express";
import z from "zod";
import prisma from "../lib/prisma-client";

const notificationRouter = Router();

const userIdSchema = z.object({
  userId: z.string().uuid(),
});

const notifcationBodySchema = z.object({
  content: z.string(),
});

notificationRouter.get("/from-user/:userId", async (req, res) => {
  const { userId } = req.params;

  userIdSchema.safeParse({ userId });

  const notifcation = await prisma.notification.findFirst({
    where: {
      userId: userId,
    },
  });

  if (!notifcation) {
    
  }

  res.json(notifcation);
});

notificationRouter.post("/to-user/:userId", async (req, res) => {
  const { userId } = req.params;

  userIdSchema.safeParse({ userId });

  const { content } = req.body;

  notifcationBodySchema.safeParse({ content });

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
