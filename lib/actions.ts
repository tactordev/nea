"use server";

import { db } from "@/lib/db";
import { usersTable } from "@/db/schema";
import { newSession, delSession } from "@/lib/session";
import { eq } from "drizzle-orm";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";


export async function login(prev: any, data: FormData) {
    const username = data.get("username") as string;
    const pwd = data.get("password") as string;

    if (!username || !pwd) return { error: "Required fields were left blank." };

    const [user] = await db.select().from(usersTable).where(eq(usersTable.username, username)).limit(1);

    if (!user) return { error: "Invalid credentials" };

    const passwordMatch = await bcrypt.compare(pwd, user.passwordHash);
    if (!passwordMatch) return { error: "Invalid credentials." };

    await newSession(user.user_id.toString());
    redirect("/app");
};

export async function logout() {
    await delSession();
    redirect("/");
};
