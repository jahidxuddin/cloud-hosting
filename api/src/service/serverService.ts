import {Server} from "@prisma/client";
import prisma from "../lib/prisma-client";

export function getAllServer(): Promise<Server[]> {
    return prisma.server.findMany();
}

export function getServerById(id: string): Promise<Server[] | null> {
    return prisma.server.findMany({
        where: {
            id: id,
        }
    });
}

export async function getServerByName(name: string): Promise<Server[] | null> {
    const server = await prisma.server.findMany({
        where: {
            name: name,
        }
    })

    if (server){
        return server;
    } else {
        return null;
    }
}