import { db } from "@/lib/db";
import { usersTable } from "@/db/schema";
import bcrypt from "bcrypt";
import { exit } from "process";

async function main() {
    const hash = await bcrypt.hash("admin@123", process.env.SALT_ROUNDS || 10);
    const insertion = await db.insert(usersTable).values({ username: "admin", passwordHash: hash });
    console.log("Insertion completed.");

    const result = await db.select().from(usersTable);
    console.log("Result: ", result);
    exit()
};


main();