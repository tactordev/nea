import * as dotenv from "dotenv";
dotenv.config();

import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const session_secret = process.env.SESSION_SECRET;
const encoded_secret = new TextEncoder().encode(session_secret);

export async function newSession(userId: string) {
    const expiry = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
    const session = await new SignJWT({ userId })
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("7d")
        .sign(encoded_secret);

    const store = await cookies();
    store.set("session", session, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        expires: expiry,
        sameSite: "lax",
        path: "/"
    });
};


export async function verifySession(token: string | undefined) {
    if (!token) return null;

    try {
        const { payload } = await jwtVerify(token, encoded_secret, {
            algorithms: ["HS256"]
        });

        return payload as { userId: string };
    } catch (err) {
        console.warn(err);
        return null;
    }
}

export async function delSession() {
    const store = await cookies();
    store.delete("session");
};