import { User } from "@prisma/client";
import prisma from "../lib/prisma-client";

export async function getUserById(id: string): Promise<User | null> {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  if (!user) {
    return null;
  }

  return {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    password: user.password,
    role: user.role,
    credits: user.credits,
  };
}

export async function getUserByEmail(email: string): Promise<User | null> {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    return null;
  }

  return {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    password: user.password,
    role: user.role,
    credits: user.credits,
  };
}

export async function createUser(request: RegisterRequest) {
  const user = await getUserByEmail(request.email);

  if (user) {
    throw new Error(`User ${request.email} already exists`);
  }

  const newUser = await prisma.user.create({
    data: {
      firstName: request.firstName,
      lastName: request.lastName,
      email: request.email,
      password: request.password,
    },
  });

  if (!newUser) {
    throw new Error(`User ${request.email} could not be created`);
  }
}
