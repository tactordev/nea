"use client";
import Cad from "./_components/cad";
import Call from "./_components/call";
import Scenes from "./_components/scenes";
import Units from "./_components/units";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { verifySession } from "@/lib/session";
import { getCookie } from "cookies-next";

const Map = dynamic(() => import("./_components/map"), {
    ssr: false
});

export default function App() {
    // get session from cookie store

    const [session, setSession] = useState<string | null>((() => {
        const sessionCookie = getCookie("session");

        if (sessionCookie) {
            const cookieStr = sessionCookie.toString();
            let valid = false;

            const res = verifySession(cookieStr);
            res.then((data) => {
                if (data.status === 0) {
                    return;
                } else {
                    return valid = true;
                }
            });

            if (valid) {
                return cookieStr;
            }
        }
        
        return null;
    }));

    const router = useRouter();

    useEffect(() => {
        const interval = setInterval(() => {
            // check session token
            if (!session) { // no session token
                router.push("/");
            }

            const res = verifySession(session || undefined);
            res.then((data) => {
                if (data.status === 0) { // invalid session token
                    router.push("/");
                }
            }).catch((err) => {
                console.warn("Error verifying session: ", err);
            });
        }, 1000 * 60 * 5); // loop to check interval every 5 minutes

        return () => clearInterval(interval); // cleanup on unmount
    });

    // frontend
    return (
        <div className="w-full h-full grid grid-cols-3 grid-rows-2">
            <Scenes /> <Call /> <Map /> <Units /> <Cad />
        </div>
    )
}