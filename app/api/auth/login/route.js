// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
// import prisma from "../../../../lib/prisma";
// import { generateToken } from "../jwt";
// // Inside your login API route handler
// const token = generateToken({ userId: user.id });

// export async function POST(req, res) {
//     const { email, password } = req.body;

//     try {
//         const user = await prisma.user.findUnique({ where: { email } });
//         if (!user) {
//             return res.status(401).json({ message: "Invalid credentials" });
//         }
//         const passwordMatch = await bcrypt.compare(password, user.password);
//         if (!passwordMatch) {
//             return res.status(401).json({ message: "Invalid credentials" });
//         }
//         const token = jwt.sign({ userId: user.id }, "your-secret-key", {
//             expiresIn: "1h",
//         });
//         return res.status(200).json({ token });
//     } catch (error) {
//         console.error("Error authenticating user:", error);
//         return res.status(500).json({ message: "Internal Server Error" });
//     }
// }
