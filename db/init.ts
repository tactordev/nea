// initialise environment variables
import * as dotenv from "dotenv";
dotenv.config();

import { db } from "@/lib/db";
import { usersTable } from "@/db/schema";
import bcrypt from "bcrypt";
import { exit } from "process";

// inserts admin login into database on startup
async function main() {
<<<<<<< HEAD

    // hash and insert password into db
    const hash = await bcrypt.hash("admin@123", parseInt(process.env.SALT_ROUNDS || "10"));
=======
    let salt_rounds: Number = 10;
    
    try {
        const temp = process.env.SALT_ROUNDS;
        salt_rounds = parseInt(temp);
    } catch (err) {
        console.warn("Error passing salt rounds: ", err);
    }
    
    const hash = await bcrypt.hash(process.env.ADMIN_PASSWORD || "admin@123", salt_rounds);
>>>>>>> 100ae6c5700e78eb34454673fd7a6a3638bb2c5d
    const insertion = await db.insert(usersTable).values({ username: "admin", passwordHash: hash });
    console.log("Insertion completed.");

    exit() // end
};


main();
