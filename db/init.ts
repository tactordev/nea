// initialise environment variables
import * as dotenv from "dotenv";
dotenv.config();

import { db } from "@/lib/db";
import { usersTable } from "@/db/schema";
import bcrypt from "bcrypt";
import { exit } from "process";

// inserts admin login into database on startup
async function main() {

    // hash and insert password into db
    const hash = await bcrypt.hash("admin@123", parseInt(process.env.SALT_ROUNDS || "10"));
    const insertion = await db.insert(usersTable).values({ username: "admin", passwordHash: hash });
    console.log("Insertion completed.");

    exit() // end
};


main();