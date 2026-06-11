"use client";

import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/components/lf/map"), { ssr: false });

export default function LeafletExample() {
    return (
        <div style={{ height: "100vh" }}>
            <Map posix={[51.505, -0.09]} />
        </div>
    )
}