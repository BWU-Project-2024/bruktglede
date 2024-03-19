import { PrismaClient } from "@prisma/client";
import { evalManifestWithRetries } from "next/dist/server/load-components";

let prisma;

if (process.env.NODE_ENV === "production") {
    prisma = new PrismaClient();
} else {
    if (!global.prisma) {
        global.prisma = new PrismaClient();
    }
    prisma = global.prisma;
}

export default prisma;
