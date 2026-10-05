// initialise environment variables
import * as dotenv from "dotenv";
dotenv.config();

import { db } from "@/lib/db";
import { usersTable } from "@/db/schema";
import bcrypt from "bcrypt";
import { exit } from "process";

// inserts admin login into database on startup
async function main() {

    // attempt to fetch salt_rounds from .env
    let salt_rounds: number = 10;
    try {
        const temp = process.env.SALT_ROUNDS;
        salt_rounds = parseInt(temp!); // attempt to parse
    } catch (err) {
        // if not found, warn using the default value
        console.warn("Error passing salt rounds: ", err);
    }
    
    // hash and insert pwd into db
    const hash = await bcrypt.hash(process.env.ADMIN_PASSWORD || "admin@123", salt_rounds);
    const insertion = await db.insert(usersTable).values({ username: "admin", passwordHash: hash });
    console.log("Insertion completed.");

    exit() // end
};


main();
