import { Server } from "@prisma/client";
import prisma from "../lib/prisma-client";

<<<<<<< HEAD
export async function getServer(): Promise<Server[] | null> {
  const server = await prisma.server.findMany();
  return server;
}

export async function getServerById(id: string): Promise<Server[] | null> {
  const server = await prisma.server.findMany({
    where: {
      id: id,
    },
  });
  if (server) {
    return server;
  } else {
    return null;
  }
=======
export function getAllServer(): Promise<Server[]> {
    return prisma.server.findMany();
}

export function getServerById(id: string): Promise<Server[] | null> {
    return prisma.server.findMany({
        where: {
            id: id,
        }
    });
>>>>>>> 3abd74945931e4702bea75babd288a33f6e7da73
}

export async function getServerByName(name: string): Promise<Server[] | null> {
  const server = await prisma.server.findMany({
    where: {
      name: name,
    },
  });

  if (server) {
    return server;
  } else {
    return null;
  }
}
