import { z } from "zod";

const messageSchema = z.object({
  message: z.string(),
  statusCode: z.number(),
});

const tokenSchema = z.object({
  token: z.string(),
});

const userSchema = z.object({
  uuid: z.string().uuid(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  roles: z.string(),
  credits: z.number(),
});

const updateAccountDataRequestSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  password: z.string(),
});

const notificationObjectSchema = z.object({
  uuid: z.string().uuid(),
  content: z.string(),
  createdAt: z.date(),
});

const notificationsArraySchema = z.array(notificationObjectSchema);

export {
  messageSchema,
  tokenSchema,
  userSchema,
  updateAccountDataRequestSchema,
  notificationsArraySchema,
};
