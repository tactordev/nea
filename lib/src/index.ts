import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { eq } from "drizzle-orm";
import { usersTable } from "./db/schema";
import bcrypt from "bcrypt";

const db = drizzle(process.env.DATABASE_URL);


async function main() {
    const user: typeof usersTable.$inferSelect = {
        username: "admin",
        passwordHash: await bcrypt.hash("admin@123", parseInt(process.env.salt_rounds))
    };


    await db.insert(usersTable).values(user);

    const users = await db.select().from(usersTable);
    console.log("Users:", users);



    // await db.update(usersTable).set({ username: "new_username" }).where(eq(usersTable.user_id, 1));
    // await db.delete(usersTable).where(eq(usersTable.user_id, 1));

    
}


main();