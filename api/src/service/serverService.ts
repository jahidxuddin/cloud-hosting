import {Server} from "@prisma/client";
import prisma from "../lib/prisma-client";
import exp = require("node:constants");

export async function getServer(): Promise<Server[] | null> {
    const server = await prisma.server.findMany();
    return server;
}

export async function getServerById(id: string): Promise<Server[] | null> {
    const server = await prisma.server.findMany({
        where: {
            id: id,
        }
    })
    if (server) {
        return server;
    } else {
        return null;
    }
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