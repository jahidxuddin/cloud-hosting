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

const serverSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  ram: z.number(),
  cpu: z.number(),
  storage: z.number(),
  price: z.number(),
  status: z.boolean(),
});

const serverArraySchema = z.array(serverSchema);

const notificationSchema = z.object({
  uuid: z.string().uuid(),
  content: z.string(),
  createdAt: z.date(),
});

const notificationsArraySchema = z.array(notificationSchema);

export {
  messageSchema,
  tokenSchema,
  userSchema,
  updateAccountDataRequestSchema,
  notificationsArraySchema,
  serverArraySchema,
};
