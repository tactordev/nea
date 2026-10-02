import * as dotenv from "dotenv";
dotenv.config();


import { db } from "@/lib/db";
import { usersTable } from "@/db/schema";
import bcrypt from "bcrypt";
import { exit } from "process";


async function main() {
    let salt_rounds: Number = 10;
    
    try {
        const temp = process.env.SALT_ROUNDS;
        salt_rounds = parseInt(temp);
    } catch (err) {
        console.warn("Error passing salt rounds: ", err);
    }
    
    const hash = await bcrypt.hash(process.env.ADMIN_PASSWORD || "admin@123", salt_rounds);
    const insertion = await db.insert(usersTable).values({ username: "admin", passwordHash: hash });
    console.log("Insertion completed.");

    const result = await db.select().from(usersTable);
    console.log("Result: ", result);
    exit()
};


main();
