import { PrismaClient } from "@prisma/client";

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

// import { PrismaClient } from "@prisma/client";

// import { PrismaClient } from "@prisma/client";
// export const prisma = new PrismaClient();

// // almost everything in Prisma is async, therefore async function.
// async function main() {
//     // write prisma CLI queries here
//     const user = await prisma.user.create({ name: "Lisa" });
//     console.log(user);
// }

// // nodemon script.js to run and add collection

// main()
//     .catch((error) => {
//         console.log(error.message);
//     })
//     .finally(async () => {
//         await prisma.$disconnect();
//     });
